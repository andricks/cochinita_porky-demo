import connectDB from './Database/BaseDeDatos.js';
import express from 'express';
import dotenv from 'dotenv';


dotenv.config();

const app = express();

// Conectar a MongoDB
connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Rutas de ejemplo
app.get('/', (req, res) => {
  res.send('API del restaurante funcionando!');
});

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
