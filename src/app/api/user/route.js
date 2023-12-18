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



// export async function POST (req , res){

//        try{
//         const prisma = new PrismaClient();

//         //j from data post man a create korechi seti dhorte gele :

//        let reqBody = await req.json()

//         //this users from database my sql migration using create many function
//         let result = await prisma.users.createMany({
//             data:reqBody
//         })

//         return NextResponse.json({status:'success' , data:result})

//        }catch(e){
//         return NextResponse.json({status:'fail' , data:e})

//        }
// }







//***********Delete a data***********




// export async function POST (req , res){

//        try{
//         const prisma = new PrismaClient();

//         //j from data post man a create korechi seti dhorte gele :

//        let reqBody = await req.json()

//         //this users from database my sql migration deleted data using in where and delete func()
//         let result = await prisma.users.delete({
//             where:reqBody
//         })

//         return NextResponse.json({status:'success' , data:result})

//        }catch(e){
//         return NextResponse.json({status:'fail' , data:e})

//        }
// }





//***********Update a data***********




// export async function POST (req , res){

//        try{
//         const prisma = new PrismaClient();

//         //j from data post man a create korechi seti dhorte gele :

//        let reqBody = await req.json()

//         //this users from database my sql migration deleted data using in where and update func()
//         //ekhn er bisoy 2 ta , akta holo ami kothai update korbo orthat where and kon data update korbo data:{}
//         let result = await prisma.users.update({
//             where:{id:reqBody['id']},
//             data:{firstName:reqBody['firstName']}
//         })

//         return NextResponse.json({status:'success' , data:result})

//        }catch(e){
//         return NextResponse.json({status:'fail' , data:e})

//        }
// }



//****Get Data to find from db********* */


// export async function GET (req , res){

//        try{
//         const prisma = new PrismaClient();

//      // find many korle db te joto data ache sob gulo niye dekhabe


//         // let result = await prisma.users.findMany()

//         // ekhn jodi kono nirdisto data dhorte jai tahole:
//         let result = await prisma.users.findMany({
//             where:{id:10}, 
//             select:{mobile:true}
//         })

//         return NextResponse.json({status:'success' , data:result})

//        }catch(e){
//         return NextResponse.json({status:'fail' , data:e})

//        }
// }







//****Get Data to find unique from db********* */



// jkhn 1 ta k find korte chai tkhn unique use korte parbo

// export async function GET (req , res){

//        try{
//         const prisma = new PrismaClient();

//      // find many korle db te joto data ache sob gulo niye dekhabe


//         // let result = await prisma.users.findMany()

//         // ekhn jodi kono nirdisto data dhorte jai tahole:
//         let result = await prisma.users.findUnique({
//             where:{id:10}, 
        
//         })

//         return NextResponse.json({status:'success' , data:result})

//        }catch(e){
//         return NextResponse.json({status:'fail' , data:e})

//        }
// }







//****Get Data to find order by from db********* */

// export async function GET (req , res){

//        try{
//         const prisma = new PrismaClient();

//         let result = await prisma.users.findMany({
//             // orderBy:{id:'asc'}, 
//             orderBy:{id:'desc'}, 
        
//         })

//         return NextResponse.json({status:'success' , data:result})

//        }catch(e){
//         return NextResponse.json({status:'fail' , data:e})

//        }
// }



//********Find First and Last */


// export async function GET (req , res){

//     try{
//      const prisma = new PrismaClient();

//      // for find first data from db
//     //  let result = await prisma.users.findFirst()


//     //find last data from db
//      let result = await prisma.users.findMany({
//         orderBy:{id:'desc'},
//         take:1
//      })

//      return NextResponse.json({status:'success' , data:result})

//     }catch(e){
//      return NextResponse.json({status:'fail' , data:e})

//     }
// }



//********Take and skip */


export async function GET (req , res){

    try{
     const prisma = new PrismaClient();

     // for find first data from db
    //  let result = await prisma.users.findFirst()


    //find last data from db
     let result = await prisma.users.findMany({
        skip:1,
        take:2
     })

     return NextResponse.json({status:'success' , data:result})

    }catch(e){
     return NextResponse.json({status:'fail' , data:e})

    }
}