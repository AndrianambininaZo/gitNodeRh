import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/db.js';

class User extends Model {} // Hérite de Model

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
    unique:true
  }, 
  isAdmin: DataTypes.BOOLEAN,      
}, {
  sequelize, // Passer l'instance de Sequelize à init
  modelName: 'User', // Nom du modèle
});

export default User;

