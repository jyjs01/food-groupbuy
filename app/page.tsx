"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@src/lib/api";
import { toUiProducts } from "@src/lib/products";
import Loading from "@src/components/Loading";
import Error from "@src/components/Error";
import { useState } from "react";
import { ui } from "@src/styles/ui/primitives";
import { home as s } from "@src/styles/pages/home";

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
  const refreshing = isFetching || manualLoading;

  return (
    <main className={s.page}>
      <div className={s.wrap}>
        <header className={`${ui.card} ${s.header}`}>
          <div className={s.headerRow}>
            <div className="min-w-0">
              <h1 className={s.title}>척척밥상 공동구매</h1>

              {!showLoading && (
                <div className={`mt-3 ${ui.chipRow}`}>
                  <span className={ui.chip}>전체 {items.length}</span>
                  <span className={ui.chip}>품절 {soldOutCount}</span>
                </div>
              )}
            </div>

            <button onClick={handleRefresh} disabled={refreshing} className={ui.button}>
              <span className={refreshing ? ui.spinnerOn : ui.spinnerOff} aria-hidden="true" />
              {refreshing ? "갱신 중..." : "새로고침"}
            </button>
          </div>
        </header>

        <section className={`${ui.card} ${s.content}`}>
          {showLoading ? (
            <Loading />
          ) : isError ? (
            <Error reset={handleRefresh} />
          ) : (
            <div className={s.todo}>TODO: ProductGrid</div>
          )}
        </section>
      </div>
    </main>
  );
}
