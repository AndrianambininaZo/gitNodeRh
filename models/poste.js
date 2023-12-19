import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/db.js';

class Poste extends Model {} // Hérite de Model

Poste.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nom: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },   
}, {
  sequelize, // Passer l'instance de Sequelize à init
  modelName: 'Poste', // Nom du modèle
});

export default Poste;

