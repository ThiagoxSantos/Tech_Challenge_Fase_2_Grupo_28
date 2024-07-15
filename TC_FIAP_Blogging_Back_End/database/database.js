require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE, process.env.USR_DB, process.env.PASS_DB, {
    host: 'localhost',
    dialect: 'postgres',  // ou 'postgres', 'sqlite', etc.
    timezone: '+00:00' // Configura o fuso horário para UTC
});

module.exports = sequelize;