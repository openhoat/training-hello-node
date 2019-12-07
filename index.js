const http = require('http')
const util = require('util')

const { PORT = 3000 } = process.env

const requestListener = (__, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write(JSON.stringify({ hello: 'world!' }))
  res.end()
}

const start = async () => {
  const server = http.createServer(requestListener)
  const listen = util.promisify(server.listen.bind(server))
  await listen(PORT)
}

start()
  .then(() => {
    console.log('server ready.')
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })

process.on('SIGINT', () => {
  console.log('Received SIGINT. Exit.')
  process.exit(0)
})
