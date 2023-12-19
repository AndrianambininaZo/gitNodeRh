
import routes from "./routes/routes.js";
import Db from "./db/db.js"
import User from "./models/user.js"
import bcrypt from "bcrypt"
import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('Bienvenue sur votre serveur Express avec Nodemon!');
  });

  //importe le route 
app.use(routes);
//connexion en la base de donner
Db.sync()
    .then(()=>console.log("base de donner bien marche"))
    .catch(()=>console.log("tsy madeh base eh"));

    //creer super utilisateur
    async function createSuperAdmin() {
        try {
          await Db.sync();
      
          const adminExists = await User.findOne({ where: { username: 'admin' } });
          if (!adminExists) {
            const hashedPassword = await bcrypt.hash('motdepass', 10);
            await User.create({
              username: 'admin@gmail.com',
              password: hashedPassword,
              isAdmin: true,
            });
            console.log('Super admin créé avec succès.');
          } else {
            console.log('Le super admin existe déjà.');
          }
        } catch (error) {
          console.error('Erreur lors de la création du super admin:', error);
        }
      }
      
      createSuperAdmin();
//lancer le app node js
app.listen(port,()=>{
    console.log(`Le serveur node lence sur port= ${port}`);
});

