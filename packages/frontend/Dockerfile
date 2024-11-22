# Usa la imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del frontend
COPY . .

# Instala las dependencias
RUN yarn install && yarn build

# Usa un servidor web estático para servir el frontend
RUN yarn global add serve
CMD ["serve", "-s", "dist"]

# Expone el puerto
EXPOSE 3000