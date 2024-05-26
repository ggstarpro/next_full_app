// ルートハンドラー

import { NextResponse } from "next/server";

export interface Task {
  id: number;
  name: string;
}

const tasks: Task[] = [
  {id:1, name: "python"},
  {id:2, name: "typescript"},
];

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms))

export const GET = async () => {
  await sleep(3000);

  return NextResponse.json({ tasks }, {
    status: 200,
  });
}

// ルートハンドラのデフォルトの設定では静的な要素としてビルドされ、ビルド時に取得する際にデータが決まってしまう。
// データ更新頻度が高い場合、リクエスト毎に動的に実行されるようにルートセグメントconfigを設定する
export const dynamic = "force-dynamic";