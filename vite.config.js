import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import imp from 'vite-plugin-imp';
import { fileURLToPath, URL } from "url";
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs'
import reactRefresh from '@vitejs/plugin-react-refresh'
import autoprefixer from 'autoprefixer'; // Import autoprefixer
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    reactRefresh(),
    imp({
      libList: ['axios'],
    })
  ],
  resolve: {
    alias: {
     "@": __dirname + "/src",
    }
  },
  optimizeDependencies: {
    include: [],
    exclude: ['react-cookie'],
  },
  build: {
    commonjsOptions: { transformMixedEsModules: true }, // Change
    chunkSizeWarningLimit: 800, // Set the limit to 800kb
  },
  // css: {
  //   postcss: {
  //     plugins: [
  //       autoprefixer(), // Include autoprefixer here
  //     ],
  //   },
  // },
  optimizeDeps:{
    esbuildOptions:{  
      plugins:[
        esbuildCommonjs(['@canvasjs/react-charts', '@canvasjs/charts'])
      ]
    }
  },
})