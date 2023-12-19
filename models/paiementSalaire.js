import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/db.js';
import Employe from './employe.js';

class Payement extends Model {} // Hérite de Model

Payement.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  mois: {
    type: DataTypes.INTEGER,
  },
  annee: {
    type: DataTypes.INTEGER,
  }, 
  montant: {
    type: DataTypes.FLOAT,
  },
  avance: {
    type: DataTypes.FLOAT,
  }, 
  totalMontant: {
    type: DataTypes.FLOAT,
  },
    
}, {
  sequelize, // Passer l'instance de Sequelize à init
  modelName: 'Payement', // Nom du modèle
});
Payement.belongsTo(Employe,{ as: 'Employes' });

export default Payement;

