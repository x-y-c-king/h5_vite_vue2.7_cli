import { defineConfig, splitVendorChunkPlugin } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue2'
import legacy from '@vitejs/plugin-legacy'
import { join } from 'path'

export default defineConfig({
    base: './',
    optimizeDeps: {
        include: [
            'vue',
            'vue-router'
        ]
    },
    plugins: [
        vue(),
        splitVendorChunkPlugin(),
        legacy({
            targets: ['defaults', 'not ie < 9']
        }),
        Components({
            resolvers: [
                VantResolver()
            ]
        })
    ],
    css: {
        postcss: {
            plugins: [
                require('postcss-plugin-px2rem')({
                    rootValue: 75, // 换算基数,默认100.
                    exclude: /(node_module)/, // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
                    mediaQuery: false, // （布尔值）允许在媒体查询中转换px。
                    minPixelValue: 3 // 设置要替换的最小像素值(小于3px像素不会被转成rem)。 默认 0
                })
            ]
        }
    },
    resolve: {
        alias: [
            {
                find: '@',
                replacement: join(__dirname, 'src')
            }
        ]
    },
    server: {
        open: false, // 自动在浏览器打开
        // port: 8081,
        host: '0.0.0.0',
        proxy: {
            "/api": {
                target: "http://192.168.1.85:9090",
                // target: "http://192.168.2.29:9090",
                // target: "https://closer.51wnl-cq.com",
                changeOrigin: true,
                // rewrite: (path) => path.replace("^\/api", ""),
                rewrite: (path) => path.replace(/^\/api/, ""),
                secure: false,
            }
        }
    }
})