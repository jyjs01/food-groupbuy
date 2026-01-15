type Props = { reset: () => void };

export default function Error({ reset }: Props) {
  return (
    <div className="rounded-2xl border border-(--border) bg-(--surface) p-6">
      <p className="text-sm font-semibold text-foreground">
        데이터를 불러오지 못했어요.
      </p>
      <p className="mt-1 text-xs text-(--muted)">잠시 후 다시 시도해주세요.</p>

      <button
        onClick={reset}
        className="
          mt-4 cursor-pointer rounded-xl border px-3 py-2 text-sm font-semibold transition-colors
          border-(--border) bg-(--surface-2) text-foreground
          hover:bg-(--surface)
        "
      >
        다시 시도
      </button>
    </div>
  );
}
