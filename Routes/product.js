import express from 'express';
const Routes = express.Router();

import { GetProduct, GetCat, GetDog, GetOther } from '../Controller/product.js';

Routes.route('/').get(GetProduct);
Routes.route('/cat').get(GetCat);
Routes.route('/dog').get(GetDog);
Routes.route('/other').get(GetOther);

export default Routes;