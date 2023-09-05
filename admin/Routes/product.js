import express from 'express';
const Routes = express.Router();

import {GetA_Store,GetCategory,GetPets,GetProduct,GetNewCategory,GetEditCategory,
        PostCategory,PostPets,PostProduct,
        EditCategory,EditPets,EditProduct,
        DeleteCategory,DeletePets,DeleteProduct} from '../Controller/product.js';


//Get

//管理商店頁面
Routes.route('/A_stroe').get(GetA_Store);
//管理種類頁面
Routes.route('/category').get(GetCategory);
//管理寵物品種頁面
Routes.route('/pets').get(GetPets);
//管理商品頁面
Routes.route('/product').get(GetProduct);

//創建頁面
Routes.route('/new_category').get(GetNewCategory);

//修改頁面
Routes.route('/category/:id').get(GetEditCategory);

//Post function
//創建產品種類
Routes.route('/category').post(PostCategory);
//創建寵物品種
Routes.route('/pets').post(PostPets);
//創建商品
Routes.route('/product').post(PostProduct);

//Put function
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