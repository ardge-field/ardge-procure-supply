# ARDGE — 共同供應契約採購（ARX OS 金融行業版）

以 **Astro** 建置的獨立靜態產品頁，設計為部署至 **GitHub Pages**。
頁首／頁尾沿用 ARDGE 官網結構，套用企業色（`#80bc00` 綠、`#636569` 深灰）。

## 本地開發

```bash
npm install
npm run dev      # http://localhost:4321/ardge-procure-supply/
npm run build    # 輸出至 dist/
npm run preview  # 預覽 build 結果
```

## 部署到 GitHub Pages

1. 建立 repo，名稱為 **`ardge-procure-supply`**，推送本專案。
2. 編輯 `astro.config.mjs`，把 `site` 的 `your-account` 換成你的 GitHub 帳號：
   ```js
   site: 'https://你的帳號.github.io',
   base: '/ardge-procure-supply',
   ```
3. GitHub repo → **Settings → Pages → Build and deployment → Source** 選 **GitHub Actions**。
4. 推送到 `main` 分支後，`.github/workflows/deploy.yml` 會自動 build 並部署。
   網址：`https://你的帳號.github.io/ardge-procure-supply/`

### 綁定自訂網域（選用）

若要掛到 `ardge.com` 子網域（例如 `procure.ardge.com`）：

- 把 `astro.config.mjs` 的 `base` 改為 `'/'`、`site` 改為正式網域。
- 在 `public/` 放一個 `CNAME` 檔，內容為你的網域。
- 於 DNS 設定 CNAME 指向 `你的帳號.github.io`。

## 建立正式 Release（自動打包）

`.github/workflows/release.yml` 會在推送符合 `v*.*.*` 的 git tag 時自動觸發：build 網站、打包原始碼與 `dist/` 建置產物成兩個 zip，並建立 GitHub Release 附上這兩個檔案。

發新版本只需要：

```bash
git tag v1.0.0
git push origin v1.0.0
```

完成後到 repo 的 **Releases** 分頁即可看到自動產生的版本與附件。

## 內容來源與維護

- 產品規格：`src/pages/index.astro` 最上方的 `features` 陣列（15 大功能項次）。
- 硬體規格：同檔 `specRows`（ARX-100 基礎版）。
- 頁首／頁尾連結：`src/components/Header.astro`、`Footer.astro`。
- 圖片（logo 等）以 `www.ardge.com` 絕對網址引用，不隨專案打包。

## 結構

```
ardge-procure-supply/
├─ astro.config.mjs
├─ package.json
├─ .github/workflows/deploy.yml
├─ public/favicon.svg
└─ src/
   ├─ layouts/BaseLayout.astro
   ├─ components/Header.astro
   ├─ components/Footer.astro
   └─ pages/index.astro
```
