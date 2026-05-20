export function MedGuideHero() {
  return (
    <div className="relative w-full aspect-[16/10] bg-[#E8E5DD] overflow-hidden">
      <svg
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full"
        aria-label="MedGuide dashboard mockup"
      >
        {/* Browser chrome bar */}
        <rect x="40" y="40" width="720" height="36" fill="#FAFAF9" stroke="#D9D5CC" strokeWidth="1" />
        <circle cx="60" cy="58" r="5" fill="#D9D5CC" />
        <circle cx="80" cy="58" r="5" fill="#D9D5CC" />
        <circle cx="100" cy="58" r="5" fill="#D9D5CC" />
        <rect x="140" y="50" width="200" height="14" rx="2" fill="#EFEBE3" />

        {/* Sidebar */}
        <rect x="40" y="76" width="160" height="384" fill="#1F3A2F" />
        <rect x="60" y="100" width="60" height="16" rx="2" fill="#FAFAF9" />
        <rect x="60" y="140" width="120" height="10" rx="2" fill="#3F5A4F" />
        <rect x="60" y="160" width="100" height="10" rx="2" fill="#3F5A4F" />
        <rect x="60" y="180" width="110" height="10" rx="2" fill="#3F5A4F" />
        <rect x="60" y="200" width="90" height="10" rx="2" fill="#3F5A4F" />
        <rect x="60" y="220" width="105" height="10" rx="2" fill="#3F5A4F" />
        <rect x="60" y="240" width="95" height="10" rx="2" fill="#3F5A4F" />

        {/* Main area header */}
        <rect x="220" y="100" width="540" height="20" rx="2" fill="#FAFAF9" />

        {/* Calendar grid */}
        <rect x="220" y="140" width="360" height="240" fill="#FAFAF9" stroke="#D9D5CC" strokeWidth="1" />
        {Array.from({ length: 7 }).map((_, col) =>
          Array.from({ length: 5 }).map((_, row) => {
            const x = 240 + col * 46;
            const y = 170 + row * 42;
            const isToday = col === 2 && row === 1;
            return (
              <rect
                key={`${col}-${row}`}
                x={x}
                y={y}
                width="36"
                height="32"
                rx="2"
                fill={isToday ? "#3CC97A" : "#EFEBE3"}
              />
            );
          })
        )}

        {/* Stats panel */}
        <rect x="600" y="140" width="160" height="58" rx="2" fill="#FAFAF9" stroke="#D9D5CC" strokeWidth="1" />
        <rect x="620" y="155" width="40" height="10" rx="2" fill="#D9D5CC" />
        <rect x="620" y="175" width="60" height="14" rx="2" fill="#1F3A2F" />

        <rect x="600" y="208" width="160" height="58" rx="2" fill="#FAFAF9" stroke="#D9D5CC" strokeWidth="1" />
        <rect x="620" y="223" width="40" height="10" rx="2" fill="#D9D5CC" />
        <rect x="620" y="243" width="60" height="14" rx="2" fill="#1F3A2F" />

        <rect x="600" y="276" width="160" height="58" rx="2" fill="#FAFAF9" stroke="#D9D5CC" strokeWidth="1" />
        <rect x="620" y="291" width="40" height="10" rx="2" fill="#D9D5CC" />
        <rect x="620" y="311" width="60" height="14" rx="2" fill="#3CC97A" />

        {/* Appointments list */}
        <rect x="220" y="400" width="540" height="60" fill="#FAFAF9" stroke="#D9D5CC" strokeWidth="1" />
        <rect x="240" y="412" width="40" height="8" rx="2" fill="#D9D5CC" />
        <rect x="240" y="425" width="180" height="10" rx="2" fill="#1F3A2F" />
        <rect x="240" y="440" width="120" height="8" rx="2" fill="#D9D5CC" />
      </svg>
    </div>
  );
}
