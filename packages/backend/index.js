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
const eventosRoutes = require('./routes/eventos');

// Crear la aplicación de Express
const app = express();
const PORT = process.env.PORT || 3000; // Usar el puerto especificado en las variables de entorno o 3000 por defecto

require('dotenv').config(); // Cargar variables de entorno

// Middlewares
app.use(cors()); // Permitir peticiones desde cualquier origen
app.use(express.json()); // Parsear JSON en el cuerpo de las solicitudes

// Rutas de tu API
app.use('/api/eventos', eventosRouter);
app.use('/api/escultores', escultoresRouter);
app.use('/api/esculturas', esculturasRouter);
app.use('/api/imagenes', imagenesRouter);
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes); // Ruta para usuarios
app.use('/api/sponsors', sponsorRoutes);
app.use('/api/votar', votacionesRouter);

// Manejar rutas no definidas (esto evita el error de intentar servir un archivo estático)
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada en el backend' });
});

// Iniciar la conexión con la base de datos y el servidor
sequelize
    .sync({ alter: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor backend corriendo en el puerto ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error al conectar con la base de datos:', err);
    });