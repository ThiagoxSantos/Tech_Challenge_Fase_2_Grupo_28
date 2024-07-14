const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');
const Usuario = require('../model/Usuario');
const { FOREIGNKEYS } = require('sequelize/lib/query-types');

const Registro = sequelize.define('registro', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    idUsuario: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'id',
        },
    },
    DataInicio: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    DataFim: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    tableName: 'registro',
    timestamps: false, // Desativa colunas de timestamps (opcional)
    freezeTableName: true // Desativa a pluralização automática do nome da tabela
});

Usuario.hasMany(Registro, { foreignKey: 'idUsuario' });
Registro.belongsTo(Usuario, { foreignKey: 'idUsuario' });

module.exports = Registro;