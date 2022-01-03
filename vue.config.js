module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-auto-import/webpack')({
        // targets to transform
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        // global imports to register
        imports: [
          // presets
          'vue',
          'vue-router',
          'pinia',
        ],
      }),
      require('unplugin-vue-components/webpack')({
        dirs: ['src/components'],
        extensions: ['vue'],
        deep: true,
        dts: true,
      }),
    ],
  },
}
