const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

    /*const weatherProxy = createProxyMiddleware({
        target: "http://api.openweathermap.org",
        changeOrigin: true,
        logLevel: 'debug',
        autoRewrite: true,
        pathRewrite: {
            '/weather' : ''
        }
    });*/

    app.use('/.netlify/functions/', {
        target: 'http://localhost:9000/',
        pathRewrite: {
            '^/\\.netlify/functions': ''
        }
    });
};
