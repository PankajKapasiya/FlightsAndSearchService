const  express= require("express");

const {PORT} =require('../config/serverconfig');
const setupAndSartServer =async ()=>{

    // create the express object

    const app=express();

    app.listen(PORT, ()=>{
        console.log(`Server started at ${PORT}`);
        //console.log(process.env);
    });
}

setupAndSartServer();