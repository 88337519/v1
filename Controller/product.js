import Catfood from '../Model/product/cat/catfood.js';
import Dogfood from '../Model/product/dog/dogfood.js';
import Otherfood from '../Model/product/other/otherfood.js';
import Cathealth from '../Model/product/cat/cathealth.js';
import Doghealth from '../Model/product/dog/dogthealth.js';
import Otherhealth from '../Model/product/other/otherthealth.js';
import Cattoys from '../Model/product/cat/cattoys.js';
import Dogtoys from '../Model/product/dog/dogtoys.js';
import Othertoys from '../Model/product/other/othertoys.js';

export const GetProduct = (req,res) =>{
    res.render ('product/product.ejs');
}

export const GetShop = (req,res) =>{
    res.render ('product/shop/shop.ejs');
}

export const GetType = (req,res) =>{
    res.render ('product/type/type.ejs');
}

export const GetCat = (req,res) =>{
    res.render ('product/type/index/cat.ejs');
}

export const GetDog = (req,res) =>{
    res.render ('product/type/index/dog.ejs');
}

export const GetOther = (req,res) =>{
    res.render ('product/type/index/other.ejs');
}

// export const GetCatfood = async (req,res) =>{
//     const catfoods = [{
//         name: 'test',
//         createdAt: new Date(),
//         price: 'price'
//     }]
//     res.render ('product/type/index/cat/catfood',{catfood:catfoods});
// }

export const GetCatfood = async (req,res) =>{
    const catfoods = await Catfood.find().sort({ createdAt: 'desc'})
    res.render ('product/type/index/cat/catfood.ejs',{catfood:catfoods});
}

export const GetDogfood = async (req,res) =>{
    const dogfoods = await Dogfood.find().sort({ createdAt: 'desc'})
    res.render ('product/type/index/dog/dogfood.ejs',{dogfood:dogfoods});
}

export const GetOtherfood = async (req,res) =>{
    const otherfoods = await Otherfood.find().sort({ createdAt: 'desc'})
    res.render ('product/type/index/other/otherfood.ejs',{otherfood:otherfoods});
}

export const GetCathealth = async(req,res) =>{
    const cathealths = await Cathealth.find().sort({ createdAt: 'desc'})
    res.render ('product/type/index/cat/cathealth.ejs',{cathealth:cathealths});
}

export const GetDoghealth = async(req,res) =>{
    const doghealths = await Doghealth.find().sort({ createdAt: 'desc'})
    res.render ('product/type/index/dog/doghealth.ejs',{doghealth:doghealths});
}

export const GetOtherhealth = async(req,res) =>{
    const otherhealths = await Otherhealth.find().sort({ createdAt: 'desc'})
    res.render ('product/type/index/other/otherhealth.ejs',{otherhealth:otherhealths});
}

export const GetCattoys = async(req,res) =>{
    const cattoys = await Cattoys.find().sort({ createdAt: 'desc'})
    res.render ('product/type/index/cat/cattoys.ejs',{cattoy:cattoys});
}

export const GetDogtoys = async(req,res) =>{
    const dogtoys = await Dogtoys.find().sort({ createdAt: 'desc'})
    res.render ('product/type/index/dog/dogtoys.ejs',{dogtoy:dogtoys});
}

export const GetOthertoys = async(req,res) =>{
    const othertoys = await Othertoys.find().sort({ createdAt: 'desc'})
    res.render ('product/type/index/other/othertoys.ejs',{othertoy:othertoys});
}

export const PostShop = (req,res) =>{
    res.render ('product/shop/shop.ejs');
}

export const PostType = (req,res) =>{
    res.render ('product/type/type.ejs');
}

export const PostCat = (req,res) =>{
    res.render ('product/type/index/cat.ejs');
}

export const PostDog = (req,res) =>{
    res.render ('product/type/index/dog.ejs');
}

export const PostOther = (req,res) =>{
    res.render ('product/type/index/other.ejs');
}

export const PostCatfood = async(req,res) =>{
        const {name ,number ,price ,expday ,description } = req.body
    
    
        const newCatfood =  new Catfood({
            name: name,
            expday: expday,
            price : price,
            number: number,
            description: description
        })
    
        try{
            const saveCatfood = await newCatfood.save();
            console.log(saveCatfood);
            res.redirect(`/product/catfood/${newCatfood.id}`);
        }catch(error){
            console.log(error)
            res.render('product/type/index/detail/new/new_cfood.ejs',{catfood:newCatfood})
        }
    
}

