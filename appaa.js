// server.js

//const express = require('express');
import express from 'express'
//const bodyParser = require('body-parser');
import bodyParser from 'body-parser';
import cors from 'cors'
//const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

let personnelData = []; // Pour stocker les données envoyées depuis Angular

app.post('/createPersonnel', (req, res) => {
  const newData = req.body; // Les données envoyées depuis Angular
  personnelData.push(newData); // Stocker les données
  console.log(newData);

  res.status(201).json({message:"salyt"}); // Répondre avec les données stockées
});

app.listen(port, () => {
  console.log(`Le serveur Node.js est en cours d'exécution sur le port ${port}`);
});
