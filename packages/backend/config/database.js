require('dotenv').config();  // Cargar las variables de entorno

const { Sequelize } = require('sequelize');

// Verificar que la variable de entorno se esté cargando correctamente
console.log(process.env.MYSQL_URL);  // Esto debería mostrar la URL completa de tu base de datos

const sequelize = new Sequelize(process.env.MYSQL_URL, {
    dialect: 'mysql',
    logging: false,
});

sequelize.authenticate().then(() => {
    console.log("Conexión exitosa a la base de datos");
}).catch((error) => {
    console.error("No se pudo conectar a la base de datos:", error);
});

module.exports = sequelize;
