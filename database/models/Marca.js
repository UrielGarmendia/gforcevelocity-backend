module.exports = (sequelize, DataTypes) => {

    const Marca = sequelize.define('Marca',{

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
 
    }, 
    {

        tableName: 'marcas',

    });
};