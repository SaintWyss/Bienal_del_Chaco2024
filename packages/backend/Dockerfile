# Usa la imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del backend
COPY . .

# Instala las dependencias
RUN yarn install

# Expone el puerto
EXPOSE 5000

# Comando para iniciar el backend
CMD ["yarn", "dev"]