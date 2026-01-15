import Image from "next/image";
import { ui } from "@src/styles/ui/primitives";
import type { UiProduct } from "@src/types/product";

type Props = {
  item: UiProduct;
};

export default function ProductCard({ item }: Props) {
  return (
    <article className={ui.card}>
      {/* 이미지 영역: 항상 공간 확보 */}
      <div className="relative h-36 overflow-hidden rounded-t-2xl bg-(--surface-2)">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={false}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-(--muted)">
            이미지 없음
          </div>
        )}

        {item.soldOut && (
          <div className="absolute inset-0 grid place-items-center bg-black/35">
            <span className="rounded-full bg-(--surface) px-3 py-1 text-xs font-extrabold text-(--foreground)">
              품절
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <p className="line-clamp-1 text-sm font-semibold text-(--foreground)">
          {item.name}
        </p>
        <p className="mt-2 text-sm font-extrabold text-(--foreground)">
          {item.price}
        </p>

        {/* 재고 진행률 */}
        <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-(--surface-2)">
          <div
            className="h-full rounded-full bg-(--loading-2)"
            style={{ width: `${item.progress}%` }}
          />
        </div>

        <div className="mt-3 flex items-center justify-between text-xs text-(--muted)">
          <span>현재 {item.current}</span>
          <span>목표 {item.limit}</span>
        </div>

        <button
          className={`${ui.button} mt-4 w-full justify-center`}
          disabled={item.soldOut}
        >
          {item.soldOut ? "품절" : "구매"}
        </button>
      </div>
    </article>
  );
}
