module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User',{

        id: {
            type: DataTypes.INTEGER
        },

        name: {
            type: DataTypes.STRING
        },

        email: {
            type: DataTypes.STRING
        },

        password: {
            type: DataTypes.STRING
        },
 
    }, 
    {

        tableName: 'users',

    });
}