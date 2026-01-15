"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@src/lib/api";
import { toUiProducts } from "@src/lib/products";
import Loading from "@src/components/Loading";
import Error from "@src/components/Error";
import { useState } from "react";

export default function Page() {
  const [manualLoading, setManualLoading] = useState(false);

  const { data, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    select: (res) => toUiProducts(res.content ?? []),
  });

  const items = data ?? [];
  const soldOutCount = items.filter((p) => p.soldOut).length;

  const handleRefresh = async () => {
    setManualLoading(true);
    try {
      await refetch();
    } finally {
      setManualLoading(false);
    }
  };

  const showLoading = isLoading || manualLoading;

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl p-6">
        <header className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="text-xl font-extrabold text-foreground">
              척척밥상 공동구매
            </h1>
            <p className="mt-2 text-sm text-(--muted)">
              {showLoading
                ? "상품을 불러오는 중…"
                : `품절 ${soldOutCount}개 · 전체 ${items.length}개`}
            </p>
          </div>

          <button
            onClick={handleRefresh}
            disabled={isFetching || manualLoading}
            className="
              cursor-pointer rounded-xl border px-3 py-2 text-sm font-semibold transition-colors
              border-(--border) bg-(--surface) text-foreground
              hover:bg-(--surface-2) disabled:cursor-not-allowed disabled:opacity-60
            "
          >
            {isFetching || manualLoading ? "갱신 중..." : "새로고침"}
          </button>
        </header>

        <section className="mt-6">
          {showLoading ? (
            <Loading />
          ) : isError ? (
            <Error reset={() => refetch()} />
          ) : (
            // <ProductGrid items={items} />
            <div className="text-(--muted)">TODO: ProductGrid</div>
          )}
        </section>
      </div>
    </main>
  );
}
