import express from 'express';
import { json } from 'body-parser';
import 'express-async-errors';
import { errorHandler } from './middlewares/error-handler';
import { currentUserRouter } from './routes/current-user';
import { SignInRouter } from './routes/signin';
import { SignUpRouter } from './routes/signup';
import { SignOutRouter } from './routes/signout';
import { NotFoudError } from './errors/not-found-error';
import cookieSession from 'cookie-session';


const app = express();
app.set('trust proxy', true)
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: true
    })
);

app.use(currentUserRouter);
app.use(SignInRouter);
app.use(SignUpRouter);
app.use(SignOutRouter);

app.all('*', async (req, res) => { 
  throw new NotFoudError;
})

app.use(errorHandler)

export { app };