
import Poste from "../models/poste.js";


const createPoste = (req, res) => {
    const { body } = req;

    // Créez un nouvel objet Employe avec les données de body
    const poste = {
        nom: body.nom,
        description: body.description,

    };

    // Utilisez la méthode create de Sequelize pour insérer l'employé dans la base de données
    Poste.create(poste)
        .then(() => {
            res.status(201).json({ message: "Insertion effectuée" });
        })
        .catch((error) => res.status(500).json(error));
};

const getAllPoste=(req,res)=>{
    Poste.findAll({
        attributes:{exclude:['createdAt','updatedAt']},
    }
    ).then(produits=>{
        return res.status(200).json(produits)
    }).catch((error)=>{
        res.status(500).json(error);
    });
}


export {createPoste,getAllPoste}