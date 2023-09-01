import Article from '../Model/blog/blog.js';

export const GetBlog = async (req, res) =>{
    const GetArticle = await Article.find().sort({createdAt:'desc'}); //降序：新文章一直在頂部 
    res.render('blog/blog.ejs', { article: GetArticle });  //html：mongodb -->ejs ForEach
}

export const GetNew = (req,res) =>{
    res.render('blog/article/new.ejs',{article: new Article()});
}

export const GetId = async(req,res) =>{
    const article = await Article.findById(req.params.id);
    if (article == null) res.redirect('/blog');   //更改url就跳轉
    res.render('blog/article/show.ejs', { article:article });   //展示這個保存id的內容
}

export const PostArticle = async(req,res) =>{
    const {title, description, markdown} = req.body;
    let newArticle = new Article({    //注意這裡使用let,const适用于在执行过程中保持不变的值,而let更适用于可变变量
        title:title,
        description:description,
        markdown:markdown
    })
    try{
        newArticle = await newArticle.save();
        res.redirect(`/blog/${newArticle.id}`);     //保存成功展示這個文章id的內容
    } catch(error) {
        console.log(error)
        res.render('blog/article/new.ejs');
    }
    console.log(newArticle);
}

export const GetEdit = async(req,res) =>{
    const EditArticle = await Article.findById(req.params.id)
    res.render('blog/article/edit.ejs', {article:EditArticle});  //html：mongodb
}

export const EditArticle = async(req,res) =>{
    const update = await Article.findByIdAndUpdate(req.params.id)
     .then((data) =>{
    const {title, description, markdown} = req.body;
    console.log(req.body);
    
    data.title = title;
    data.description = description;
    data.markdown = markdown;
    
    try{
        data.save().then(()=>{
            res.redirect('/blog')
        })
    }catch(error){
        res.render('blog/edit.ejs')
        console.log(error)
    }
 })
    console.log(updata)
}

export const DeleteArticle = async(req,res) =>{
    await Article.findByIdAndDelete(req.params.id)
    res.redirect('/blog')
}
//創造一個middleware
// function saveArticleAndRedirect(path) {
//     return async(req,res) =>{
//         const {title, description, markdown} = req.body;
//         let article = req.article;
//         article.title = title;
//         article.description = description;
//         article.markdown = markdown;
//         try{
//             article = await article.save()
//             res.redirect(`/blog/${article.id}`)
//         }catch{
//             res.render(`blog/${path}`,{article:article})
//         }
//     }
// }