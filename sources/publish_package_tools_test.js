const demoTool = require('./publish-package-tools')

// 格式化时间的功能
const dtStr = demoTool.dateFormat(new Date())
console.log(dtStr)
console.log('-----------')

const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
const str = demoTool.htmlEscape(htmlStr)
console.log(str)
console.log('-----------')

const str2 = demoTool.htmlUnEscape(str)
console.log(str2)
