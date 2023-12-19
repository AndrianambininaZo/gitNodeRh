import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/db.js';
import Employe from './employe.js';

class Avance extends Model {} // Hérite de Model

Avance .init({
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
  motif:DataTypes.STRING
    
}, {
  sequelize, // Passer l'instance de Sequelize à init
  modelName: 'Avance', // Nom du modèle
});
Avance.belongsTo(Employe,{ as: 'Employes' });

export default Avance;

