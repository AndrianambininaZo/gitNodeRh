// contrat.mjs

import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/db.js';
// Importez Employe correctement
import Employe from './employe.js';
import Poste from './poste.js';

class Contrat extends Model {} // Assurez-vous d'hériter de Model

Contrat.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  montant:{
    type:DataTypes.STRING
  },
  debut:{
    type:DataTypes.DATE
  } ,
  fin: {
    type:DataTypes.DATE
  },
  // Autres champs du contrat
}, {
  sequelize, // Assurez-vous de passer l'instance Sequelize ici
  modelName: 'Contrat', // Nom du modèle
});
// Établir la relation
Contrat.belongsTo(Employe,{ as: 'Employes' });
Contrat.belongsTo(Poste,{ as: 'Postes' });

export default Contrat;
