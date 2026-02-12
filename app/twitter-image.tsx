import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kanei Nakashima Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
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
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle gradient orb top-left */}
        <div
          style={{
            position: "absolute",
            top: -150,
            left: -150,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Subtle gradient orb bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: -120,
            right: -120,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Content container */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 64,
          }}
        >
          {/* Logo mark */}
          <div
            style={{
              width: 160,
              height: 160,
              borderRadius: 36,
              border: "2px solid rgba(16,185,129,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg
              viewBox="0 0 120 120"
              width="110"
              height="110"
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

          {/* Text block */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div
              style={{
                fontSize: 52,
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: -1,
                lineHeight: 1.1,
              }}
            >
              Kanei Nakashima
            </div>
            <div
              style={{
                fontSize: 24,
                fontWeight: 400,
                color: "#10b981",
                letterSpacing: 3,
                textTransform: "uppercase" as const,
              }}
            >
              Fullstack Engineer
            </div>
            <div
              style={{
                marginTop: 4,
                width: 48,
                height: 2,
                borderRadius: 1,
                background: "rgba(16,185,129,0.5)",
              }}
            />
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background: "linear-gradient(90deg, transparent, #10b981, transparent)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
