import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote-app', // remote application 이름
      filename: 'remoteEntry.js', // 매니페스트 파일, 기본적으로 remoteEntry.js를 사용
      // Modules to expose
      // Remote에서 내보낼 요소
      // 여기서는 버튼을 내보낼 것이므로 버튼 컴포넌트 경로를 작성
      exposes: {
        './Button': './src/components/Button',
      },
      // shared는 의존성을 나타낸다. 기본적으로 react, react-dom를 명시
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
