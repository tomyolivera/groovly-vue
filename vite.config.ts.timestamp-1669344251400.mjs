// vite.config.ts
import { defineConfig } from "file:///E:/Users/Jaco/Desktop/groovly-vue/node_modules/vite/dist/node/index.js";
import Vue from "file:///E:/Users/Jaco/Desktop/groovly-vue/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Components from "file:///E:/Users/Jaco/Desktop/groovly-vue/node_modules/unplugin-vue-components/dist/vite.mjs";
import Compression from "file:///E:/Users/Jaco/Desktop/groovly-vue/node_modules/vite-plugin-compression/dist/index.mjs";
import Layouts from "file:///E:/Users/Jaco/Desktop/groovly-vue/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import Pages from "file:///E:/Users/Jaco/Desktop/groovly-vue/node_modules/vite-plugin-pages/dist/index.mjs";
import Markdown from "file:///E:/Users/Jaco/Desktop/groovly-vue/node_modules/vite-plugin-vue-markdown/dist/index.mjs";
import SVG from "file:///E:/Users/Jaco/Desktop/groovly-vue/node_modules/vite-svg-loader/index.js";
import path from "path";
var __vite_injected_original_dirname = "E:\\Users\\Jaco\\Desktop\\groovly-vue";
var vite_config_default = defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true
    }),
    Components({
      extensions: ["vue", "md"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: false
    }),
    Compression(),
    Layouts(),
    Pages({
      extensions: ["vue", "md"]
    }),
    Markdown({
      headEnabled: false
    }),
    SVG()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src"),
      "assets": `${path.resolve(__vite_injected_original_dirname, "assets")}`
    }
  },
  ssgOptions: {
    script: "async",
    formatting: "minify"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxVc2Vyc1xcXFxKYWNvXFxcXERlc2t0b3BcXFxcZ3Jvb3ZseS12dWVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXFVzZXJzXFxcXEphY29cXFxcRGVza3RvcFxcXFxncm9vdmx5LXZ1ZVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovVXNlcnMvSmFjby9EZXNrdG9wL2dyb292bHktdnVlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IFZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXHJcbmltcG9ydCBDb21wcmVzc2lvbiBmcm9tICd2aXRlLXBsdWdpbi1jb21wcmVzc2lvbidcclxuaW1wb3J0IExheW91dHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWxheW91dHMnXHJcbmltcG9ydCBQYWdlcyBmcm9tICd2aXRlLXBsdWdpbi1wYWdlcydcclxuaW1wb3J0IE1hcmtkb3duIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1tYXJrZG93bidcclxuaW1wb3J0IFNWRyBmcm9tICd2aXRlLXN2Zy1sb2FkZXInXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIFZ1ZSh7XHJcbiAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC5tZCQvXSxcclxuICAgICAgcmVhY3Rpdml0eVRyYW5zZm9ybTogdHJ1ZSxcclxuICAgIH0pLFxyXG5cclxuICAgIENvbXBvbmVudHMoe1xyXG4gICAgICAvLyBhbGxvdyBhdXRvIGxvYWQgbWFya2Rvd24gY29tcG9uZW50cyB1bmRlciBgLi9zcmMvY29tcG9uZW50cy9gXHJcbiAgICAgIGV4dGVuc2lvbnM6IFsndnVlJywgJ21kJ10sXHJcbiAgICAgIC8vIGFsbG93IGF1dG8gaW1wb3J0IGFuZCByZWdpc3RlciBjb21wb25lbnRzIHVzZWQgaW4gbWFya2Rvd25cclxuICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLnZ1ZVxcP3Z1ZS8sIC9cXC5tZCQvXSxcclxuICAgICAgZHRzOiBmYWxzZSxcclxuICAgIH0pLFxyXG5cclxuICAgIENvbXByZXNzaW9uKCksXHJcblxyXG4gICAgTGF5b3V0cygpLFxyXG5cclxuICAgIFBhZ2VzKHtcclxuICAgICAgZXh0ZW5zaW9uczogWyd2dWUnLCAnbWQnXVxyXG4gICAgfSksXHJcblxyXG4gICAgTWFya2Rvd24oe1xyXG4gICAgICBoZWFkRW5hYmxlZDogZmFsc2VcclxuICAgIH0pLFxyXG5cclxuICAgIFNWRygpXHJcbiAgXSxcclxuXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyksXHJcbiAgICAgICdhc3NldHMnOiBgJHtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnYXNzZXRzJyl9YCxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgc3NnT3B0aW9uczoge1xyXG4gICAgc2NyaXB0OiAnYXN5bmMnLFxyXG4gICAgZm9ybWF0dGluZzogJ21pbmlmeScsXHJcbiAgfVxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStSLFNBQVMsb0JBQW9CO0FBQzVULE9BQU8sU0FBUztBQUNoQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGFBQWE7QUFDcEIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sY0FBYztBQUNyQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxVQUFVO0FBUmpCLElBQU0sbUNBQW1DO0FBV3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxNQUNGLFNBQVMsQ0FBQyxVQUFVLE9BQU87QUFBQSxNQUMzQixxQkFBcUI7QUFBQSxJQUN2QixDQUFDO0FBQUEsSUFFRCxXQUFXO0FBQUEsTUFFVCxZQUFZLENBQUMsT0FBTyxJQUFJO0FBQUEsTUFFeEIsU0FBUyxDQUFDLFVBQVUsY0FBYyxPQUFPO0FBQUEsTUFDekMsS0FBSztBQUFBLElBQ1AsQ0FBQztBQUFBLElBRUQsWUFBWTtBQUFBLElBRVosUUFBUTtBQUFBLElBRVIsTUFBTTtBQUFBLE1BQ0osWUFBWSxDQUFDLE9BQU8sSUFBSTtBQUFBLElBQzFCLENBQUM7QUFBQSxJQUVELFNBQVM7QUFBQSxNQUNQLGFBQWE7QUFBQSxJQUNmLENBQUM7QUFBQSxJQUVELElBQUk7QUFBQSxFQUNOO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsTUFDbEMsVUFBVSxHQUFHLEtBQUssUUFBUSxrQ0FBVyxRQUFRO0FBQUEsSUFDL0M7QUFBQSxFQUNGO0FBQUEsRUFFQSxZQUFZO0FBQUEsSUFDVixRQUFRO0FBQUEsSUFDUixZQUFZO0FBQUEsRUFDZDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
