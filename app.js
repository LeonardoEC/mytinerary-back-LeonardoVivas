import 'dotenv/config.js'
import './config/db.js'

import express, { urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRouter from './router/index.router.js';

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json())
app.use(cors());
app.use(morgan('dev'));
app.use(urlencoded({extended: false}))

app.use('/api', indexRouter)

app.listen(PORT, () => console.log('Server running on port:' + PORT))