import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})



// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // Add the following line to handle CSS and Emotion stylesheets
// import { resolve } from 'path';

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       // Add this alias to resolve the Emotion stylesheets issue
//       '@mui/system': resolve(__dirname, 'node_modules/@mui/system'),
//     },
//   },
// });
