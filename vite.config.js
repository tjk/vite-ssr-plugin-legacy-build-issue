const vuePlugin = require('@vitejs/plugin-vue')
const createPluginLegacy = require('@vitejs/plugin-legacy')

/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  plugins: [
    vuePlugin(),
    createPluginLegacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  build: {
    minify: false
  }
}
