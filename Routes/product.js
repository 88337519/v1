import express from 'express';
const Routes = express.Router();

import {GetCategory,GetPets,GetProduct,GetOnePet} from '../Controller/product.js';


//Get
//寵物種類頁面
Routes.route('/category').get(GetCategory);

//寵物用品頁面
Routes.route('/pets').get(GetPets);

Routes.route('/:pets').get(GetOnePet);
//商品詳細頁面
Routes.route('/product').get(GetProduct);


export default Routes;