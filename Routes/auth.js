import express from 'express';
const Routes = express.Router();

import { GetLogin, GetRegister,PostRegitser,PostLogin,GetSuccess,GetLogout } from '../Controller/auth.js';

Routes.route('/login').get(GetLogin);
Routes.route('/register').get(GetRegister);
Routes.route('/register').post(PostRegitser);
Routes.route('/login').post(PostLogin);
Routes.route('/success').get(GetSuccess);
Routes.route('/logout').get(GetLogout);

export default Routes;