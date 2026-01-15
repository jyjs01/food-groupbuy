import { http } from "@src/lib/http";
import type { ApiResponse } from "@src/types/product";

export async function fetchProducts(): Promise<ApiResponse> {
  const { data } = await http.get<ApiResponse>("/api/products");

  return data;
}
