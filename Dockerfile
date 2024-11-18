# Etapa de construcción
FROM node:18 AS builder

WORKDIR /app

# Copiar archivos esenciales
COPY package.json yarn.lock ./

# Instalar dependencias
RUN yarn install

# Copiar el resto del código fuente
COPY . .

# Construir el frontend
RUN yarn workspace frontend build

# Etapa de producción
FROM node:18-alpine AS production

WORKDIR /app

# Copiar los artefactos desde la etapa de construcción
COPY --from=builder /app/packages/backend ./packages/backend
COPY --from=builder /app/packages/frontend/dist ./packages/frontend/dist

# Instalar dependencias de producción para el backend
WORKDIR /app/packages/backend
RUN yarn install --production

CMD ["node", "index.js"]
