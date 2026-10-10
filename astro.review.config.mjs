// @ts-check
import { defineConfig } from 'astro/config';

// 審查模式：npx astro build --config astro.review.config.mjs
// dist/index.html 可直接雙擊開啟（file://），不影響正式部署設定 astro.config.mjs
export default defineConfig({
  base: '/',
  build: { inlineStylesheets: 'always' },
});
