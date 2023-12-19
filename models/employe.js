import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/db.js';

class Employe extends Model {} // Hérite de Model

Employe.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nom: {
    type: DataTypes.STRING,
  },
  matricule: {
    type: DataTypes.STRING,
    unique:true
  },
  cin: {
    type: DataTypes.STRING,
  },
  prenom: {
    type:DataTypes.STRING
  },
  dateNaissance: {
    type:DataTypes.DATE
  },
  email: {
    type:DataTypes.STRING,
    unique:true
  },
       
}, {
  sequelize, // Passer l'instance de Sequelize à init
  modelName: 'Employe', // Nom du modèle
});

export default Employe;

