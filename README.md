# Cochinita Porky Demo

Proyecto fullstack para la gestión y promoción de productos de Cochinita Porky. Incluye un backend en Node.js, un frontend en React, y configuración para despliegue con Docker y Nginx.

### Tabla de Contenidos

- Descripción General
- Estructura del Proyecto
- Instalación y Configuración
- Desarrollo
- Despliegue con Docker y Nginx
- Componentes Principales
- Variables de Entorno
- Scripts Disponibles

### Descripción General

Este proyecto es una demo para la marca Cochinita Porky, que incluye:

- Backend: API REST en Node.js.
- Frontend: Aplicación web en React con Tailwind CSS.
- Nginx: Proxy reverso para servir el frontend y enrutar peticiones al backend.
- Docker: Contenedores para facilitar el despliegue y la portabilidad.

### Estructura del Proyecto

    cochinita_porky-demo/
    │
    ├── backend/           # API Node.js
    │   ├── Dockerfile
    │   ├── package.json
    │   ├── .env.example
    │   └── src/
    │       ├── app.js
    │       └── Database/
    │           └── BaseDeDatos.js
    │
    ├── frontend/          # React + Tailwind
    │   ├── DockerFile
    │   ├── package.json
    │   ├── README.md
    │   ├── public/
    │   └── src/
    │       ├── App.js
    │       ├── components/
    │       │   ├── Footer.jsx
    │       │   ├── HeroSection.jsx
    │       │   ├── Navbar.jsx
    │       │   ├── PromoCards.jsx
    │       │   └── PromoSection.jsx
    │       └── tailwind.config.js
    │
    ├── nginx/             # Configuración Nginx
    │   ├── Dockerfile
    │   └── nginx.conf
    │
    ├── docker-compose.yml # Orquestación de servicios
    └── README.md          # Este archivo

### Instalación y Configuración

Requisitos Previos

- Node.js >= 18.x
- npm >= 9.x
- Docker y Docker Compose
- PowerShell (Windows)

**Clonar el repositorio:**

```
git clone https://github.com/andricks/cochinita_porky-demo.git
cd cochinita_porky-demo
```

#### Backend

1. Instalar dependencias:

```
cd backend
npm install
```

2. Configurar variables de entorno:

- Copia **.env.example** a **.env** y ajusta los valores según tu entorno.

#### Frontend

1. Instalar dependencias:

```
cd ../frontend
npm install
```

2. Tailwind CSS ya está configurado en **tailwind.config.js**.

### Desarrollo

1. Levantar el Backend:

```
cd backend
npm start
```

El backend se ejecuta por defecto en el puerto configurado en **.env**.

2. Levantar el Frontend

```
cd frontend
npm start
```

El frontend se ejecuta por defecto en el puerto **3000**.

### Despliegue con Docker y Nginx

Orquestación con Docker Compose

Desde la raíz del proyecto:
```
docker-compose up --build
```

Esto levantará los siguientes servicios:

- backend: API Node.js
- frontend: React
- nginx: Proxy reverso

Estructura de los Dockerfiles

- Dockerfile / **backend**: Construye la imagen del backend.
- DockerFile / **frontend**: Construye la imagen del frontend.
- Dockerfile / **nginx**: Construye la imagen de Nginx usando nginx.conf.

#### Nginx
El archivo nginx.conf define el proxy para enrutar /api al backend y servir el frontend como sitio estático.

### Componentes Principales

#### Backend

- **src/app.js**: Punto de entrada principal del servidor.
- **src/Database/BaseDeDatos.js**: Módulo para la gestión de la base de datos.

#### Frontend

- **src/App.js**: Componente raíz de la aplicación React.
- **src/components/**: Componentes reutilizables:
	- **Navbar.jsx**: Barra de navegación.
	- **HeroSection.jsx**: Sección principal de promoción.
	- **PromoCards.jsx**: Tarjetas de promociones.
	- **PromoSection.jsx**: Sección de promociones.
	- **Footer.jsx**: Pie de página.

### Variables de Entorno
- El backend utiliza variables de entorno definidas en **.env.example**.
- Es necesario crear un archivo **.env** en backend para producción/desarrollo.

### Scripts Disponibles

**Backend (package.json)**

- **npm start**: Inicia el servidor.
- **npm run dev**: Inicia el servidor en modo desarrollo (si está configurado).

**Frontend (package.json)**

- **npm start**: Inicia la app React en modo desarrollo.
- **npm run build**: Compila la app para producción.
- **npm test**: Ejecuta los tests.