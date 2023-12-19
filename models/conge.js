import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/db.js';
import Employe from './employe.js';

class Conge extends Model {} // Hérite de Model

Conge.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  dateDebut: {
    type: DataTypes.DATE,
  },
  dateFin: {
    type: DataTypes.DATE,
  },
  motif: {
    type: DataTypes.STRING,
  },   
}, {
  sequelize, // Passer l'instance de Sequelize à init
  modelName: 'Conge', // Nom du modèle
});
Conge.belongsTo(Employe,{ as: 'Employes' });

export default Conge;

