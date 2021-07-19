const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {


    const countriesProxy = createProxyMiddleware({
        target: "http://api.openweathermap.org",
        changeOrigin: true,
        logLevel: 'debug',
        autoRewrite: true,
        pathRewrite: {
            '/weather' : ''
        }
    });

    app.use('/weather', countriesProxy);
};
