import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/db.js';
import Employe from './employe.js';

class Absence extends Model {} // Hérite de Model

Absence .init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  date: {
    type: DataTypes.STRING,
  },   
}, {
  sequelize, // Passer l'instance de Sequelize à init
  modelName: 'Absence', // Nom du modèle
});

Absence.belongsTo(Employe,{ as: 'Employes' });

export default Absence;

