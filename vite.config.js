import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace this with your GitHub repo name
const repoName = "My-Portfolio-Profile";

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, // 👈 Important!
});
