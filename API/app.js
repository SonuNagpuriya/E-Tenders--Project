import express from 'express';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import cors from 'cors';

const app=express();

//to load router
import UserRouter from './routes/user.router.js';
import CategoryRouter from './routes/category.router.js';
import SubCategoryRouter from './routes/subcategory.router.js';
import productRouter from './routes/product.router.js';
import BidRouter from './routes/bid.router.js';

//configuration to fetch cross origin request
app.use(cors());

//configuration to handle file data
app.use(fileUpload());

//configuration to fetch req body content : body parser middleware
//used to fetch req data from methods like : POST , PUT , PATCH , DELETE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//route level middleware to load router
app.use('/user',UserRouter);
app.use('/category',CategoryRouter);
app.use('/subcategory',SubCategoryRouter);
app.use('/product',productRouter);
app.use("/bid",BidRouter);

app.listen(3001);
console.log("server invoked to link http://localhost:3001");
