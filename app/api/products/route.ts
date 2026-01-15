import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const { data } = await axios.get("https://api.zeri.pics", { timeout: 10000 });

    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json(
      { status: 500, message: "Failed to get products" },
      { status: 500 }
    );
  }
}
