export function PortfolioHero() {
  return (
    <div className="relative w-full aspect-[16/10] bg-[#E8E5DD] overflow-hidden">
      <svg
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full"
        aria-label="Portfolio site mockup"
      >
        {/* Browser chrome */}
        <rect x="40" y="40" width="720" height="32" fill="#FAFAF9" stroke="#D9D5CC" />
        <circle cx="60" cy="56" r="4" fill="#D9D5CC" />
        <circle cx="76" cy="56" r="4" fill="#D9D5CC" />
        <circle cx="92" cy="56" r="4" fill="#D9D5CC" />

        {/* Page area */}
        <rect x="40" y="72" width="720" height="388" fill="#FAFAF9" />

        {/* Header */}
        <rect x="80" y="100" width="120" height="10" rx="2" fill="#9A9A94" />
        <circle cx="720" cy="105" r="4" fill="#3CC97A" />
        <rect x="730" y="100" width="40" height="10" rx="2" fill="#9A9A94" />

        {/* Avatar */}
        <circle cx="140" cy="180" r="32" fill="#D9D5CC" />
        <text x="140" y="186" textAnchor="middle" fill="#8C8678" fontSize="14" fontFamily="JetBrains Mono, monospace">
          kn
        </text>

        {/* Name and meta */}
        <rect x="80" y="240" width="200" height="20" rx="2" fill="#1F3A2F" />
        <rect x="80" y="270" width="240" height="8" rx="2" fill="#9A9A94" />
        <rect x="80" y="288" width="60" height="6" rx="2" fill="#9A9A94" />
        <rect x="146" y="288" width="60" height="6" rx="2" fill="#9A9A94" />
        <rect x="212" y="288" width="60" height="6" rx="2" fill="#9A9A94" />

        {/* Body */}
        <rect x="80" y="320" width="620" height="8" rx="2" fill="#3A3A36" />
        <rect x="80" y="336" width="540" height="8" rx="2" fill="#3A3A36" />
        <rect x="80" y="352" width="580" height="8" rx="2" fill="#3A3A36" />

        {/* Works section */}
        <rect x="80" y="390" width="60" height="8" rx="2" fill="#9A9A94" />
        <rect x="80" y="410" width="620" height="1" fill="#D9D5CC" />
        <rect x="80" y="420" width="40" height="6" rx="2" fill="#9A9A94" />
        <rect x="140" y="418" width="180" height="10" rx="2" fill="#1F3A2F" />
        <rect x="80" y="440" width="40" height="6" rx="2" fill="#9A9A94" />
        <rect x="140" y="438" width="160" height="10" rx="2" fill="#1F3A2F" />
      </svg>
    </div>
  );
}
