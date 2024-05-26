// src直下に配置する点に注意

import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  console.log("middleware");
  // console.log("middleware request", request)

  return NextResponse.next();
}

// configオブジェクトを使って特定ページだけ適応する場合
export const config = {
  macher: ["/", "/task"]
}