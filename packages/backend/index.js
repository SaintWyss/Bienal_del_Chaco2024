const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database'); // Configuración de tu base de datos
const eventosRouter = require('./routes/eventos');
const escultoresRouter = require('./routes/escultores');
const esculturasRouter = require('./routes/esculturas');
const imagenesRouter = require('./routes/imagenes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const sponsorRoutes = require('./routes/sponsor');
const votacionesRouter = require('./routes/votaciones');
require('dotenv').config(); // Cargar variables de entorno

// Crear la aplicación de Express
const app = express();
const PORT = process.env.PORT; // Usar el puerto especificado en .env o 3000 por defecto

// Middlewares
app.use(cors()); // Permitir peticiones desde cualquier origen
app.use(express.json()); // Parsear JSON en el cuerpo de las solicitudes

// Rutas de tu API
app.use('/eventos', eventosRouter);
app.use('/escultores', escultoresRouter);
app.use('/esculturas', esculturasRouter);
app.use('/imagenes', imagenesRouter);
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/sponsors', sponsorRoutes);
app.use('/votar', votacionesRouter);

// Manejar rutas no definidas
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada en el backend' });
});

// Iniciar la conexión con la base de datos y el servidor
sequelize
    .sync({ alter: true })
    .then(() => {
        const server = app.listen(PORT, () => {
            console.log(`Servidor backend corriendo en el puerto ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error al conectar con la base de datos:', err);
    });