export const PostDogfood = async(req,res) =>{
    const {name ,number ,price ,expday ,description } = req.body


    const newDogfood =  new Dogfood({
        name: name,
        expday: expday,
        price : price,
        number: number,
        description: description
    })

    try{
        const saveDogfood = await newDogfood.save();
        console.log(saveDogfood);
        res.redirect(`/product/dogfood/${newDogfood.id}`);
    }catch(error){
        console.log(error)
        res.render('product/type/index/detail/new/new_dfood.ejs',{dogfood:newDogfood})
    }

}

export const PostOtherfood = async(req,res) =>{
    const {name ,number ,price ,expday ,description } = req.body


    const newOtherfood =  new Otherfood({
        name: name,
        expday: expday,
        price : price,
        number: number,
        description: description
    })

    try{
        const saveOtherfood = await newOtherfood.save();
        console.log(saveOtherfood);
        res.redirect(`/product/otherfood/${newOtherfood.id}`);
    }catch(error){
        console.log(error)
        res.render('product/type/index/detail/new/new_ofood.ejs',{otherfood:newOtherfood})
    }

}

export const PostCathealth = async(req,res) =>{
    const {name ,number ,price ,expday ,description } = req.body


    const newCathealth =  new Cathealth({
        name: name,
        expday: expday,
        price : price,
        number: number,
        description: description
    })

    try{
        const saveCathealth = await newCathealth.save();
        console.log(saveCathealth);
        res.redirect(`/product/cathealth/${newCathealth.id}`);
    }catch(error){
        console.log(error)
        res.render('product/type/index/detail/new/new_cheal.ejs',{cathealth:newCathealth})
    }

}

export const PostDoghealth = async(req,res) =>{
    const {name ,number ,price ,expday ,description } = req.body

    const newDoghealth =  new Doghealth({
        name: name,
        expday: expday,
        price : price,
        number: number,
        description: description
    })

    try{
        const saveDoghealth = await newDoghealth.save();
        console.log(saveDoghealth);
        res.redirect(`/product/doghealth/${newDoghealth.id}`);
    }catch(error){
        console.log(error)
        res.render('product/type/index/detail/new/new_dheal.ejs',{doghealth:newDoghealth})
    }

}

export const PostOtherhealth = async(req,res) =>{
    const {name ,number ,price ,expday ,description } = req.body


    const newOtherhealth =  new Otherhealth({
        name: name,
        expday: expday,
        price : price,
        number: number,
        description: description
    })

    try{
        const saveOtherhealth = await newOtherhealth.save();
        console.log(saveOtherhealth);
        res.redirect(`/product/otherhealth/${newOtherhealth.id}`);
    }catch(error){
        console.log(error)
        res.render('product/type/index/detail/new/new_oheal.ejs',{otherhealth:newOtherhealth})
    }

}

export const PostCattoys = async(req,res) =>{
    const {name ,number ,price ,age ,size ,description} = req.body


    const newCattoys =  new Cattoys({
        name: name,
        age: age,
        size: size,
        price : price,
        number: number,
        description: description

    })

    try{
        const saveCattoys = await newCattoys.save();
        console.log(saveCattoys);
        res.redirect(`/product/cattoys/${newCattoys.id}`);
    }catch(error){
        console.log(error)
        res.render('product/type/index/detail/new/new_ctoy.ejs',{cattoy:newCattoys})
    }

}

export const PostDogtoys = async(req,res) =>{
    const {name ,number ,price ,age ,size ,description} = req.body


    const newDogtoys =  new Dogtoys({
        name: name,
        age: age,
        size: size,
        price : price,
        number: number,
        description: description
    })

    try{
        const saveDogtoys = await newDogtoys.save();
        console.log(saveDogtoys);
        res.redirect(`/product/dogtoys/${newDogtoys.id}`);
    }catch(e){
        console.log(e)
        res.render('product/type/index/detail/new/new_dtoy.ejs',{dogtoy:newDogtoys})
    }

}

export const PostOthertoys = async(req,res) =>{
    let {name ,number ,age ,price ,size ,description} = req.body


    let newOthertoys =  new Othertoys({
        name:name,
        age: age,
        size:size,
        price:price,
        number:number,
        description: description
        
    })

    try{
        newOthertoys = await newOthertoys.save();
        console.log(newOthertoys);
        res.redirect(`/othertoys/${newOthertoys.id}`);
    }catch(e){
        console.log(e)
        res.render('product/type/index/detail/new/new_otoy.ejs',{othertoy:newOthertoys})
    }

}


export const GetNew_cfood = (req,res) =>{
    res.render('product/type/index/detail/new/new_cfood.ejs',{catfood: new Catfood()})
}

export const GetNew_dfood = (req,res) =>{
    res.render('product/type/index/detail/new/snew_dfood.ejs',{dogfood: new Dogfood()})
}

export const GetNew_ofood = (req,res) =>{
    res.render('product/type/index/detail/new/new_ofood.ejs',{otherfood: new Otherfood()})
}


