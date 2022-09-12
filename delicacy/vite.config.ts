import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
//自动导入插件
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        //设置别名
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    plugins: [
        vue(),
        AutoImport({
            imports: ['vue', 'vue-router']//自动导入vue和vue-router相关函数
        })],
    server: {
        port: 8081, //启动端口
        hmr: {
            host: '127.0.0.1',
            port: 8081
        },
        // // 设置 https 代理
        proxy: {
            '/api': {
                target: 'http://localhost:8080/',
                changeOrigin: true
                // rewrite: (path: string) => path.replace(/^\/api/, '')
            }
        }

    }
});
