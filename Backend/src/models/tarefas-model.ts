import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.js';

class TarefasModel extends Model {
    public usuario_id!: number;
    public id!: number;
    public titulo!: string;
    public descricao!: string; 
    public concluida!: boolean;
    public dataLimite!: number;
}

TarefasModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false
        },
        concluida: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        dataLimite: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Usuarios',
                key: 'id'
            }
        }

    },
    {
        sequelize,
        modelName: 'Tarefas',
    }
)

export default TarefasModel;
