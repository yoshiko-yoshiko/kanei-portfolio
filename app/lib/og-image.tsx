import { ImageResponse } from "next/og";

const SIZE = { width: 1200, height: 630 };

export function generateOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#FAFAF9",
          color: "#0A0A0A",
          padding: "48px 56px",
          fontFamily: "Geist, sans-serif",
          position: "relative",
        }}
      >
        {/* Top row: kanei nakashima / VOL · MAY 2026 */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: "#0A0A0A",
            }}
          >
            kanei nakashima
          </div>
          <div
            style={{
              fontSize: 14,
              fontFamily: "monospace",
              color: "#9A9A94",
              letterSpacing: 1.5,
            }}
          >
            VOL. 03 · MAY 2026
          </div>
        </div>

        {/* Subtitle */}
        <div
          style={{
            marginTop: 28,
            fontSize: 16,
            fontFamily: "monospace",
            color: "#9A9A94",
            letterSpacing: 2.5,
          }}
        >
          FULLSTACK ENGINEER, NOT LOUD.
        </div>

        {/* Headline */}
        <div
          style={{
            marginTop: 36,
            display: "flex",
            flexDirection: "column",
            lineHeight: 0.95,
          }}
        >
          <div
            style={{
              fontSize: 168,
              fontWeight: 800,
              color: "#0A0A0A",
              letterSpacing: -6,
            }}
          >
            Kanei,
          </div>
          <div
            style={{
              fontSize: 168,
              fontWeight: 600,
              color: "#2A2A2A",
              fontStyle: "italic",
              letterSpacing: -4,
              marginTop: -8,
            }}
          >
            not loud.
          </div>
        </div>

        {/* Spacer */}
        <div style={{ flexGrow: 1 }} />

        {/* Bottom rule */}
        <div
          style={{
            width: "100%",
            height: 1,
            background: "rgba(10,10,10,0.12)",
            marginBottom: 18,
          }}
        />

        {/* Bottom row: tech / projects / theme / available */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 13,
            fontFamily: "monospace",
            letterSpacing: 1.5,
            color: "#3A3A36",
          }}
        >
          <div>REACT · NESTJS · TYPESCRIPT</div>
          <div>04 PROJECTS</div>
          <div>MCP · AI · 2026</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: "#3CC97A",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#3CC97A",
              }}
            />
            <span>AVAILABLE</span>
          </div>
        </div>
      </div>
    ),
    { ...SIZE }
  );
}
