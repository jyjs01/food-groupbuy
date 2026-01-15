export type ApiProduct = {
  index: number;        // 0~49
  name: string;
  price: string;        // "15700원"
  current: number;
  limit: number;
  image: string | null;
};

export type ApiResponse = {
  status: number;
  content: ApiProduct[];
};

export type UiProduct = ApiProduct & {
  soldOut: boolean;
  priceValue: number;   // 숫자 원화
  progress: number;     // 0~100
};