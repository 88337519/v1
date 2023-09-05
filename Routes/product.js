import express from "express"
import { GetProduct, GetCat, GetDog, GetOther, GetType, GetShop, GetCatfood, GetDogfood, GetOtherfood, GetCathealth, GetDoghealth, GetOtherhealth, GetCattoys, GetDogtoys, GetOthertoys   } from '../Controller/product.js';
import { PostCatfood, PostDogfood, PostOtherfood, PostCathealth, PostDoghealth, PostOtherhealth, PostCattoys, PostDogtoys, PostOthertoys  } from '../Controller/product.js';
import { GetNew_cfood, GetNew_dfood, GetNew_ofood, GetNew_cheal, GetNew_dheal, GetNew_oheal, GetNew_ctoy, GetNew_dtoy, GetNew_otoy } from "../Controller/product.js";
import { GetId_cfood, GetId_dfood, GetId_ofood, GetId_cheal, GetId_dheal, GetId_oheal, GetId_ctoy, GetId_dtoy, GetId_otoy } from "../Controller/product.js";


const Routes = express.Router();

Routes.route('/').get(GetProduct);
Routes.route('/cat').get(GetCat);
Routes.route('/dog').get(GetDog);
Routes.route('/other').get(GetOther);
Routes.route('/type').get(GetType);
Routes.route('/shop').get(GetShop);
Routes.route('/catfood').get(GetCatfood).post(PostCatfood);
Routes.route('/dogfood').get(GetDogfood).post(PostDogfood);
Routes.route('/otherfood').get(GetOtherfood).post(PostOtherfood);
Routes.route('/cathealth').get(GetCathealth).post(PostCathealth);
Routes.route('/doghealth').get(GetDoghealth).post(PostDoghealth);
Routes.route('/otherhealth').get(GetOtherhealth).post(PostOtherhealth);
Routes.route('/cattoys').get(GetCattoys).post(PostCattoys);
Routes.route('/dogtoys').get(GetDogtoys).post(PostDogtoys);
Routes.route('/othertoys').get(GetOthertoys).post(PostOthertoys);

Routes.route('/new_cfood').get(GetNew_cfood);
Routes.route('/new_dfood').get(GetNew_dfood);
Routes.route('/new_ofood').get(GetNew_ofood);
Routes.route('/new_cheal').get(GetNew_cheal);
Routes.route('/new_dheal').get(GetNew_dheal);
Routes.route('/new_oheal').get(GetNew_oheal);
Routes.route('/new_ctoy').get(GetNew_ctoy);
Routes.route('/new_dtoy').get(GetNew_dtoy);
Routes.route('/new_otoy').get(GetNew_otoy);

Routes.route('/catfood/:id').get(GetId_cfood);
Routes.route('/dogfood/:id').get(GetId_dfood);
Routes.route('/otherfood/:id').get(GetId_ofood);
Routes.route('/cathealth/:id').get(GetId_cheal);
Routes.route('/doghealth/:id').get(GetId_dheal);
Routes.route('/otherhealth/:id').get(GetId_oheal);
Routes.route('/cattoys/:id').get(GetId_ctoy);
Routes.route('/dogtoys/:id').get(GetId_dtoy);
Routes.route('/othertoys/:id').get(GetId_otoy);


export default Routes