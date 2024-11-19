# Etapa de construcción
FROM node:18 AS builder

WORKDIR /app

# Copiar archivos esenciales del backend desde la raíz
COPY package.json yarn.lock ./

# Copiar archivos del backend
COPY packages/backend ./packages/backend

# Instalar dependencias del backend
WORKDIR /app/packages/backend
RUN yarn install --production

# Comando para iniciar el backend
CMD ["node", "index.js"]
