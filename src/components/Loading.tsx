export default function Loading() {
  return (
    <div className="rounded-2xl border border-(--border) bg-(--surface) p-6">
      <div className="flex items-center gap-4">
        <div
          className="
            h-10 w-10 rounded-full
            border-4 border-(--skeleton)
            border-t-(--skeleton-2)
            animate-spin
          "
          aria-label="Loading"
        />

        <div>
          <p className="text-sm font-semibold text-foreground">
            상품 목록을 불러오는 중…
          </p>
          <p className="mt-1 text-xs text-(--muted)">
            네트워크 지연이 최대 5초까지 발생할 수 있어요.
          </p>
        </div>
      </div>
    </div>
  );
}
