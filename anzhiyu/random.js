var posts=["2006/01/07/hexo/","2026/01/08/字数统计/","2026/01/07/安知鱼主题配置/","2026/01/08/添加今日诗词/","2026/01/07/永久链接/","2026/01/08/搜索/","2026/01/13/历史上的今天/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };