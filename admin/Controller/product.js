import Product from "../../Model/product/admin/product.js";
import Category from "../../Model/product/admin/category.js";
import Pets from "../../Model/product/admin/pets_category.js";

//Get

export const GetA_Store = (req,res) =>{
    res.render('admin/store/A_store.ejs');
}

export const GetCategory = async (req,res) =>{
    const Get_Category = await Category.find().sort({createdAt:'-1'});
        res.render('admin/store/category/A_category.ejs', {category : Get_Category});
};

export const GetPets = async (req,res) =>{
    const Get_Pets = await Pets.find().sort({createdAt:'-1'});
    res.render('admin/store/pets/A_pets.ejs', {pet : Get_Pets});
};

export const GetProduct = async (req,res) =>{
    const Get_Product = await Product.find().sort({createdAt:'-1'});
    res.render('admin/store/product/A_product.ejs', {product : Get_Product});
};

export const GetNewCategory = (req,res) =>{
    res.render('admin/store/category/new_category.ejs', {category : new Category()});
};

export const GetEditCategory = async(req,res) =>{
    const EditCategory = await Category.findById(req.params.id)
    res.render('admin/store/category/edit_category.ejs', {category : EditCategory});
}

//Post
export const PostCategory = async (req,res) =>{
    const{title} = req.body;
    let newCategory = new Category({
        title:title,
    });
    try{
        newCategory = await newCategory.save()
        res.redirect('/admin/A_product/category');
    }catch(error){
        res.render('admin/store/A_category.ejs');
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
        res.redirect('/admin/A_product/pets');
    }catch(error){
        res.render('admin/store/A_pets.ejs');
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
        res.redirect('/admin/A_product/product');
    }catch(error){
        console.log(error)
        res.render('admin/store/A_product.ejs');
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
                res.redirect('/admin/A_product/category');
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
                res.redirect('/admin/A_product/pets');
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
                res.redirect('/admin/A_product/product');
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
    res.redirect('/admin/A_product/category');
}

export const DeletePets = async (req,res) =>{
    await Pets.findByIdAndDelete(req.params.id);
    res.redirect('/admin/A_product/pets');
}

export const DeleteProduct = async (req,res) =>{
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/admin/A_product/product');
}