import express from 'express';
import { json } from 'body-parser';
import 'express-async-errors';
import { errorHandler } from './middlewares/error-handler';
import { currentUserRouter } from './routes/current-user';{}
import { SignInRouter } from './routes/signin';
import { SignUpRouter } from './routes/signup';
import { SignOutRouter } from './routes/signout';
import { NotFoudError } from './errors/not-found-error';
import mongoose from 'mongoose';


const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(SignInRouter);
app.use(SignUpRouter);
app.use(SignOutRouter);

app.all('*', async (req, res) => { 
  throw new NotFoudError;
})

app.use(errorHandler)


const connection = async () => {
  try {

    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');

  } catch(err){
      console.log(err);
  }
   
  app.listen(3000, () => {
    console.log("Auth listening on port 3000"); 
  })
};

connection();