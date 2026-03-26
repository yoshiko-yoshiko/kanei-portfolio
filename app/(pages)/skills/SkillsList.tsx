'use client';

import { useState, useEffect } from 'react';
import { SKILLS } from './skills-data';

type Skill = (typeof SKILLS)[number]['skills'][number];

const ALL_CATEGORY = 'すべて';
const CATEGORIES = [ALL_CATEGORY, ...SKILLS.map((c) => c.name)];

const HEX_CLIP = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';

function hexStyle(level: number) {
  if (level >= 5) {
    return {
      size: 'w-[110px] h-[120px] sm:w-[124px] sm:h-[136px]',
      bg: 'bg-primary',
      text: 'text-white',
      iconColor: 'text-white/70',
      ring: 'rgba(45, 122, 95, 0.3)',
    };
  }
  if (level >= 4) {
    return {
      size: 'w-[100px] h-[110px] sm:w-[114px] sm:h-[126px]',
      bg: 'bg-primary/10',
      text: 'text-primary',
      iconColor: 'text-primary/50',
      ring: 'rgba(45, 122, 95, 0.15)',
    };
  }
  return {
    size: 'w-[90px] h-[100px] sm:w-[104px] sm:h-[116px]',
    bg: 'bg-surface-hover',
    text: 'text-text-secondary',
    iconColor: 'text-text-muted',
    ring: 'rgba(0, 0, 0, 0.06)',
  };
}

function HexTile({
  skill,
  index,
  mounted,
}: {
  skill: Skill;
  index: number;
  mounted: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const style = hexStyle(skill.level);
  const Icon = skill.icon;

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`
          ${style.size} relative cursor-default
          transition-transform duration-300 ease-out
          ${hovered ? '-translate-y-1.5 scale-105' : ''}
          ${mounted ? 'hex-enter' : 'opacity-0'}
        `}
        style={{
          animationDelay: mounted ? `${index * 80}ms` : undefined,
          clipPath: HEX_CLIP,
        }}
      >
        <div
          className={`absolute inset-0 ${style.bg} transition-shadow duration-300`}
          style={{
            clipPath: HEX_CLIP,
            boxShadow: hovered ? `0 8px 24px ${style.ring}` : 'none',
          }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-1 px-2">
          {Icon && (
            <Icon
              className={`w-5 h-5 sm:w-6 sm:h-6 ${style.iconColor} transition-transform duration-300 ${hovered ? 'animate-bounce-subtle' : ''}`}
            />
          )}
          <span
            className={`text-[10px] sm:text-xs font-semibold ${style.text} text-center leading-tight`}
          >
            {skill.name}
          </span>
        </div>

        {hovered && (
          <div className="hex-ripple" style={{ clipPath: HEX_CLIP }} />
        )}
      </div>

      {hovered && (
        <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 text-xs text-white bg-foreground/80 rounded whitespace-nowrap backdrop-blur-sm z-20">
          {skill.yearsOfExperience}年
        </span>
      )}
    </div>
  );
}

export function SkillsList() {
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);
  const [mounted, setMounted] = useState(false);
  const [filterKey, setFilterKey] = useState(0);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const filteredSkills: Skill[] =
    activeCategory === ALL_CATEGORY
      ? SKILLS.flatMap((c) => c.skills)
      : SKILLS.find((c) => c.name === activeCategory)?.skills ?? [];

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setFilterKey((k) => k + 1);
  };

  return (
    <div className="w-full space-y-8">
      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => handleCategoryChange(cat)}
              className={`
                relative px-4 py-1.5 text-sm font-medium rounded-full
                transition-all duration-200
                ${isActive
                  ? 'bg-primary text-white'
                  : 'text-text-muted hover:text-text-secondary hover:bg-surface-hover'
                }
              `}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Honeycomb grid */}
      <div className="honeycomb" key={filterKey}>
        {filteredSkills.map((skill, i) => (
          <div key={skill.name} className="honeycomb-cell">
            <HexTile skill={skill} index={i} mounted={mounted} />
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-5 pt-4 border-t border-border">
        <span className="text-xs text-text-muted">レベル:</span>
        <div className="flex items-center gap-1.5">
          <span
            className="inline-block w-3 h-3"
            style={{ clipPath: HEX_CLIP, background: 'var(--color-primary)' }}
          />
          <span className="text-xs text-text-muted">得意</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className="inline-block w-3 h-3"
            style={{
              clipPath: HEX_CLIP,
              background: 'rgba(45, 122, 95, 0.1)',
              border: '1px solid rgba(45, 122, 95, 0.2)',
            }}
          />
          <span className="text-xs text-text-muted">実務経験あり</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className="inline-block w-3 h-3 bg-surface-hover border border-border"
            style={{ clipPath: HEX_CLIP }}
          />
          <span className="text-xs text-text-muted">基礎</span>
        </div>
      </div>
    </div>
  );
}
