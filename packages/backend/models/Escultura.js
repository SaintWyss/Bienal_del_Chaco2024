const Escultura = sequelize.define('Escultura', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT,
    },
    fechaCreacion: {
        type: DataTypes.DATE,
    },
    tematica: {
        type: DataTypes.STRING,
    },
    eventoID: {
        type: DataTypes.INTEGER,
    },
    imagen: { // Nuevo campo
        type: DataTypes.STRING,
    },
});

module.exports = Escultura;
