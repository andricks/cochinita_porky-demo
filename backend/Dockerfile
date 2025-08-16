# 1. Usar una imagen ligera de Node.js
FROM node:20-alpine

# 2. Definir carpeta de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiar package.json y package-lock.json
COPY package*.json ./

# 4. Instalar dependencias
RUN npm install

# 5. Copiar el resto del código al contenedor
COPY . .

# 6. Exponer el puerto en el que corre el backend
EXPOSE 5000

# 7. Comando para iniciar la aplicación
CMD ["npm", "start"]
