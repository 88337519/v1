import mongoose from "mongoose";

const DogtoysSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
    ,
    size:{
        type: String,
        required: true
    }
    ,
    price:{
        type: Number,
        required: true
    }
    ,
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

const Dogtoys = mongoose.model('Dogtoys',DogtoysSchema)

export default Dogtoys