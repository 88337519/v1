import User from '../Model/auth/user.js'
import bcrypt from 'bcryptjs'
import passport from 'passport';

export const GetLogin = (req,res) =>{
    res.render ('auth/login.ejs');
}

export const GetRegister = (req,res) =>{
    res.render ('auth/register.ejs');
}

export const GetSuccess = (req,res) =>{
    res.render('auth/success.ejs')
}

//Post
export const PostLogin = async (req,res,next) =>{
    passport.authenticate('local',{         //passport對象通過調用方法authenticate來對用戶身分進行認證
        successRedirect:'/',
        failureRedirect:'/user/login',
        failureFlash:true
    })(req,res,next);
}

export const PostRegitser = async(req,res) =>{
    const { name, email , username , password , password2 } = req.body;

    req.checkBody('name', 'Name is required!').notEmpty();
    req.checkBody('email', 'Email is required!').isEmail();
    req.checkBody('username', 'Username is required!').notEmpty();
    req.checkBody('password', 'Password is required!').notEmpty();
    req.checkBody('password2', 'Passwords do not match!').equals(password);

    let errors  =  req.validationErrors();

    if(errors){
        res.render('auth/register.ejs',{
            errors,errors,
            user:null,
        })
        console.log(req.body);
    }else{       //err往下
        User.findOne({username:username}, (err,user)=>{
            if(err);
                console.log(err);
            if(user){
                req.flash('用戶名已重複');
                res.redirect('/user/register');
            }else{
                bcrypt.genSalt(10,function(err,salt){
                    bcrypt.hash(password, salt, (err,hash)=>{
                        if(err) return console.log(err);

                        const user = new User({
                            name:name,
                            email:email,
                            username:username,
                            password:hash,
                            admin:0
                        });

                        user.save((err)=>{
                            if(err){
                                console.log(err);
                            }else{
                                req.flash('註冊成功！');
                                res.redirect('/user/login')
                            }
                        })
                    })
                })
            }
        })
    }
}

export const GetLogout = (req,res)=>{
    req.logOut(function(err) {
        if(err) return next(err);
        res.redirect('/'); 
    })
}