// @ts-check
import { defineConfig } from 'astro/config';

// ┌────────────────────────────────────────────────────────────────┐
// │  目前為「審查模式（REVIEW）」                                    │
// │  build 產出的 dist/index.html 可直接雙擊開啟、樣式正常，          │
// │  方便先進行人工內容審查。                                        │
// │                                                                  │
// │  ★ 上架 GitHub Pages 前，改成下方「正式部署」那組設定即可 ★      │
// └────────────────────────────────────────────────────────────────┘

export default defineConfig({
  // ── 審查模式（已停用，保留備查）───────────────────
  // site: 'https://your-account.github.io',
  // base: '/',
  // build: { inlineStylesheets: 'always' },

  // ── 正式部署（現行：組織 ardge-field，repo ardge-procure-supply）──
  site: 'https://ardge-field.github.io',
  base: '/ardge-procure-supply',
  build: { inlineStylesheets: 'auto' },
});
