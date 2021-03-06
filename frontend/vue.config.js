module.exports = {
  devServer: {
    // 開発サーバーのポート設定
    port: 3001,
    // 特定のパス以下をrailsに転送する設定
    proxy: {
      "^/api": {
        target: "http://localhost:3000",
      },
    },
  },

  transpileDependencies: [
    'vuetify'
  ]
};
