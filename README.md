<h1 align="center">Job Finder Vue Demo</h1>

<p align="center">
  <img alt="Vue 3" src="https://img.shields.io/badge/Vue%203-3.5.30-42b883?style=for-the-badge&logo=vue.js&logoColor=white">
  <img alt="Vite" src="https://img.shields.io/badge/Vite-8.0.1-646cff?style=for-the-badge&logo=vite&logoColor=white">
  <img alt="Bootstrap 5" src="https://img.shields.io/badge/Bootstrap-5.3.8-7952b3?style=for-the-badge&logo=bootstrap&logoColor=white">
  <img alt="Vue Router" src="https://img.shields.io/badge/Vue_Router-4.6.4-35495e?style=for-the-badge">
</p>

<p align="center">
  <b>Vue 3 + Vite + Bootstrap 5</b> 打造的求職平台前端練習專案
</p>

##### 備註

- 此專案畫面風格參考求職平台類型版型，並作為個人 Vue 練習與介面設計實作使用
- 模板取自 https://job-finder-vue.vercel.app/
- 由 Gemini 協助生成部分內容

---

## 專案簡介

一個使用 `Vue 3 + Vite + Bootstrap 5` 製作的求職平台前端練習專案，包含首頁、職缺列表、職缺詳情、登入、註冊與個人檔案頁面。

此專案目前以前端靜態資料與 `localStorage` 模擬登入流程，適合作為 Vue 路由、元件拆分、畫面切版與 UI 練習作品。

## 專案特色

- 使用 `Vue 3 Composition API` 開發
- 使用 `Vue Router` 建立多頁面瀏覽流程
- 整合 `Bootstrap 5` 與 `Bootstrap Icons`
- 提供職缺搜尋與側邊欄篩選功能
- 使用 `localStorage` 模擬登入狀態與主題切換
- 支援亮色 / 暗色主題切換
- 採用卡片式介面與轉場動畫提升瀏覽體驗

<p>
  <img alt="Search" src="https://img.shields.io/badge/Feature-Job_Search-1a73e8?style=flat-square">
  <img alt="Theme" src="https://img.shields.io/badge/Feature-Light%20%2F%20Dark_Mode-34a853?style=flat-square">
  <img alt="Auth" src="https://img.shields.io/badge/Feature-LocalStorage_Auth-fbbc05?style=flat-square&labelColor=202124">
</p>

## 頁面功能

### 1. 首頁 `/`

- 展示品牌主視覺與求職平台定位
- 提供熱門分類、熱門城市與合作企業區塊
- 可快速導向職缺列表頁

### 2. 職缺列表 `/jobs`

- 可依關鍵字搜尋職位、公司與標籤
- 可依職位類型與薪資條件進行篩選
- 以卡片形式顯示職缺資訊

### 3. 職缺詳情 `/jobs/:id`

- 顯示職位名稱、公司、地點、薪資與工作內容
- 顯示條件要求與應徵操作按鈕

### 4. 註冊 `/register`

- 可建立新帳號
- 註冊成功後自動寫入 `localStorage` 並登入

### 5. 登入 `/login`

- 使用前端陣列資料進行帳號驗證
- 登入成功後跳轉至個人檔案頁

### 6. 個人檔案 `/profile`

- 顯示個人資料、技能、投遞紀錄與統計資訊
- 可編輯公開檔案與開啟帳號設定視窗
- 可登出並清除登入狀態

## 技術棧

| 類別 | 技術 |
| --- | --- |
| Framework | `Vue 3` |
| Bundler | `Vite` |
| Routing | `Vue Router` |
| UI Library | `Bootstrap 5` |
| Icons | `Bootstrap Icons` |
| Styling | `Sass` |

## 專案結構

```bash
src/
  assets/        # 全域樣式與主題設定
  components/    # 共用元件
  data/          # 模擬使用者與職缺資料
  router/        # 路由設定
  views/         # 各頁面 View
  App.vue        # 全站框架
  main.js        # 專案入口
public/          # 靜態資源
```

## 安裝與啟動

### 1. 安裝依賴

```bash
npm install
```

### 2. 啟動開發伺服器

```bash
npm run dev
```

### 3. 打包專案

```bash
npm run build
```

### 4. 預覽打包結果

```bash
npm run preview
```

## 目前資料來源

專案目前使用本地假資料：

- [`src/data/jobs.js`](./src/data/jobs.js)：職缺資料
- [`src/data/users.js`](./src/data/users.js)：使用者資料

其中登入與註冊流程為前端模擬：

- 註冊時會將新使用者加入執行中的記憶體陣列
- 登入狀態會儲存在 `localStorage`
- 重新整理頁面後，已註冊的新帳號不會永久寫回原始檔案

## 主題切換

| 模式 | 說明 |
| --- | --- |
| Light Mode | 清爽、偏 Google 風格的亮色介面 |
| Dark Mode | 會透過 `localStorage` 記住使用者偏好 |

## 練習重點

這個專案適合用來練習：

- Vue 3 元件化開發
- Router 頁面切換與動態路由
- Bootstrap UI 切版
- 前端狀態管理的基礎概念
- `localStorage` 的簡易應用
