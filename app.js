const express = require('express')
const {PrismaClient, Prisma} = require('@prisma/client')
const e = require('express')

const prisma = new PrismaClient()
const app = express()

//development
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('HOLA DEV')
})

//crear un registro
app.post('/equipo', async(req,res)=>{
    const{nombreEquipo,institucion,departamento, municipio,direccion,telefono}=req.body
   const result = await prisma.equipos.create({
        data:{
            nombreEquipo,
            institucion,
            departamento,
            municipio,
            direccion,
            telefono
        }
    })
    res.json(result)
})

//mostrar todos los registros
app.get('/equipos', async(req,res)=>{
    //post hace referencia al modelo
    const posts=await prisma.equipos.findMany()
    res.json(posts)
})

// //Actualizar
// app.put('/post/:id', async(req,res)=>{
//     const{id}= req.params
//     const{title,content}=req.body
//     const post = await prisma.post.update({
//         where:{id:Number(id)},
//         data:{title,content}
//     })
//     res.json(post)
// })

//eliminar
// app.delete('/post/:id', async(req,res)=>{
//     const{id}=req.params
//     try{
//         const post=await prisma.post.delete({
//             where:{id: Number(id)}
//         })
//         res.json('Eliminado')
//     }
//     catch(error){
//         if(error instanceof Prisma.PrismaClientKnownRequestError){
//             if(error.code ==='P2025'){
//                 return res.status(404).json({error:'Post no encontrado'})
//             }
//         }
//         res.status(500).json({error:'Algo Salio mal'})
//     }
// })

app.listen(3000,()=>
   console.log(`server ready at: htt://localhost:3000`)

)

