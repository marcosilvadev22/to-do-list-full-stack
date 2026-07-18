import sequelize from "../config/db.js";
import TarefasModel from "./tarefas-model.js";
import Usuario from "./usuario-model.js";


Usuario.hasMany(TarefasModel, {
    foreignKey: 'userId',
    onDelete:  'CASCADE'
})
TarefasModel.belongsTo(Usuario, {
    foreignKey: 'userId',
})

export {sequelize, Usuario, TarefasModel}