import {prisma} from "$lib/server/prisma";
import { fail } from "@sveltejs/kit";
import type { PageServerLoad ,Actions} from "./$types";

export const load: PageServerLoad=async()=>{
    const articles =await prisma.article.findMany();
    return { articles }
}


export const actions: Actions = {
   
    createArticle: async({request})=>{
        const {title, description}=Object.fromEntries(await request.formData()) as {
            title:string
            description: string
    }
    try{
        await prisma.article.create({
            data:{
                title,
                description,
            }
        })
    }
    catch(err){
    console.error(err)
    return fail(500,{message:"counldt create article"})
    }
    return{status:201}
},
delete: async({url})=>{
    const id =url.searchParams.get("id")
    // console.log(id)
    if(!id){
        return fail(400,{message:"Invalid request: no id"})
    }
    try{
        await prisma.article.delete({
            where:{
               id:Number(id)
            }
        })
    }
    catch(err){
        console.error(err)
        return fail(500,{message:"cant delete "})

    }
    return {
        status:200
    }
    
},

}

//  async function fun1(){
//     try{
//         await prisma.article.create({
//             data:{
//                 title:"To Do list",
//                 description:"Use actions to get data when clicked add article, Use articleId using sveltekit([folder])to delete article, update article"
//             }
//         })

//     }
//     catch(err){
//         console.log(err)
//     }
// }


// fun1()
// // async function delfun1(){
// //     try{
// //         await prisma.article.deleteMany({
// //             where:{
// //                 title:{
// //                     contains:"Article"
// //                 }
// //             }
// //         })
        
// //     }
// //     catch(err){
// //         console.log(err)
// //     }
// // }


// // delfun1()