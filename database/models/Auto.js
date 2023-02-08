module.exports = (sequelize, DataTypes) => {

    const Auto = sequelize.define('Auto',{

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

        modelo: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        marca: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        precio: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        descuento: {
            type: DataTypes.STRING,
        },

        estado: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        imagen: {
            type: DataTypes.STRING,
            allowNull: false,
        },
 
    }, 
    {

        tableName: 'autos',

    });
};