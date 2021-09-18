# 台灣電子書搜尋

> 這個分支主要目的為將專案 refactor（好像有點像 rebuild ?） 至 Typescript，讓專案未來可依靠 TS 的特性，變得更加嚴謹。
> 相對的，也會有一些框架及技術選擇的調整，技術選擇和保留項目的詳細資訊如下：

### 技術選擇

- 將 Vue 轉換為 React
  - 以現在時空背景下，Vue 3 雖然有支援 TS，但 Vue 3 還沒有非常穩定，而穩定的 Vue 2 對 TS 的支援是不友善的，因此我們選擇接下來使用 React 來做未來的開發，並且 React 豐富的生態圈也可以協助我們未來做更多彈性的開發。
- UI Library 選擇
  - Ant Design。主要原因是 antd components 的 API 與功能相當完整，也支援 Dark mode、TS 和 Tree shaking。客製化樣式的部分，我們可以透過 styled-component 來修改。

### 保留

- Code formatter: Prettier
- Pre-commit check lint
- CodeQL
- Auto deploy
- Check lint on PR
