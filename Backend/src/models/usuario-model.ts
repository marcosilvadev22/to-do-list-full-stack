import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.js';

class Usuario extends Model {
    public id!: number;
    public nome!: string;
    public email!: string;
    public senha!: string;
}

Usuario.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
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
    },
    {
        sequelize,
        modelName: 'Usuario'
    }
)

export default Usuario