export function DotIndicator({
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
              ? 'bg-primary scale-125'
              : 'bg-foreground/20 hover:bg-primary/50'
            }
          `}
          aria-label={`Go to skill category ${index + 1}`}
        />
      ))}
    </div>
  );
}
