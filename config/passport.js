import { Strategy as LocalStrategy } from 'passport-local';
import User from '../Model/auth/user.js';
import bcrypt from 'bcryptjs';
import passport from 'passport';



export default function(passport){
    passport.use(new LocalStrategy(function(username, password, done){
        User.findOne({username:username},function(err,user){
            if(err)
            console.log(err);
            if(!user){
                return done(null, false, {message:'沒有該用戶！'});
            }
            bcrypt.compare(password, user.password,function(err,isMatch){
            if(err)
            console.log(err);
            if(isMatch){
                return done(null, user);
            } else{
                return done(null, false, {message:'密碼錯誤！'});  
            }
            })
        })
    }))
}

passport.serializeUser(function(user,done){
    done(null, user.id)
});

passport.deserializeUser(function(id, done){
    User.findById(id,function(err,user){
        done(err, user);
    })
})