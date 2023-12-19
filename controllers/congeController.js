import Conge from "../models/conge.js";
import Employe from "../models/employe.js";

const createConge= async (req,res)=>{
    const {body}=req;
    const {id}=req.params;
    const  employe= await Employe.findByPk(id);
    if (!employe) {
      return res.status(404).json({message:"Emloyer not found"})    
    }
    const conge={
          dateDebut:body.dateDebut,
          dateFin:body.dateDebut,
          motif:body.motif,
          EmployesId:body.EmployesId
    }
    Conge.create(conge).then(()=>{
        return res.status(200).json("Enregistrement effectuer");
    }).catch((error)=>{
        return response.status(500).json(error);
    })
}
const getAllConge=(req,res)=>{
   Conge.findAll({
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
export {createConge,getAllConge};