import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import createPath from './common/createPath';

dotenv.config();

const app = express();

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});

app.set('view engine', 'ejs');

app.use((req: Request, res: Response) => {
  res.status(404).render(createPath('error'), { title: 'Error' });
});
