'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SKILLS } from './skills-data';
import { SkillBar } from './components/SkillBar';
import { CategoryIcon } from './components/CategoryIcon';
import { DotIndicator } from './components/DotIndicator';
import { useCarouselGesture } from './hooks/useCarouselGesture';
import type { SkillCategory } from '@/app/types';

const CAROUSEL_CONFIG = {
  MIN_SWIPE_DISTANCE: 50,
  SWIPE_HINT_TIMEOUT_MS: 5000,
  TRANSITION_MS: 150,
  SKILL_DELAY_MS: 80,
  DRAG_RESISTANCE: 0.3,
} as const;

export function SkillsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories: SkillCategory[] = SKILLS;

  const markInteracted = useCallback(() => {
    if (!hasInteracted) {
      setHasInteracted(true);
      setShowSwipeHint(false);
    }
  }, [hasInteracted]);

  const goToNext = useCallback(() => {
    markInteracted();
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % categories.length);
      setIsVisible(true);
    }, CAROUSEL_CONFIG.TRANSITION_MS);
  }, [categories.length, markInteracted]);

  const goToPrev = useCallback(() => {
    markInteracted();
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
      setIsVisible(true);
    }, CAROUSEL_CONFIG.TRANSITION_MS);
  }, [categories.length, markInteracted]);

  const goToIndex = useCallback((index: number) => {
    if (index === currentIndex) return;
    markInteracted();
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsVisible(true);
    }, CAROUSEL_CONFIG.TRANSITION_MS);
  }, [currentIndex, markInteracted]);

  // 初回表示から数秒後にヒントを自動で非表示
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSwipeHint(false);
    }, CAROUSEL_CONFIG.SWIPE_HINT_TIMEOUT_MS);
    return () => clearTimeout(timer);
  }, []);

  // キーボードナビゲーション
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToNext();
      else if (e.key === 'ArrowLeft') goToPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  const { isDragging, dragOffset, handlers } = useCarouselGesture({
    minSwipeDistance: CAROUSEL_CONFIG.MIN_SWIPE_DISTANCE,
    onSwipeLeft: goToNext,
    onSwipeRight: goToPrev,
  });

  const currentCategory = categories[currentIndex];

  return (
    <div className="w-full">
      {/* カルーセルコンテナ */}
      <div
        ref={containerRef}
        className="relative select-none cursor-grab active:cursor-grabbing"
        {...handlers}
      >
        {/* ナビゲーションボタン（デスクトップ） */}
        <button
          onClick={(e) => { e.stopPropagation(); goToPrev(); }}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 p-2 rounded-full bg-white shadow-lg border border-foreground/10 hover:border-primary hover:bg-primary/5 transition-all opacity-70 hover:opacity-100 hidden sm:flex"
          aria-label="Previous category"
        >
          <ChevronLeft className="w-5 h-5 text-foreground/60" />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); goToNext(); }}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 p-2 rounded-full bg-white shadow-lg border border-foreground/10 hover:border-primary hover:bg-primary/5 transition-all opacity-70 hover:opacity-100 hidden sm:flex"
          aria-label="Next category"
        >
          <ChevronRight className="w-5 h-5 text-foreground/60" />
        </button>

        {/* 初回スワイプヒントオーバーレイ */}
        {showSwipeHint && !hasInteracted && (
          <div
            className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
            style={{ animation: 'fadeIn 0.5s ease-out' }}
          >
            <div className="bg-foreground/80 backdrop-blur-sm text-white px-6 py-4 rounded-2xl flex items-center gap-4 shadow-xl">
              <div className="animate-swipe-hint">
                <ChevronLeft className="w-6 h-6" />
              </div>
              <div className="text-center">
                <p className="font-medium text-sm">スワイプで切り替え</p>
                <p className="text-xs text-white/60 mt-0.5">左右にスワイプしてスキルを見る</p>
              </div>
              <div className="animate-swipe-hint-reverse">
                <ChevronRight className="w-6 h-6" />
              </div>
            </div>
          </div>
        )}

        {/* カードコンテナ */}
        <div
          className="overflow-hidden rounded-2xl"
          style={{
            transform: isDragging ? `translateX(${dragOffset * CAROUSEL_CONFIG.DRAG_RESISTANCE}px)` : 'translateX(0)',
            transition: isDragging ? 'none' : 'transform 0.3s ease-out'
          }}
        >
          <div
            className={`
              p-6 sm:p-8 rounded-2xl border-2 border-foreground/10
              bg-gradient-to-br from-white to-primary/5
              transition-all duration-300
              ${isVisible ? 'opacity-100' : 'opacity-0'}
            `}
          >
            {/* カテゴリヘッダー */}
            <div className="text-center mb-6">
              <CategoryIcon icon={currentCategory.icon} isActive={isVisible} />
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-3">
                {currentCategory.name}
              </h2>
              <p className="text-sm text-foreground/50 mt-1">
                {currentCategory.skills.length} skills
              </p>
            </div>

            {/* スキルリスト */}
            <div className="space-y-4">
              {currentCategory.skills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  isVisible={isVisible}
                  delay={index * CAROUSEL_CONFIG.SKILL_DELAY_MS}
                />
              ))}
            </div>

            {/* カテゴリ進捗 */}
            <div className="mt-6 pt-4 border-t border-foreground/5">
              <div className="flex justify-between items-center text-xs text-foreground/40">
                <span>Category {currentIndex + 1} of {categories.length}</span>
                <span className="flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Swipe to explore
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* モバイルスワイプヒント */}
        <div className="flex justify-center mt-4 sm:hidden">
          <div className="flex items-center gap-2 text-xs text-foreground/40">
            <ChevronLeft className="w-4 h-4" />
            <span>Swipe</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* ドットインジケーター */}
      <DotIndicator
        total={categories.length}
        current={currentIndex}
        onDotClick={goToIndex}
      />

      {/* カテゴリプレビュー（横スクロール） */}
      <div className="mt-8 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
        <div className="flex justify-center gap-2 min-w-max">
          {categories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => goToIndex(index)}
              className={`
                flex items-center gap-2 px-3 py-2 rounded-full text-sm whitespace-nowrap
                transition-all duration-300
                ${index === currentIndex
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-foreground/5 text-foreground/60 hover:bg-primary/10 hover:text-primary'
                }
              `}
            >
              <span>{category.icon}</span>
              <span className="hidden sm:inline">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
