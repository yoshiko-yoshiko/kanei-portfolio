import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f172a",
          borderRadius: "40px",
        }}
      >
        <svg
          viewBox="0 0 120 120"
          width="120"
          height="120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
          </defs>
          {/* K stem */}
          <rect x="33" y="30" width="10" height="60" rx="5" fill="#ffffff" />
          {/* K upper arm */}
          <line x1="43" y1="60" x2="78" y2="30" stroke="url(#g)" strokeWidth="10" strokeLinecap="round" />
          {/* K lower arm */}
          <line x1="43" y1="60" x2="78" y2="90" stroke="url(#g)" strokeWidth="10" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
