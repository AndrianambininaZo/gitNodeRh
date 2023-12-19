import User from "../models/user.js";
import bcrypt from "bcrypt"

const getOneUser=(req,res)=>{
    const {id}=req.params
    const {body}=req

    User.findOne({
        where:{
            email:body.email
        }
    }).then((contrant)=>{
        const password=body.password
        const passwordCript=contrant.password
        bcrypt.compare(password, passwordCript, (err, result) => {
            if (err) {
              // Une erreur s'est produite lors de la comparaison
              console.error(err);
            } else {
              if (result) {
                // Le mot de passe correspond au mot de passe haché
                console.log('Mot de passe valide');
                return res.status(200).json(contrant)
              } else {
                // Le mot de passe ne correspond pas au mot de passe haché
                console.log('Mot de passe invalide');
                return res.status(500).json("mot depasse invalide");
              }
            }
          });
        
      }).catch((error)=>{
        return res.status(500).json(error);
      });
    
}
export {getOneUser}