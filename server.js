var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if (!port) {
    console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
    process.exit(1)
}

var server = http.createServer(function (request, response) {
    var parsedUrl = url.parse(request.url, true)
    var pathWithQuery = request.url
    var queryString = ''
    if (pathWithQuery.indexOf('?') >= 0) { queryString = pathWithQclearuery.substring(pathWithQuery.indexOf('?')) }
    var path = parsedUrl.pathname
    var query = parsedUrl.query
    var method = request.method

    /******** 从这里开始看，上面不要看 ************/

    console.log('有个傻子发请求过来啦！路径（带查询参数）为：' + pathWithQuery)
    console.log("path:" + path)
    console.log("path" === path)

    response.statusCode = 200
    response.setHeader(`Content-Type`, `${fileType[subfix]}|| 'text/html';charset=utf-8`)
    //默认首页
    const filePath = path === '/' ? '/index.html' : path
    const index = filePath.lastIndexOf('.')
    const subfix = filePath.substring(index + 1)
    console.log(last)
    const fileType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript'
    }
    let Content
    try {
        content = fs.readFileSync(`./public/${filePath}`)
    } catch (error) {
        content = '文件不存在'
        response.statusCode = 404

    }
    response.write(content)
    response.end()
    // if (path === '/') {
    //     response.statusCode = 200
    //     response.setHeader('Content-Type', 'text/html;charset=utf-8')
    //     response.write(fs.readFileSync('./public/index.html'))
    //     response.end()
    // }
    // else if (path === '/style.css') {
    //     response.statusCode = 200
    //     response.setHeader('Content-Type', 'text/css;charset=utf-8')
    //     response.write(
    //         fs.readFileSync('./public/style.css'))
    //     response.end()

    // }
    // else {
    //     response.statusCode = 404
    //     response.setHeader('Content-Type', 'text/html;charset=utf-8')
    //     response.write(`你访问的页面不存在`)
    //     response.end()
    // }

    /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)