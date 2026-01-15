import type { ApiProduct, UiProduct } from "@/src/types/product";

function parsePriceWon(price: string) {
  const digits = price.replace(/[^\d]/g, "");
  return digits ? Number(digits) : 0;
}

export function toUiProducts(list: ApiProduct[]): UiProduct[] {
  const normalized: UiProduct[] = list.map((p) => {
    const priceValue = parsePriceWon(p.price);
    const soldOut = p.current >= p.limit;
    const progress = Math.min(
      100, 
      Math.round((p.current / Math.max(1, p.limit)) * 100
    ));

    return { ...p, soldOut, priceValue, progress };
  });

  // index + 품절 최하단 오름차순
  const inStockItems = normalized
    .filter((p) => !p.soldOut)
    .sort((a, b) => a.index - b.index);

  const soldOutItems = normalized
    .filter((p) => p.soldOut)
    .sort((a, b) => a.index - b.index);

  return [...inStockItems, ...soldOutItems];
}
