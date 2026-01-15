export const ui = {
  card: "rounded-2xl border border-(--border) bg-(--surface)",

  chipRow: "flex flex-wrap gap-2",
  chip: `
    inline-flex items-center rounded-full border px-3 py-1 text-sm font-semibold
    border-(--border) bg-(--surface-2) text-(--foreground)
  `,

  button: `
    cursor-pointer inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold transition-colors
    border-(--border) bg-(--surface-2) text-(--foreground)
    hover:bg-(--surface)
    disabled:cursor-not-allowed disabled:opacity-60
  `,

  spinnerOn:
    "h-4 w-4 animate-spin rounded-full border-2 border-(--loading) border-t-(--loading-2)",
  spinnerOff: "h-4 w-4 rounded-full border-2 border-(--border)",
};
