import express from 'express';
import { json } from 'body-parser';

import { currentUserRouter } from './routes/current-user';{}
import { SignInRouter } from './routes/signin';
import { SignUpRouter } from './routes/signup';
import { SignOutRouter } from './routes/signout';

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(SignInRouter);
app.use(SignUpRouter);
app.use(SignOutRouter);



app.listen(3000, () => {
    console.log("Auth listening on port 3000"); 
})