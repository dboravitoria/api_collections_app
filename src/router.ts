import { Router } from 'express';
import { pool } from './config/database';
import collectionsRoutes from "./routes/collectionsRoutes"

const router = Router();

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ message: 'Conexão com PostgreSQL funcionando!', time: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao conectar com o banco' });
  }
});
router.use("/collections", collectionsRoutes)


export { router };
