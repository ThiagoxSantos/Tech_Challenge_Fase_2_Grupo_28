const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Usuario = sequelize.define('usuario', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    Nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'usuario',
    timestamps: false, // Desativa colunas de timestamps (opcional)
    freezeTableName: true // Desativa a pluralização automática do nome da tabela
});

module.exports = Usuario;