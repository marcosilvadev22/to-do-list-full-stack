import { Sequelize } from "sequelize";


const dbPort = process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432;
const sequelize = new Sequelize(

  process.env.DB_DATABASE!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,

  {
    host: process.env.DB_HOST!,
    port: dbPort,
    dialect: 'postgres'
  }
)

async function testConnection() {
  try {
    console.log('🔄 Tentando conectar ao banco de dados...');
    await sequelize.authenticate();
    console.log('✅ Conexão com o postgreSQL estabelecida com sucesso!');
  } catch (error) {
    console.error('❌ Não foi possível conectar ao banco de dados:', error);
  }
}

testConnection()

export default sequelize;


