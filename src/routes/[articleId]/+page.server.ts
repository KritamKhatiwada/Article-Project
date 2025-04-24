import {prisma} from "$lib/server/prisma";
import { error } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";
import type { PageServerLoad ,Actions} from "./$types";

export const load: PageServerLoad=async({params})=>{
    const article =await prisma.article.findUnique({
        where:{
            id:Number(params.articleId)
        }
    })
    if(!article){
        throw error(404,"article isnt found")
    }
    return {article}

}

export const actions: Actions = {
   
    edit: async({request,params})=>{
        const {title, description}=Object.fromEntries(await request.formData()) as {
            title:string
            description: string
    }
    try{
        await prisma.article.update({
            where:{
                id:Number(params.articleId)
            },
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
    return{status:201,
    message:"Article updated"
    }
}
}