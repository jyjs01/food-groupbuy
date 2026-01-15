import "./globals.css";
import type { Metadata, Viewport } from "next";
import Providers from "@app/providers";

export const metadata: Metadata = {
  title: "척척밥상 | 공동구매 상품 목록",
  description:
    "랜덤 지연(1~5초) API 응답을 고려해 스켈레톤/재시도 UX를 적용하고, 품절은 최상단 고정 + 나머지는 index 오름차순으로 정렬해 표시합니다.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
