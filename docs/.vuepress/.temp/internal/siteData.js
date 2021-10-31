export const siteData = {
  "base": "/",
  "lang": "zh-CN",
  "title": "Vue Scaff 5",
  "description": "",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "https://joenix.oss-cn-shanghai.aliyuncs.com/vue-scaff/logo.png"
      }
    ]
  ],
  "locales": {
    "/": {
      "title": "vue-scaff 5"
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
