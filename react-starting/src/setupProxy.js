let proxy = require('http-proxy-middleware')
module.exports = (app) => {
  app.use(
    proxy('/api', {
      target: 'http://localhost:5000',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }),
    proxy('/abc', {
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: {
        '^/abc': ''
      }
    })
  )
}
// https://api.github.com/search/users?q=???