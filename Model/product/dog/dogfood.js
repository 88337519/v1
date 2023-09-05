import mongoose from "mongoose";

const DogfoodSchema = new mongoose.Schema({
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
        type: Date,
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

const Dogfood = mongoose.model('Dogfood',DogfoodSchema)

export default Dogfood