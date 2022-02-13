import express  from "express";
import { addPaytmGateway, paymentResponse } from "../controller/paytm-controller.js";
import { getProducts , getProductById } from "../controller/product-controller.js";
import { userLogin, userSignup } from "../controller/user-controller.js";
const router=express.Router();

router.post('/signup',userSignup);
router.post('/login',userLogin);

router.get('/products',getProducts);
router.get('/product/:id',getProductById);

router.post('/paytm',addPaytmGateway);
router.post('/callback',paymentResponse)
export default router;
