import 'dotenv/config';
import express from 'express';
import { sequelize, Usuario, TarefasModel } from './models/index-models.js'



const app = express();
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const port = process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3000;

async function startApp() {
    try {
        await sequelize.sync({ alter: true });
        // await sequelize.sync({ alter: true });
         console.log('Tabelas criadas/atualizadas com sucesso! ✨');
        app.listen(port, () => {
            console.log("🚀 Servidor rodando na porta " + port);
        })
    } catch (error) {
        console.log('❌ Erro ao iniciar o sistema:', error);
    }
}

startApp();