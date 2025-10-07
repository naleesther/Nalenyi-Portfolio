import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwind from '@tailwindcss/vite'


export default defineConfig( ({ command }) => ({
  base: command === 'build'?'/Nalenyi-Portfolio/' : '/',
  plugins:[vue(), tailwind()]
}))

