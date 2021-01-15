module.exports = (sequelize, DataTypes) => {
    let alias = 'Notas'
    let cols = {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
        },
        title : {
            type : DataTypes.STRING,
        },
        description : {
            type : DataTypes.STRING
        }
    }
    let config = {
        tableName : 'notas',
        timestamps : true,
        underscored: true
    }

    const Notas = sequelize.define(alias, cols, config)
    return Notas
}