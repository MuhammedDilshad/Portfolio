import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    VITE_FIRSTSERVISE: '"service_8od8tn9"',
    VITE_SECONDTEMPLATE: '"template_g79hi8t"',
    VITE_THIRDPRIVATE: '"9lQbMOXgvuRO6PVFk"',
  },
});
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       // Add an alias for the Img directory
//       "@ImageDt": path.resolve(__dirname, "ImageDt"),
//     },
//   },
// });
