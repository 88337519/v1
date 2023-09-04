import express from 'express';
const Routes = express.Router();

import {GetCategory,GetPets,GetProduct,
        PostCategory,PostPets,PostProduct,
        EditCategory,EditPets,EditProduct,
        DeleteCategory,DeletePets,DeleteProduct} from '../Controller/admin/admin.js'


//Get

//創建種類頁面
Routes.route('/category').get(GetCategory);
//創建寵物品種頁面
Routes.route('/pets').get(GetPets);
//創建商品頁面
Routes.route('/product').get(GetProduct);


//Post
//創建產品種類
Routes.route('/category').post(PostCategory);
//創建寵物品種
Routes.route('/pets').post(PostPets);
//創建商品
Routes.route('/product').post(PostProduct);

//Put
//修改產品種類
Routes.route('/category/:id').put(EditCategory);
//修改寵物品種
Routes.route('/pets/:id').put(EditPets);
//修改商品
Routes.route('/product/:id').put(EditProduct);

//Delete
//刪除產品種類
Routes.route('/category/:id').delete(DeleteCategory);
Routes.route('/pets/:id').delete(DeletePets);
Routes.route('/product/:id').delete(DeleteProduct);

export default Routes;