import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000,
      host: env.VITE_HOST || '0.0.0.0', // Sử dụng biến môi trường để cấu hình host linh hoạt
    },
    plugins: [react()],
    // Đã loại bỏ define để bảo vệ API Key, tránh rò rỉ vào mã nguồn phía client
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    }
  };
});