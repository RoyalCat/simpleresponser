// содежимое index.js
const http = require('http')
const port = 3000
var istimetowake = false
const requestHandler = (request, response) => {
    if (request.url == "/wake")
    {
        istimetowake = true
        response.end()
    }
    if(request.url == "/endwake")
    {
        istimetowake = false
        response.end()
    }
    if(request.url == "/checkwake")
    {
        if(istimetowake)
            response.end('1')
        else
            response.end('0')
    }
}
const server = http.createServer(requestHandler)
server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})