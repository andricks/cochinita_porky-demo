
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
# Copia tu archivo de configuración personalizado (opcional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Copia los archivos estáticos de tu sitio web (opcional)
# COPY ./html /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Comando por defecto para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]