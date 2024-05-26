/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      // データ取得時キャッシュがヒットしたかどうか
      // GET http://localhost:3002/api/tasks 200 in 113ms (cache hit) のように出る
      // GET http://localhost:3002/api/tasks 200 in 61ms (cache skip) Cache skipped reason: (cache: no-store) キャッシュを利用しない設定の場合
      fullUrl: true
    }
  },
};

export default nextConfig;
