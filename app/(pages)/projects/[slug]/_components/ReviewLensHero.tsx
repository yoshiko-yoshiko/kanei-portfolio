export function ReviewLensHero() {
  return (
    <div className="relative w-full aspect-[16/10] bg-[#0E1A14] overflow-hidden">
      <svg
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full"
        aria-label="ReviewLens hero"
      >
        {/* Title */}
        <text x="60" y="180" fill="#FAFAF9" fontSize="56" fontWeight="700" fontFamily="Geist, sans-serif">
          ReviewLens
        </text>
        <text x="60" y="220" fill="#9A9A94" fontSize="14" letterSpacing="2" fontFamily="JetBrains Mono, monospace">
          CHROME EXTENSION × AI
        </text>

        {/* Score circle */}
        <circle cx="660" cy="200" r="70" fill="none" stroke="#3CC97A" strokeWidth="2" opacity="0.6" />
        <text x="660" y="208" textAnchor="middle" fill="#3CC97A" fontSize="38" fontWeight="700" fontFamily="Geist, sans-serif">
          8.4
        </text>
        <text x="660" y="232" textAnchor="middle" fill="#3CC97A" fontSize="10" letterSpacing="3" fontFamily="JetBrains Mono, monospace">
          SCORE
        </text>

        {/* Bullet list */}
        <circle cx="80" cy="340" r="4" fill="#3CC97A" />
        <rect x="100" y="335" width="320" height="8" rx="2" fill="#3F5A4F" />
        <rect x="430" y="335" width="120" height="8" rx="2" fill="#2A3A30" />

        <circle cx="80" cy="375" r="4" fill="#3CC97A" />
        <rect x="100" y="370" width="280" height="8" rx="2" fill="#3F5A4F" />
        <rect x="390" y="370" width="80" height="8" rx="2" fill="#2A3A30" />

        <circle cx="80" cy="410" r="4" fill="#3CC97A" />
        <rect x="100" y="405" width="360" height="8" rx="2" fill="#3F5A4F" />
        <rect x="470" y="405" width="120" height="8" rx="2" fill="#2A3A30" />

        <circle cx="80" cy="445" r="4" fill="#3CC97A" />
        <rect x="100" y="440" width="220" height="8" rx="2" fill="#3F5A4F" />
      </svg>
    </div>
  );
}
