import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.js';

class Usuario extends Model {
    public id!: number;
    public nome!: string;
    public email!: string;
    public senha!: string;
    // public xp!: number;
    // public nivel!: number;
    // public hp!: number;
}

Usuario.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },    
        senha: {
            type: DataTypes.STRING(255),
            allowNull: false
        },    
        // xp: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     defaultValue: 0
        // },
        // nivel: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     defaultValue: 1
        // },
        // hp: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     defaultValue: 100
        // }
    },
    {
        sequelize,
        modelName: 'Usuario'
    }
)

export default Usuario