// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  // Configurez ici si vous avez des alias de chemin ou d'autres configurations spécifiques
  resolve: {
    alias: {
      // Définissez des alias si nécessaire
    },
  },
  // Ajoutez des configurations spécifiques au serveur si nécessaire
  server: {
    port: 5173, // Le port sur lequel le serveur tourne
    // Configurez d'autres options de serveur si nécessaire
  },
  // Configurez ici si vous avez besoin de plug-ins Vite supplémentaires
  plugins: [
    // Ajoutez des plugins Vite si nécessaire
  ],
  // Activez le support pour les fichiers statiques si nécessaire
  publicDir: "public",
  // Assurez-vous que le chemin de base est correct si vous déployez dans un sous-dossier
  base: "./",
});
