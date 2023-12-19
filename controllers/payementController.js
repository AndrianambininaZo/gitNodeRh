
import Avance from "../models/avanceSalaire.js";
import Employe from "../models/employe.js";
import Payement from "../models/paiementSalaire.js";


const createPayement = async (req, res) => {
    const {id}=req.params
    const { body } = req;
    console.log(body)
    const  employe= await Employe.findByPk(id);
    if (!employe) {
      return res.status(404).json({message:"Emloyer not found"})    
    }
    // Créez un nouvel objet Employe avec les données de body
    const payemntExist=await Payement.findOne( {
      where: {
      EmployesId: id,
      annee: body.annee,
      mois: body.mois
    }
    });
    if (payemntExist) {
      return res.status(500).json({message:"Emloyer deja payer"})      
    }
   
   const avance= await Avance.findOne( {
        where: {
        EmployesId: id,
        annee: body.annee,
        mois: body.mois
      }
  });
  console.log(avance)
      if (avance) {
        const payement = {
                mois: body.mois,
                annee: body.annee,
                montant:body.montant,
                EmployesId:id,
                avance:avance.montant,
                totalMontant:body.montant - avance.montant
        
            };
            Payement.create(payement)
            .then(() => {
                res.status(201).json({ message: "Insertion effectuée" });
            })
            .catch((error) => res.status(500).json(error));
        
      }else{
        const payement = {
            mois: body.mois,
            annee: body.annee,
            montant:body.montant,
            EmployesId:id,
            avance:0,
            totalMontant:body.montant    
    
        };
        Payement.create(payement)
        .then(() => {
            res.status(201).json({ message: "Insertion effectuée" });
        })
        .catch((error) => res.status(500).json(error));

      }
    
};

const createAvance=async (req,res)=>{
  const { body } = req; 
  const {id}=req.params;
  const  employe= await Employe.findByPk(id);
  if (!employe) {
    return res.status(404).json({message:"Emloyer not found"})    
  }
  
  const avance = {
    mois: body.mois,
    annee: body.annee,
    montant:body.montant,
    EmployesId:id,
    motif:body.motif
  }; 

  const avanceExist=await Avance.findOne( {
    where: {
    EmployesId: id,
    annee: body.annee,
    mois: body.mois
  }
  });
  if (avanceExist) {
    return res.status(500).json({message:"Emloyer deja une avance"})      
  }


  Avance.create(avance).then((resultat)=>{
    return res.status(200).json(resultat);
  }).catch((error)=> {return res.status(500).json(error)});
}

const getAllPayement=(req,res)=>{
  Payement.findAll({
    include:{
      model:Employe,
      as:'Employes'
    },    //ne afficher pas le donner
    attributes:{exclude:['createdAt','updatedAt']},
    
  }).then((produits)=>{
    res.status(200).json(produits);
  }).catch((error)=>{
    res.status(500).json(error);
  });
}


//avance
const getAllAvance=(req,res)=>{
    Avance.findAll({
      include:{
        model:Employe,
        as:'Employes'
      },    //ne afficher pas le donner
      attributes:{exclude:['createdAt','updatedAt']},
      
    }).then((produits)=>{
      res.status(200).json(produits);
    }).catch((error)=>{
      res.status(500).json(error);
    });
}



export {createPayement,createAvance,getAllAvance,getAllPayement}