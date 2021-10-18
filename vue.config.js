module.exports = {
    pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
    }
  },
    devServer: {
        port: 8888,
        disableHostCheck: true,
    },

    transpileDependencies: [
      'vuetify'
    ]
};
