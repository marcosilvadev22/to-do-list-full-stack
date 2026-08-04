import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.js';

class TasksModel extends Model {
    public user_id!: number;
    public id!: number;
    public title!: string;
    public description!: string; 
    public status!: boolean;
    public datelimited!: number;
}

TasksModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        datelimited: {
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

export default TasksModel;
