import type { Skill } from '@/app/types';

const MAX_SKILL_LEVEL = 5;

export function SkillBar({ skill, isVisible, delay }: { skill: Skill; isVisible: boolean; delay: number }) {
  const percentage = (skill.level / MAX_SKILL_LEVEL) * 100;
  const IconComponent = skill.icon;

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
        <div className="flex items-center gap-2">
          {IconComponent && (
            <IconComponent className="w-4 h-4 text-primary" />
          )}
          <span className="text-foreground font-medium">{skill.name}</span>
        </div>
        <span className="text-foreground/40 text-xs">
          {skill.yearsOfExperience}y
        </span>
      </div>
      <div className="w-full bg-foreground/5 rounded-full h-2 overflow-hidden">
        <div
          className="h-2 bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-700 ease-out"
          style={{
            width: isVisible ? `${percentage}%` : '0%',
            transitionDelay: `${delay + 100}ms`
          }}
        />
      </div>
    </div>
  );
}
