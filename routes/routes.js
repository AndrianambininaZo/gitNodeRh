import { Router } from "express";
import {createAvance, createPayement,getAllAvance,getAllPayement} from '../controllers/payementController.js';
import { createConge,getAllConge } from "../controllers/congeController.js";
import { createPoste,getAllPoste } from "../controllers/posteController.js";
import { createAbsence,getAllAbsence } from "../controllers/absenceController.js";
import {getOneUser} from "../controllers/authenticationController.js"
import { getAll,getOne,createOne,putOne,deleteOne,addContratToEmploye ,getOneContrat,getAllContrat} from "../controllers/controllerEmpoye.js";
//route pour empoyer
const router=Router();
router.get("/getAllPersonnel",getAll);
router.get("/getOneEpmloye/:id",getOne);
router.post("/createPersonnel",createOne);
router.put("/updateEmployer/:id",putOne);
router.delete("/deleteEmployer/:id",deleteOne);

//route pour contrant
router.post("/employes/:employeId/contrats",addContratToEmploye);
router.get("/contrat/:id",getOneContrat);
router.get("/getAllcontrat",getAllContrat);

//poste
router.post("/createPoste",createPoste);
router.get("/getAllPoste",getAllPoste);

//payement
router.post("/createPayement/:id",createPayement);
router.get("/getAllPayment",getAllPayement)


//avance
router.post("/createAbsencePersonnel",createAbsence);
router.get("/getAllAbsence",getAllAbsence);


//absece
router.post("/createAvancePersonnel/:id",createAvance);
router.get("/getAllAvance",getAllAvance);



//conge
router.post("/createConge/:id",createConge);
router.get("/getAllConge",getAllConge);

//login
router.post("/login",getOneUser)
export default router;