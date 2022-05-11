const express=require('express')

const app=express();

const port=process.env.PORT||3000;

app.get('/',(req,res)=>{

    res.send('<h1> Hello Employee System </h1>')
})

app.listen(port,()=>{
    console.log('app is running on port :'+ port);
})
