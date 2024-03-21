import { Express } from 'express';
import mongooseConnect from '../databases/mongodb/mongodb';
import typeORMConnect from '../databases/postgresql/typeorm';

const appSetup = async (app: Express) => {
  try {
    // set database connections
    await Promise.all([
      typeORMConnect(),
      mongooseConnect()
    ])

    console.log('Databases connected successfully!');
    const APP_PORT = 3000;

    app.listen(APP_PORT, () => {
      console.log(`Server started on port ${APP_PORT}`);
    });
  } catch (error) {
    console.log('Unable to start the app!');
    console.error(error);
  }
};

export default appSetup;
