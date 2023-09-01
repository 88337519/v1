export const GetProduct = (req,res) =>{
    res.render ('product/product.ejs');
}

export const GetCat = (req,res) =>{
    res.render ('product/cat.ejs');
}

export const GetDog = (req,res) =>{
    res.render ('product/dog.ejs');
}

export const GetOther = (req,res) =>{
    res.render ('product/other.ejs');
}