module.exports = {
  lang: "zh-CN",
  title: "Vue Scaff 5",

  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://joenix.oss-cn-shanghai.aliyuncs.com/vue-scaff/logo.png"
      }
    ]
  ],

  locales: {
    "/": {
      title: "vue-scaff 5"
    }
  },

  // https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#locale-配置
  themeConfig: {
    logo: "https://joenix.oss-cn-shanghai.aliyuncs.com/vue-scaff/logo.png",

    home: "/index.md",

    sidebar: "auto",

    navbar: [
      // NavbarItem
      {
        text: "Foo",
        link: "/foo/"
      },
      // NavbarGroup
      {
        text: "Group",
        children: ["/group/foo.md", "/group/bar.md"]
      },
      // 字符串 - 页面文件路径
      "/bar/README.md"
    ]
  }
};
