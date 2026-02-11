import { clsx, type ClassValue } from 'clsx';

// クラス名の結合ユーティリティ（tailwind-merge を使わないシンプル版）
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// BreadcrumbList JSON-LD 構造化データの生成
interface BreadcrumbItem {
  name: string;
  path?: string;
}

export function generateBreadcrumbJsonLd(items: BreadcrumbItem[], baseUrl: string) {
  return {
    '@context': 'https://schema.org' as const,
    '@type': 'BreadcrumbList' as const,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem' as const,
      position: i + 1,
      name: item.name,
      item: item.path ? `${baseUrl}${item.path}` : baseUrl,
    })),
  };
}
