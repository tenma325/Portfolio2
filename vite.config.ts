import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// GitHub Pages 用: https://<user>.github.io/devepopment/ で配信されるため base 必須
export default defineConfig({
  plugins: [react()],
  base: '/devepopment/',
})
