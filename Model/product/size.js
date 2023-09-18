import mongoose from 'mongoose';

//種類
const SizeSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    slug:{
        type:String
    }
});


const Size = mongoose.model('Size', SizeSchema);

export default Size;    