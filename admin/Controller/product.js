import Product from "../../Model/product/product.js";
import Category from "../../Model/product/category.js";
import Pets from "../../Model/product/pets_category.js";

//Get

export const GetCategory = (req,res) =>{
    res.render('admin/A_category.ejs');
};

export const GetPets = (req,res) =>{
    res.render('admin/A_pets.ejs');
};

export const GetProduct = (req,res) =>{
    res.render('admin/A_product.ejs');
};

//Post
export const PostCategory = async (req,res) =>{
    const{title} = req.body;
    let newCategory = new Category({
        title:title,
    });
    try{
        newCategory = await newCategory.save()
        res.redirect('/admin/category');
    }catch(error){
        res.render('admin/A_category.ejs');
    }
    console.log(newCategory);
};

export const PostPets = async (req,res) =>{
    //const {title,category} = req.body;
    const title = req.body;
    const category = await Pets.findById(req.params.category);
    let newPets = new Pets({
        title:title,
        category:category,
    });
    try{
        newPets = await newPets.save();
        res.redirect('/admin/pets');
    }catch(error){
        res.render('admin/A_pets.ejs');
    }
    console.log(newPets);
};

export const PostProduct = async (req,res) =>{
    const {category,title,price,date,stock,size} = req.body;
    let newProduct = new Product({
        category:category,
        title:title,
        price:price,
        date:date,
        stock:stock,
        size:size,
    });
    try{
        newProduct = await newProduct.save()
        res.redirect('/admin/product');
    }catch(error){
        console.log(error)
        res.render('admin/A_product.ejs');
    }
    console.log(newProduct);
};

//Put
export const EditCategory = async (req,res) =>{
    const updateCategory = await Category.findByIdAndUpdate(req.params.id)
    .then((data)=>{
        const {title} = req.body;
        
        data.title = title;

        try{
            data.save().then(()=>{
                res.redirect('/admin/category');
            })
        }catch(error){
            res.redirect('/admin');
            console.log(error);
        }
        console.log(data);
    })
};

export const EditPets = async (req,res) =>{
    const updatePets = await Pets.findByIdAndUpdate(req.params.id)
    .then((data)=>{
        const {title,category} = req.body;
        
        data.title = title;
        data.category = category;

        try{
            data.save().then(()=>{
                res.redirect('/admin/pets');
            })
        }catch(error){
            res.redirect('/admin');
            console.log(error);
        }
        console.log(data);
    })
}

export const EditProduct = async (req,res) =>{
    const updateProduct = await Product.findByIdAndUpdate(req.params.id)
    .then((data)=>{
        const {category,title,price,date,stock,size} = req.body;
        data.category = category;
        data.title = title;
        data.price = price;
        data.date = date;
        data.stock = stock;
        data.size = size;

        try{
            data.save().then(()=>{
                res.redirect('/admin/product');
            })
        }catch(error){
            res.redirect('/admin');
            console.log(error);
        }
        console.log(data);
    })
}

//Delete
export const DeleteCategory = async (req,res) =>{
    await Category.findByIdAndDelete(req.params.id);
    res.redirect('/admin/category');
}

export const DeletePets = async (req,res) =>{
    await Pets.findByIdAndDelete(req.params.id);
    res.redirect('/admin/pets');
}

export const DeleteProduct = async (req,res) =>{
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/admin/product');
}