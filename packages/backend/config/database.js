const { Sequelize } = require('sequelize');

// Usamos la URL de la base de datos desde la variable de entorno
const sequelize = new Sequelize(process.env.MYSQL_PUBLIC_URL, {
    dialect: 'mysql',
    logging: false,
});

module.exports = sequelize;
