
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

export const app: Express = express();
export const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('OJ 1234');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

console.log(process.env)
