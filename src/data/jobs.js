export const jobs = [
  {
    id: 1,
    title: '全端開發工程師 (Node + Vue)',
    company: 'Google Taiwan',
    location: '台北市信義區',
    salary: 'NT$ 90k - 130k',
    minSalary: 90,
    tags: ['Vue.js', 'Node.js', 'PostgreSQL'],
    type: 'Full-time',
    isRemote: false,
    postedAt: '2 小時前',
    icon: 'bi-google',
    description: '負責維護與開發公司核心產品前端介面，優化使用者體驗。',
    requirements: [
      '熟悉 Vue 3 (Composition API)。',
      '具備 Node.js 或 Express 開發經驗。',
      '理解 RESTful 架構及 PostgreSQL 資料庫設計。'
    ]
  },
  {
    id: 2,
    title: '資深 UI/UX 設計師',
    company: 'Apple Store',
    location: '遠端',
    salary: 'NT$ 70k - 100k',
    minSalary: 70,
    tags: ['Figma', 'CSS', 'Design System'],
    type: 'Contract',
    isRemote: true,
    postedAt: '5 小時前',
    icon: 'bi-apple',
    description: '設計直覺且美觀的使用者介面，並與工程團隊緊密合作。',
    requirements: [
      '5 年以上 UI/UX 設計經驗。',
      '精通 Figma 與 Adobe CC。',
      '具備 Design System 建置經驗。'
    ]
  },
  {
    id: 3,
    title: 'Frontend Developer',
    company: 'Microsoft',
    location: '台北市南港區',
    salary: 'NT$ 100k - 150k',
    minSalary: 100,
    tags: ['React', 'TypeScript', 'Azure'],
    type: 'Full-time',
    isRemote: false,
    postedAt: '1 天前',
    icon: 'bi-microsoft',
    description: '開發 Microsoft Azure 相關雲端管理介面。',
    requirements: [
      '精通 React 與 TypeScript。',
      '熟悉雲端服務架構。'
    ]
  },
  {
    id: 4,
    title: 'Backend Engineer (Go)',
    company: 'Netflix Taiwan',
    location: '遠端',
    salary: 'NT$ 120k - 180k',
    minSalary: 120,
    tags: ['Golang', 'gRPC', 'Redis'],
    type: 'Full-time',
    isRemote: true,
    postedAt: '3 小時前',
    icon: 'bi-play-btn',
    description: '構建高併發的影音串流 API 服務，優化系統響應速度。',
    requirements: [
      '熟悉 Golang 並具備微服務架構開發經驗。',
      '理解 Redis 快取機制。',
      '具備處理百萬級流量經驗者優先。'
    ]
  },
  {
    id: 5,
    title: 'DevOps 運維工程師',
    company: 'Amazon Web Services',
    location: '台北市信義區',
    salary: 'NT$ 110k - 160k',
    minSalary: 110,
    tags: ['K8s', 'Docker', 'Terraform'],
    type: 'Full-time',
    isRemote: false,
    postedAt: '8 小時前',
    icon: 'bi-clouds',
    description: '自動化部署流程開發，維護雲端基礎設施穩定性。',
    requirements: [
      '熟練使用 Docker 與 Kubernetes (K8s)。',
      '具備 CI/CD (Jenkins/GitLab CI) 建置經驗。',
      '熟悉至少一種 IaC 工具（如 Terraform）。'
    ]
  },
  {
    id: 6,
    title: 'Data Analyst',
    company: 'Meta (Facebook)',
    location: '台北市松山區',
    salary: 'NT$ 80k - 120k',
    minSalary: 80,
    tags: ['SQL', 'Python', 'Tableau'],
    type: 'Full-time',
    isRemote: false,
    postedAt: '12 小時前',
    icon: 'bi-meta',
    description: '分析使用者行為數據，為產品決策提供數據支持。',
    requirements: [
      '精通 SQL 查詢與資料清理。',
      '熟悉 Python (Pandas) 或 R 進行數據建模。',
      '能將複雜數據視覺化呈現。'
    ]
  },
  {
    id: 7,
    title: 'React Native App 開發者',
    company: 'Shopee 蝦皮',
    location: '台北市信義區',
    salary: 'NT$ 85k - 140k',
    minSalary: 85,
    tags: ['React Native', 'Android', 'iOS'],
    type: 'Full-time',
    isRemote: false,
    postedAt: '2 天前',
    icon: 'bi-bag-check',
    description: '維護跨平台電商 App，優化購物流程與結帳體驗。',
    requirements: [
      '具備 React Native 實際專案開發經驗。',
      '熟悉原生底層 API 調用。',
      '理解 App 效能優化與記憶體管理。'
    ]
  },
  {
    id: 8,
    title: 'Python 後端工程師 (AI Team)',
    company: 'NVIDIA Taiwan',
    location: '新竹科學園區',
    salary: 'NT$ 130k - 200k',
    minSalary: 130,
    tags: ['Python', 'FastAPI', 'PyTorch'],
    type: 'Full-time',
    isRemote: false,
    postedAt: '4 小時前',
    icon: 'bi-gpu-card',
    description: '開發 AI 模型部署 API，優化深度學習運算框架。',
    requirements: [
      '精通 Python 並熟悉 FastAPI/Flask 框架。',
      '具備機器學習或深度學習基礎知識。',
      '有 CUDA 或 GPU 運算經驗者加分。'
    ]
  },
  {
    id: 9,
    title: 'Junior 前端工程師',
    company: 'Pinkoi',
    location: '遠端',
    salary: 'NT$ 50k - 70k',
    minSalary: 50,
    tags: ['HTML', 'CSS', 'JavaScript'],
    type: 'Internship',
    isRemote: true,
    postedAt: '1 小時前',
    icon: 'bi-shop-window',
    description: '協助資深工程師開發活動網頁，實作響應式佈局。',
    requirements: [
      '熟悉 HTML5, CSS3 以及基礎 JS 語法。',
      '了解 RWD 響應式網頁設計。',
      '具備學習熱忱並熱愛解決問題。'
    ]
  },
  {
    id: 10,
    title: 'Cybersecurity Engineer',
    company: 'TSMC 台積電',
    location: '新竹市',
    salary: 'NT$ 140k - 220k',
    minSalary: 140,
    tags: ['Security', 'Linux', 'Splunk'],
    type: 'Full-time',
    isRemote: false,
    postedAt: '3 天前',
    icon: 'bi-shield-lock',
    description: '負責廠區網路資安防護，進行滲透測試與漏洞分析。',
    requirements: [
      '具備資安防護與紅藍軍演練經驗。',
      '熟悉 Linux 系統安全設定。',
      '持有 CISSP 或 CEH 證照者優先。'
    ]
  }
];