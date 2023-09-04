import express from 'express';
const Routes = express.Router();


import { GetA_Blog,GetNew,PostArticle,GetId,DeleteArticle,GetEdit,EditArticle } from '../Controller/blog.js';

//文章列表頁面
Routes.route('/A_blog').get(GetA_Blog);
//創建文章頁面
Routes.route('/A_blog/new').get(GetNew);
//創建文章fuction
Routes.route('/A_blog').post(PostArticle);
//查看ID文章的內容
Routes.route('/A_blog/:id').get(GetId);
//刪除文章fuction
Routes.route('A_blog/:id').delete(DeleteArticle);
//渲染修改文章頁面
Routes.route('A_blog/edit/:id').get(GetEdit);
//修改文章的fuction
Routes.route('A_blog/:id').put(EditArticle);

export default Routes;