const express=require("express")
const bodyparser=require("body-parser")
const cors=require("cors")
const app=express();

const vec=[2,4,6,8,10];

//const myInfo=new estructura()

app.use(bodyparser.urlencoded({ extended: false}));
app.use(bodyparser.json());

app.listen(1500,()=>{
    console.log("Escuchando en el puerto 3000");
});

app.get("/",cors(),(req,res)=>{
    res.status(200).send({menssage:"Bienvenido"}); 
});

app.get("/usuarios/:datos?",cors(),(req,res)=>{
    if(req.params.dato){
       // let res = myInfo.buscar(req.params.dato);
       // if (res!=null)
        let encontrado=-1;
        let i=0;
        while(i<vec.length && encontrado==-1){
            if (vec[i]==parseInt(req.params.dato))
                encontrado=i;
            i++
        }
        if(encontrado==-1)
            res.status(500).send({tipo:"error",menssage:"No existe"});
        else
            res.status(200).send({tipo:"exito",menssage:"Encontrado en "+ encontrado});
    }
    else
        if(!vec)
            res.status(500).send({tipo:"error",menssage:"No existen los datos"});
        else
            res.status(200).send({menssage:"Todos",datos:vec});
});

app.post("/usuarios/",cors(),(req,res)=>{
    if(!req.body.usuario || !req.body.numero){
        res.status(500).send({tipo:"error",menssage:"Faltan datos"});
    }
    else{
        let dato=parseInt(req.body.numero);
        //myInfo.agregar(dato)
        let encontrado=-1;
        let i=0;
        while(i<vec.length && encontrado==-1){
            if (vec[i]==parseInt(dato))
                encontrado=i;
            i++
        }
        if(encontrado==-1){
            vec.push(dato);
            res.status(200).send({tipo:"exito",menssage:"El dato se agrego correctamente"});
        }
        else{
            res.status(500).send({tipo:"error",menssage:"El dato ya existe"});
    }
 }
});
app.post("/usuarios/",cors(),(req,res)=>{
app.post("/usuarios/",cors(),(req,res)=>{