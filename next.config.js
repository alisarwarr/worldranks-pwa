//SASS
const withSass = require('@zeit/next-sass');
//PWA
const widthPWA = require('next-pwa');


module.exports = withSass({
    cssModules: true
})


module.exports = widthPWA({
    reactStrictMode: true,
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true
    }
})