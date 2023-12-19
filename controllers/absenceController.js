
import Absence from "../models/absence.js";
import Employe from "../models/employe.js";


const createAbsence = (req, res) => {
    const { body } = req;

    // Créez un nouvel objet Employe avec les données de body
    const absence = {
        EmployesId:body.EmployesId,
        date: body.date,
    };

    // Utilisez la méthode create de Sequelize pour insérer l'employé dans la base de données
    Absence.create(absence)
        .then(() => {
            res.status(201).json({ message: "Insertion effectuée" });
        })
        .catch((error) => res.status(500).json(error));
};

const getAllAbsence=(req,res)=>{
    Absence.findAll({
        include: {
            model: Employe,
            as: 'Employes',
          },
    }
    ).then(produits=>{
        return res.status(200).json(produits)
    }).catch((error)=>{
        res.status(500).json(error);
    });
}


export {createAbsence,getAllAbsence}