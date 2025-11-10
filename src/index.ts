import { app } from './server';
import chalk from 'chalk';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.API_PORT || 3000;

app.listen(port, () => {
  console.log(chalk.italic.bold.cyan(`🚀 Servidor rodando em http://localhost:${port}`));
});
