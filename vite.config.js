import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import imp from 'vite-plugin-imp';
import { fileURLToPath, URL } from "url";
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs'
import reactRefresh from '@vitejs/plugin-react-refresh'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    reactRefresh(),
    imp({
      libList: ['axios'],
    })
  ],
  
  // resolve: {import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs'
  //   alias: [
  //     { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
  //     { find: '@assets', replacement: fileURLToPath(new URL('./src/shared/assets', import.meta.url)) },
  //     { find: '@cmp', replacement: fileURLToPath(new URL('./src/shared/cmp', import.meta.url)) },
  //     { find: '@stores', replacement: fileURLToPath(new URL('./src/shared/stores', import.meta.url)) },
  //     { find: '@use', replacement: fileURLToPath(new URL('./src/shared/use', import.meta.url)) },
  //   ],
  // },
  resolve: {
    alias: {
     "@": __dirname + "/src",
    }
  },
  build: {
    commonjsOptions: { transformMixedEsModules: true } // Change
  },
  optimizeDeps:{
    esbuildOptions:{  
      plugins:[
        esbuildCommonjs(['@canvasjs/react-charts', '@canvasjs/charts'])
      ]
    }
  }

})
