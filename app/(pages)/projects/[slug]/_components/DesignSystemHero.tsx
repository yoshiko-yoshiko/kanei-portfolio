export function DesignSystemHero() {
  return (
    <div className="relative w-full aspect-[16/10] bg-[#E8E5DD] overflow-hidden">
      <svg
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full"
        aria-label="Design System components"
      >
        {/* Row 1 */}
        <rect x="80" y="80" width="80" height="80" rx="6" fill="#FAFAF9" stroke="#D9D5CC" />
        <rect x="200" y="110" width="120" height="20" rx="10" fill="#1F3A2F" />
        <circle cx="380" cy="120" r="22" fill="#FAFAF9" stroke="#1F3A2F" strokeWidth="2" />
        <rect x="440" y="80" width="80" height="80" rx="4" fill="#1F3A2F" />
        <rect x="560" y="105" width="160" height="6" rx="2" fill="#9A9A94" />
        <rect x="560" y="120" width="120" height="6" rx="2" fill="#D9D5CC" />
        <rect x="560" y="135" width="140" height="6" rx="2" fill="#9A9A94" />

        {/* Row 2 */}
        <rect x="80" y="200" width="80" height="20" rx="10" fill="#1F3A2F" />
        <circle cx="240" cy="240" r="22" fill="#FAFAF9" stroke="#1F3A2F" strokeWidth="2" />
        <rect x="320" y="200" width="80" height="80" rx="4" fill="#1F3A2F" />
        <rect x="440" y="220" width="160" height="6" rx="2" fill="#9A9A94" />
        <rect x="440" y="240" width="120" height="6" rx="2" fill="#D9D5CC" />
        <rect x="440" y="260" width="140" height="6" rx="2" fill="#9A9A94" />
        <rect x="640" y="200" width="80" height="80" rx="12" fill="#FAFAF9" stroke="#D9D5CC" />

        {/* Row 3 */}
        <circle cx="120" cy="360" r="22" fill="#FAFAF9" stroke="#1F3A2F" strokeWidth="2" />
        <rect x="180" y="320" width="80" height="80" rx="4" fill="#1F3A2F" />
        <rect x="300" y="350" width="120" height="6" rx="2" fill="#9A9A94" />
        <rect x="300" y="365" width="100" height="6" rx="2" fill="#D9D5CC" />
        <rect x="460" y="340" width="80" height="40" rx="4" fill="#FAFAF9" stroke="#D9D5CC" />
        <rect x="580" y="350" width="140" height="20" rx="10" fill="#1F3A2F" />
      </svg>
    </div>
  );
}
