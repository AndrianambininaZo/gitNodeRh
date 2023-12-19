import Employe from "../models/employe.js";
import employeValidation from "../validation/employerValidation.js";
import Contrat from "../models/contrat.js";
import Poste from "../models/poste.js";

const getAll=(req,res)=>{
    Employe.findAll({
        //ne afficher pas le donner
        attributes:{exclude:['createdAt','updatedAt']},
        
    }).then((produits)=>{
        res.status(200).json(produits);
    }).catch((error)=>{
        res.status(500).json(error);
    });
}
const getOne=(req,res)=>{
    const {id}=req.params
    Employe.findByPk(id).then((produit)=>{
        res.status(200).json(produit);
    }).catch((error)=>{
        res.status(500).json(error);
    })
}
const createOne = (req, res) => {
    const { body } = req;
   // const { error } = employeValidation(body);
/*
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }*/

    // Créez un nouvel objet Employe avec les données de body
    const employe = {
        nom: body.nom.toUpperCase(),
        prenom: body.prenom,
        dateNaissance: body.dateNaissance,
        cin:body.cin,
        matricule:body.matricule,
        email:body.email 

    };

    // Utilisez la méthode create de Sequelize pour insérer l'employé dans la base de données
    Employe.create(employe)
        .then(() => {
            res.status(201).json({ message: "Insertion effectuée" });
        })
        .catch((error) => res.status(500).json(error));
};

const putOne=(req,res)=>{
    const {id}=req.params;
    const {body}=req;
    Employe.findByPk(id).then((empl)=>{
        empl.nom=body.nom.toUpperCase(),
        empl.matricule=body.matricule,
        empl.dateNaissance=body.dateNaissance,
        empl.cin=body.cin,
        empl.email=body.email,
        empl.prenom=body.prenom
        empl.save().then(()=>{
            return res.status(201).json({message:"Modification effecteuer"});
        }).catch((error)=>{return res.status(500).json(error)});
    }).catch((error)=>{return res.status(500).json(error)});
}
const deleteOne=(req,res)=>{
    const {id}=req.params;
    Employe.destroy({
        where:{
            id:id
        }
    }).then((delet)=>{
        if(delet===0) return res.status(400).json({mssage:"Employe ne pas existe"});
        return res.status(200).json({mssage:"Supprimer effecteuer"});
    }).catch((error)=>{
        return res.status(500).json(error);
    })
}


const addContratToEmploye = async (req, res) => {
    const { employeId } = req.params; // L'ID de l'employé à qui ajouter le contrat
    const { body } = req; // Les données du contrat

    try {
        const employe = await Employe.findByPk(employeId);
        if (!employe) {
            return res.status(404).json({ message: "L'employé n'a pas été trouvé." });
        }
        const poste = await Poste.findByPk(body.posteId);
        if (!poste) {
            return res.status(404).json({ message: "Poste n'a pas été trouvé." });
        }

        const nouveauContrat = await Contrat.create({
            montant: body.montant,
            debut: body.debut,
            fin: body.fin,
            EmployesId:body.personnelId,
            PostesId:body.posteId
        });

     //await nouveauContrat.setEmploye(employe);
        res.status(201).json({ message: "Contrat ajouté avec succès", contrat: nouveauContrat });
    } catch (error) {
        res.status(500).json(error);
    }
};

const getOneContrat=(req,res)=>{
    const {id}=req.params
    Contrat.findByPk(id, {
        include: {
          model: Employe,
          as: 'Employes',
        },
      }).then((contrant)=>{
        return res.status(200).json(contrant)
      }).catch((error)=>{
        return res.status(500).json(error);
      });
    
}

const getAllContrat=(req,res)=>{    
    Contrat.findAll({
    include: [
        {
        model: Employe,
        as: 'Employes',
        },
        {
        model: Poste,
        as: 'Postes',
        },
    ],
}).then((contrant)=>{
        return res.status(200).json(contrant)
      }).catch((error)=>{
        return res.status(500).json(error);
      });
    
}






export {getAll,getOne,createOne,putOne,deleteOne,addContratToEmploye,getOneContrat,getAllContrat};