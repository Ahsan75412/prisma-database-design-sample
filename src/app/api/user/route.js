import {NextResponse} from "next/server";
import { PrismaClient } from "@prisma/client";


//****insert one request********



// export async function POST (req , res){

//        try{
//         const prisma = new PrismaClient();

//         //j from data post man a create korechi seti dhorte gele :

//        let reqBody = await req.json()

//         //this users from database my sql migration
//         let result = await prisma.users.create({
//             data:reqBody
//         })

//         return NextResponse.json({status:'success' , data:result})

//        }catch(e){
//         return NextResponse.json({status:'fail' , data:e})

//        }
// }







//****insert Many request********



export async function POST (req , res){

       try{
        const prisma = new PrismaClient();

        //j from data post man a create korechi seti dhorte gele :

       let reqBody = await req.json()

        //this users from database my sql migration using create many function
        let result = await prisma.users.createMany({
            data:reqBody
        })

        return NextResponse.json({status:'success' , data:result})

       }catch(e){
        return NextResponse.json({status:'fail' , data:e})

       }
}




