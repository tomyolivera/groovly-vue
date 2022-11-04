import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Compression from 'vite-plugin-compression'
import Layouts from 'vite-plugin-vue-layouts'
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-vue-markdown'
import SVG from 'vite-svg-loader'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),

    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: false,
    }),

    Compression(),

    Layouts(),

    Pages({
      extensions: ['vue', 'md']
    }),

    Markdown({
      headEnabled: false
    }),

    SVG()
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'assets': `${path.resolve(__dirname, 'assets')}`,
    },
  },

  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  }
})
