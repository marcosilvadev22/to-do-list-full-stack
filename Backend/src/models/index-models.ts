import sequelize from "../config/db.js";
import TarefasModel from "./tarefas-model.js";
import Usuario from "./usuario-model.js";


Usuario.hasMany(TarefasModel, {
    foreignKey: 'usuario_id',
    onDelete:  'CASCADE'
})
TarefasModel.belongsTo(Usuario, {
    foreignKey: 'usuario_id',
})

export {sequelize, Usuario, TarefasModel}