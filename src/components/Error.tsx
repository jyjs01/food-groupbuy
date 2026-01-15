import { ui } from "@src/styles/ui/primitives";

type Props = { reset: () => void };

export default function Error({ reset }: Props) {
  return (
    <div className="p-2">
      <p className="text-sm font-semibold text-foreground">
        데이터를 불러오지 못했어요.
      </p>
      <p className="mt-1 text-xs text-(--muted)">
        잠시 후 다시 시도해주세요.
      </p>

      <button onClick={reset} className={`${ui.button} mt-4`}>
        다시 시도
      </button>
    </div>
  );
}
