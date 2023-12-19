import { Sequelize } from "sequelize";

export default new Sequelize('employe','root','',{
    dialect:'mysql',
    host:'localhost'
});
