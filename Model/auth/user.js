import mongoose from 'mongoose';

//用戶
const UserSchema = new mongoose.Schema({
    //名字
    name:{
        type:String,
        required:true,  //必須填寫該字段
    },
    //郵箱
    email: {
        type: String,
    },
    //用戶ID
    username:{
        type:String,
        required: true,
    },
    //密碼
    password:{
        type:String,
    },
    //admin權限等級 0普通 1商家 2管理員
    admin:{
        type:Number,
    }
});

const User = mongoose.model('User', UserSchema);   //collection >DB名 自動小寫+s

export default User;