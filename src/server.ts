import express from 'express';
import { pool } from './config/database';
import { router } from './router';

export const app = express();

app.use(express.json());
app.use(router);

(async () => {
  try {
    await pool.query('SELECT NOW()');
    console.log('✅ Conexão com PostgreSQL estabelecida!');
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco:', error);
  }
})();
