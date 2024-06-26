import { Express, Request, Response } from 'express';
import mongooseUsersRouter from '../controllers/mongoose/user.controller';
import typeormProductsRouter from '../controllers/typeorm/product.controller';

const routerSetup = (app: Express) =>
  app

  .get('/', async (req: Request, res: Response) => {
    res.send('Hello Express APIvantage!');
  })
  .use('/api/v1/mongoose/users', mongooseUsersRouter)
  .use('/api/v1/typeorm/products', typeormProductsRouter);

export default routerSetup;