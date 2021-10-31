export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "heroImage": "http://oss.joenix.com/vue-scaff/logo.png",
    "heroText": "开始使用",
    "heroAlt": "省心的 vue 脚手架",
    "actionLink": "/",
    "footer": "MIT Licensed | Copyright © 2020 - Present by JOENIX.COM",
    "pageClass": "vue-scaff-docs"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "Get started with Vue-Scaff",
      "slug": "get-started-with-vue-scaff",
      "children": []
    }
  ],
  "filePathRelative": "index.md",
  "git": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
