import { env } from '../env';

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(env.DATABASE, env.USR_DB, env.PASS_DB, {
    host: 'localhost',
    dialect: 'postgres',  // ou 'postgres', 'sqlite', etc.
    timezone: '+00:00' // Configura o fuso horário para UTC
});

module.exports = sequelize;