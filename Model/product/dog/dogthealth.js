import mongoose from "mongoose";

const DoghealthSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
    ,
    number:{
        type: Number,
        required: true
    }
    ,
    price:{
        type: Number,
        required: true
    }
    ,
    expday:{
        type: String,
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

const Doghealth = mongoose.model('Doghealth',DoghealthSchema)

export default Doghealth