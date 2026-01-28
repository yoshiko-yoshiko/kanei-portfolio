'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SKILLS } from '@/app/lib/constants';
import type { SkillCategory, Skill } from '@/app/types';

// スキルバーコンポーネント（表示時にアニメーション）
function SkillBar({ skill, isVisible, delay }: { skill: Skill; isVisible: boolean; delay: number }) {
  const percentage = (skill.level / 5) * 100;

  return (
    <div
      className="space-y-1.5 transform transition-all duration-500"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
      }}
    >
      <div className="flex items-center justify-between text-sm">
        <span className="text-[#1a1a1a] font-medium">{skill.name}</span>
        <span className="text-[#1a1a1a]/40 text-xs">
          {skill.yearsOfExperience}y
        </span>
      </div>
      <div className="w-full bg-[#1a1a1a]/5 rounded-full h-2 overflow-hidden">
        <div
          className="h-2 bg-gradient-to-r from-[#10b981] to-[#34d399] rounded-full transition-all duration-700 ease-out"
          style={{
            width: isVisible ? `${percentage}%` : '0%',
            transitionDelay: `${delay + 100}ms`
          }}
        />
      </div>
    </div>
  );
}

// カテゴリアイコンコンポーネント（弾むアニメーション）
function CategoryIcon({ icon, isActive }: { icon: string; isActive: boolean }) {
  return (
    <span
      className={`
        text-4xl sm:text-5xl inline-block transition-transform duration-300
        ${isActive ? 'animate-bounce-subtle' : ''}
      `}
    >
      {icon}
    </span>
  );
}

// ドットインジケーター
function DotIndicator({
  total,
  current,
  onDotClick
}: {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
}) {
  return (
    <div className="flex justify-center gap-2 mt-6">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`
            w-2.5 h-2.5 rounded-full transition-all duration-300
            ${index === current
              ? 'bg-[#10b981] scale-125'
              : 'bg-[#1a1a1a]/20 hover:bg-[#10b981]/50'
            }
          `}
          aria-label={`Go to skill category ${index + 1}`}
        />
      ))}
    </div>
  );
}

// メインカルーセルコンポーネント
export function SkillsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // スワイプ感度
  const minSwipeDistance = 50;

  const categories: SkillCategory[] = SKILLS;

  // インタラクション時にヒントを非表示
  const markInteracted = useCallback(() => {
    if (!hasInteracted) {
      setHasInteracted(true);
      setShowSwipeHint(false);
    }
  }, [hasInteracted]);

  // 次のカテゴリへ
  const goToNext = useCallback(() => {
    markInteracted();
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % categories.length);
      setIsVisible(true);
    }, 150);
  }, [categories.length, markInteracted]);

  // 前のカテゴリへ
  const goToPrev = useCallback(() => {
    markInteracted();
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
      setIsVisible(true);
    }, 150);
  }, [categories.length, markInteracted]);

  // 特定のインデックスへ
  const goToIndex = useCallback((index: number) => {
    if (index === currentIndex) return;
    markInteracted();
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsVisible(true);
    }, 150);
  }, [currentIndex, markInteracted]);

  // 初回表示から数秒後にヒントを自動で非表示
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSwipeHint(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // タッチイベントハンドラ
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const currentTouch = e.targetTouches[0].clientX;
    setTouchEnd(currentTouch);
    setDragOffset(currentTouch - touchStart);
  };

  const onTouchEnd = () => {
    setIsDragging(false);
    setDragOffset(0);

    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // マウスドラッグハンドラ（デスクトップ用）
  const onMouseDown = (e: React.MouseEvent) => {
    setTouchStart(e.clientX);
    setIsDragging(true);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || touchStart === null) return;
    setDragOffset(e.clientX - touchStart);
  };

  const onMouseUp = (e: React.MouseEvent) => {
    if (!isDragging || touchStart === null) {
      setIsDragging(false);
      return;
    }

    const distance = touchStart - e.clientX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }

    setIsDragging(false);
    setDragOffset(0);
    setTouchStart(null);
  };

  const onMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);
      setTouchStart(null);
    }
  };

  // キーボードナビゲーション
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  const currentCategory = categories[currentIndex];

  return (
    <div className="w-full">
      {/* カルーセルコンテナ */}
      <div
        ref={containerRef}
        className="relative select-none cursor-grab active:cursor-grabbing"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
      >
        {/* ナビゲーションボタン（デスクトップ） */}
        <button
          onClick={(e) => { e.stopPropagation(); goToPrev(); }}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 p-2 rounded-full bg-white shadow-lg border border-[#1a1a1a]/10 hover:border-[#10b981] hover:bg-[#10b981]/5 transition-all opacity-70 hover:opacity-100 hidden sm:flex"
          aria-label="Previous category"
        >
          <ChevronLeft className="w-5 h-5 text-[#1a1a1a]/60" />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); goToNext(); }}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 p-2 rounded-full bg-white shadow-lg border border-[#1a1a1a]/10 hover:border-[#10b981] hover:bg-[#10b981]/5 transition-all opacity-70 hover:opacity-100 hidden sm:flex"
          aria-label="Next category"
        >
          <ChevronRight className="w-5 h-5 text-[#1a1a1a]/60" />
        </button>

        {/* 初回スワイプヒントオーバーレイ */}
        {showSwipeHint && !hasInteracted && (
          <div
            className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
            style={{
              animation: 'fadeIn 0.5s ease-out'
            }}
          >
            <div className="bg-[#1a1a1a]/80 backdrop-blur-sm text-white px-6 py-4 rounded-2xl flex items-center gap-4 shadow-xl">
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
            transform: isDragging ? `translateX(${dragOffset * 0.3}px)` : 'translateX(0)',
            transition: isDragging ? 'none' : 'transform 0.3s ease-out'
          }}
        >
          {/* スキルカード */}
          <div
            className={`
              p-6 sm:p-8 rounded-2xl border-2 border-[#1a1a1a]/10
              bg-gradient-to-br from-white to-[#10b981]/5
              transition-all duration-300
              ${isVisible ? 'opacity-100' : 'opacity-0'}
            `}
          >
            {/* カテゴリヘッダー */}
            <div className="text-center mb-6">
              <CategoryIcon icon={currentCategory.icon} isActive={isVisible} />
              <h2 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] mt-3">
                {currentCategory.name}
              </h2>
              <p className="text-sm text-[#1a1a1a]/50 mt-1">
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
                  delay={index * 80}
                />
              ))}
            </div>

            {/* カテゴリ進捗 */}
            <div className="mt-6 pt-4 border-t border-[#1a1a1a]/5">
              <div className="flex justify-between items-center text-xs text-[#1a1a1a]/40">
                <span>Category {currentIndex + 1} of {categories.length}</span>
                <span className="flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                  Swipe to explore
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* モバイルスワイプヒント */}
        <div className="flex justify-center mt-4 sm:hidden">
          <div className="flex items-center gap-2 text-xs text-[#1a1a1a]/40">
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
        <div className="flex gap-2 min-w-max">
          {categories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => goToIndex(index)}
              className={`
                flex items-center gap-2 px-3 py-2 rounded-full text-sm whitespace-nowrap
                transition-all duration-300
                ${index === currentIndex
                  ? 'bg-[#10b981] text-white shadow-md'
                  : 'bg-[#1a1a1a]/5 text-[#1a1a1a]/60 hover:bg-[#10b981]/10 hover:text-[#10b981]'
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
