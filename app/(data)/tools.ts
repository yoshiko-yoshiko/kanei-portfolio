export type ToolCategory = {
  label: string;
  items: string[];
};

export const TOOLS: ToolCategory[] = [
  { label: "Editor",        items: ["VS Code", "Cursor", "Claude Code"] },
  { label: "Lang / FW",     items: ["TypeScript", "React", "Next.js", "NestJS", "Lit"] },
  { label: "Backend",       items: ["PostgreSQL", "TypeORM", "DynamoDB", "WebRTC"] },
  { label: "Infra",         items: ["Vercel", "Cloudflare Workers", "Docker", "Firebase"] },
  { label: "Design / Docs", items: ["Figma", "Storybook", "Tailwind CSS"] },
  { label: "AI / Agents",   items: ["Claude Desktop", "MCP Server (自作)", "Claude API"] },
];
