import mongoose from "mongoose";

const CattoysSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    size:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    age:{
        type: String,
        required: true
    }
    ,
    number:{
        type: Number,
        required: true
    }
    ,
    description:{
        type:String
    }
    ,
    createdAt:{
        type:Date,
        default:Date.now
    }
    ,
    1:{
        type: String,
        
    }

});

const Cattoys = mongoose.model('Cattoys',CattoysSchema)

export default Cattoys