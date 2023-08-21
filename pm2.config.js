module.exports = {
  apps: [
    {
      name: "kikitori.boggy.tw",
      script: "./.output/server/index.mjs",
      port: '3002',
      watch: true,
      env: {
        "NODE_ENV": "production"
      }
    }
  ]
}
