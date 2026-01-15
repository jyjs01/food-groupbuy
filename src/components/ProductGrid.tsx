import ProductCard from "@src/components/ProductCard";
import type { UiProduct } from "@src/types/product";

type Props = {
  items: UiProduct[];
};

export default function ProductGrid({ items }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <ProductCard key={item.index} item={item} />
      ))}
    </div>
  );
}
