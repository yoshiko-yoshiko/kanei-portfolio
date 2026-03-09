export function CategoryIcon({ icon, isActive }: { icon: string; isActive: boolean }) {
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