export const GetNew_cheal = (req,res) =>{
    res.render('product/type/index/detail/new/new_cheal.ejs',{cathealth: new Cathealth()})
}

export const GetNew_dheal = (req,res) =>{
    res.render('product/type/index/detail/new/new_dheal.ejs',{doghealth: new Doghealth()})
}

export const GetNew_oheal = (req,res) =>{
    res.render('product/type/index/detail/new/new_oheal.ejs',{otherhealth: new Otherhealth()})
}

export const GetNew_ctoy = (req,res) =>{
    res.render('product/type/index/detail/new/new_ctoy.ejs',{cattoy: new Cattoys()})
}

export const GetNew_dtoy = (req,res) =>{
    res.render('product/type/index/detail/new/new_dtoy.ejs',{dogtoy: new Dogtoys()})
}

export const GetNew_otoy = (req,res) =>{
    res.render('product/type/index/detail/new/new_otoy.ejs',{othertoy: new Othertoys()})
}

export const GetId_cfood = async(req,res) =>{
    const catfood = await Catfood.findById(req.params.id)
    if(catfood == null) res.redirect('/product/type')
    res.render("product/type/index/detail/show/show.ejs",{product : catfood})
}

export const GetId_dfood = async(req,res) =>{
    const dogfood = await Dogfood.findById(req.params.id)
    if(dogfood == null) res.redirect('/product/type')
    res.render("product/type/index/detail/show/show.ejs",{product : dogfood})
}

export const GetId_ofood = async(req,res) =>{
    const otherfood = await Otherfood.findById(req.params.id)
    if(otherfood == null) res.redirect('/product/type')
    res.render("product/type/index/detail/show/show.ejs",{product : otherfood})
}


export const GetId_cheal = async(req,res) =>{
    const cathealth = await Cathealth.findById(req.params.id)
    if(cathealth == null) res.redirect('/product/type')
    res.render("product/type/index/detail/show/show.ejs",{product : cathealth})
}

export const GetId_dheal = async(req,res) =>{
    const doghealth = await Doghealth.findById(req.params.id)
    if(doghealth == null) res.redirect('/product/type')
    res.render("product/type/index/detail/show/show.ejs",{product : doghealth})
}

export const GetId_oheal = async(req,res) =>{
    const otherhealth = await Otherhealth.findById(req.params.id)
    if(otherhealth == null) res.redirect('/product/type')
    res.render("product/type/index/detail/show/show.ejs",{product : otherhealth})
}

export const GetId_ctoy = async(req,res) =>{
    const cattoy = await Cattoys.findById(req.params.id)
    if(cattoy == null) res.redirect('/product/type')
    res.render("product/type/index/detail/show/show.ejs",{product : cattoy})
}

export const GetId_dtoy = async(req,res) =>{
    const dogtoy = await Dogtoys.findById(req.params.id)
    if(dogtoy == null) res.redirect('/product/type')
    res.render("product/type/index/detail/show/show.ejs",{product : dogtoy})
}

export const GetId_otoy = async(req,res) =>{
    const othertoy = await Othertoys.findById(req.params.id)
    if(othertoy == null) res.redirect('/product/type')
    res.render("product/type/index/detail/show/show.ejs",{product : othertoy})
}














// export const GetNew = (req,res) =>{
//     res.render('product/type/index/other/article/new.ejs',{article: new Othertoys()});
// }

// export const GetId = async(req,res) =>{
//     const article = await Othtoys.findById(req.params.id)
//     if (article == null) res.redirect('/product')   //更改url就跳轉
//     res.render('product/type/index/other/article/show.ejs', { article:Othtoys })   //展示這個保存id的內容
// }

// export const PostOthertoys = async(req,res) =>{
//     const {name, size, price, expday, number} = req.body;
//     let newOthertoys = new Othtoys({    //注意這裡使用let,const适用于在执行过程中保持不变的值,而let更适用于可变变量
//         name:name,
//         size:size,
//         price:price,
//         expday:expday,
//         number:number,
//     })
//     try{
//         newOthertoys = await newOthertoys.save()
//         // console.log(newArticle);
//         res.redirect(`product/type/index/other/${newOthertoys.id}`)     //保存成功展示這個文章id的內容
//     } catch(error) {
//         console.log(error)
//         res.render('product/type/index/other/article/new.ejs', { article:newOthertoys })
//     }
// }

// export const GetEdit = async(req,res) =>{
//     const EditOthertoys = await Othtoys.findById(req.params.id)
//     res.render('product/type/index/other/article/edit.ejs', { article:EditOthertoys});  //html：mongodb
// }

// export const DeleteOthertoys = async(req,res) =>{
//     await Othtoys.findByIdAndDelete(req.params.id)
//     res.redirect('/product')
// }