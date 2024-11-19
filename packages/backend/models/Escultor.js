const Escultor = sequelize.define('Escultor', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    biografia: {
        type: DataTypes.TEXT,
    },
    fechaNacimiento: {
        type: DataTypes.DATE,
    },
    fechaFallecimiento: {
        type: DataTypes.DATE,
    },
    imagen: { // Nuevo campo
        type: DataTypes.STRING,
    },
});

module.exports = Escultor;
