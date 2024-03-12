const { download } = require("iconfont-help");

const config = {
  outputPath: "src/assets/iconfont",
  url: "要下载iconfont项目的url",
  cookie: "对应cookie"
};

download(config);
