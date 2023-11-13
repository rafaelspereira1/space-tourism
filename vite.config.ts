import { resolve } from "path";

const root = resolve(__dirname, "src");
const outDIr = resolve(__dirname, "dist");

export default {
  root,
  build: {
    outDir: outDIr,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        test: resolve(root, "pages", "design-system", "index.html"),
      },
    },
  },
};
