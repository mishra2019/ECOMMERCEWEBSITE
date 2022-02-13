import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import DefaultData from './default.js';
import bodyParser  from 'body-parser';
import Routes from './routes/routes.js';
import cors from 'cors';
import { v4 as uuid } from 'uuid';
const app=express();
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors()); 
app.use('/',Routes);
dotenv.config();
const PORT=process.env.PORT || 8000;
const userName=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
const URL=`mongodb+srv://${userName}:${password}@ecommerceweb.rfiam.mongodb.net/ECOMMERCE?retryWrites=true&w=majority`

Connection(process.env.MONGODB_URI || URL);

if(process.env.NODE_ENV ==='production'){
    app.use(express.static('client/build'))
}

app.listen(PORT,()=> console.log(`server is running successfullyon portt ${PORT}`));
// default data to database
DefaultData();


export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID'] = uuid();
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT'] = '100';
paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback';
paytmParams['EMAIL'] = 'mroshanmishra0072@gmail.com'; 
paytmParams['MOBILE_NO'] = '8420070594'