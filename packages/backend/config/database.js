require('dotenv').config();  // Cargar las variables de entorno

const { Sequelize } = require('sequelize');

// Verificar que la variable de entorno se esté cargando correctamente
console.log("URL de conexión a la base de datos:", process.env.MYSQL_URL);

const sequelize = new Sequelize(process.env.MYSQL_URL, {
    dialect: 'mysql',
    logging: false,
    pool: {
        max: 5, // Máximo número de conexiones
        min: 0, // Mínimo número de conexiones
        acquire: 30000, // Tiempo máximo para intentar conectar (ms)
        idle: 10000 // Tiempo máximo que una conexión puede estar inactiva (ms)
    }
});

sequelize.authenticate()
    .then(() => {
        console.log("Conexión exitosa a la base de datos");
    })
    .catch((error) => {
        console.error("No se pudo conectar a la base de datos:", error);
    });

module.exports = sequelize;
