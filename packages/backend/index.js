const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const path = require('path');
const eventosRouter = require('./routes/eventos');
const escultoresRouter = require('./routes/escultores');
const esculturasRouter = require('./routes/esculturas');
const imagenesRouter = require('./routes/imagenes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const sponsorRoutes = require('./routes/sponsor');
const votacionesRouter = require('./routes/votaciones');
const eventosRoutes = require('./routes/eventos');

const app = express();
const PORT = process.env.PORT || 8080;  // Usa el puerto de la nube o 3000 por defecto para desarrollo local
 // O usa el valor de puerto de .env si está configurado
require('dotenv').config();

// Middlewares
app.use(cors());
app.use(express.json());

// Sirve los archivos de frontend en producción
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'public')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });
}

// Rutas
app.use('/eventos', eventosRouter);
app.use('/escultores', escultoresRouter);
app.use('/esculturas', esculturasRouter);
app.use('/imagenes', imagenesRouter);
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes); // Asegúrate de que esta línea esté aquí
app.use('/sponsors', sponsorRoutes);
app.use('/votar', votacionesRouter);
app.use('/api/eventos', eventosRoutes);

// Iniciar el servidor y la conexión con la base de datos
if (process.env.NODE_ENV === 'production') {
    sequelize.sync({ alter: true })
        .then(() => {
            app.listen(PORT, () => {
                console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
            });
        })
        .catch(err => {
            console.error('Error al conectar con la base de datos:', err);
        });
} else {
    console.log('Servidor desactivado en modo de desarrollo.');
}
