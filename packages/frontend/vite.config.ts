import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173, // Puerto predeterminado de Vite
        strictPort: true, // Asegúrate de que se use este puerto y no cambie
        watch: {
            usePolling: true, // Activa el polling en sistemas como Windows
        },
    },
    define: {
        'process.env': {}, // Define process.env para manejar variables
    },
});