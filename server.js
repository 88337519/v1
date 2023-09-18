import express from 'express';
import methodeOverride from 'method-override';
import mongoose from 'mongoose';
import flash from 'connect-flash';
import bodyParser from 'body-parser';
import passport from 'passport';
// import { Strategy as LocalStrategy } from 'passport-local';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from 'url';
import expressValidator from 'express-validator';
import messages from 'express-messages';



//init app
const app = express();

//連結mongoose
mongoose.connect('mongodb://localhost:27017/GuanDB',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true},
    console.log("connect to mongodb"))        //端口/blog目錄名

//setup path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Template engine
app.set("view engine","ejs");
app.set('views',path.join(__dirname,'views'));

//set global errors variable
app.locals.errors = null;

//body-parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//session Middleware
app.use(session({
    secret:'keyboard cat',
    resave:true,
    saveUninitialized:true,
}));
//express validator middleware
app.use(expressValidator({
    errorFormatter: function (param, msg, value) {
        var namespace = param.split('.')
                , root = namespace.shift()
                , formParam = root;

        while (namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        };
    }
}));

//Massages Middleware
app.use(flash());
app.use(function(req,res,next){
    res.locals.messages = messages(req,res);
    next();
})
//passport Config
import passportConfig from './config/passport.js';
passportConfig(passport);

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('*',function(req,res,next){
    res.locals.user = req.user || null;
    next();
})

// //建立Verify Callback 建立認證機制
// passport.serializeUser(function(user, done){
//     done(null, user);
// })
// passport.deserializeUser(function(user, done){
//     done(null, user);
// })    


//Middleware
// app.use(express.json());
// app.use(methodeOverride("_method"));
// app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));


//Routes
import IndexRoutes from './Routes/index.js';
import ProductRoutes from './Routes/product.js';
import ServiceRoutes from './Routes/service.js';
import CourseRoutes from './Routes/course.js';
import BlogRoutes from './Routes/blog.js';
import AboutRoutes from './Routes/about.js';
import UserRoutes from './Routes/auth.js';
import AdminRoutes from './admin/Routes/admin.js';
import AdminBlog from './admin/Routes/blog.js';
import AdminProduct from './admin/Routes/product.js'

//主頁
app.use('/', IndexRoutes);
//產品
app.use('/product', ProductRoutes);
//服務種類
app.use('/service', ServiceRoutes);
//課程
app.use('/course', CourseRoutes);
//Blog活動
app.use('/blog', BlogRoutes);
//關於我們
app.use('/about', AboutRoutes);
//登入註冊
app.use('/user', UserRoutes);
//管理員
app.use('/admin',AdminRoutes);
app.use('/admin/A_blog',AdminBlog);
app.use('/admin/A_product',AdminProduct);


//port
app.listen(3000, ()=>{
    console.log("server is running")
})