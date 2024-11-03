import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { registerValidation, loginValidation } from './validation.js';
import checkAuth from './utils/checkAuth.js';
import { userController } from './controllers/index.js';
import handleValidErrors from './utils/handleValidErrors.js';


mongoose.connect(
    'mongodb+srv://Admin:Admin@cluster0.hb3nl.mongodb.net/')
    .then(() => console.log('DB ok '))
    .catch((err) => console.log('DB error', err));


const app = express();

app.use(express.json());
app.use(cors());


app.post('/auth/login', loginValidation, handleValidErrors, userController.login)
app.post('/auth/register', registerValidation, handleValidErrors, userController.register)
app.get('/profile', checkAuth, userController.profile);


app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server ok')
});