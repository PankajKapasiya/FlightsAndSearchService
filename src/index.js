const  express= require("express");

const {PORT} =require('./config/serverconfig');

const {City} =require('./models/index');

const CityRepository= require('./repository/city_repository')
const setupAndStartServer =async ()=>{

    // create the express object

    const app=express();

    app.listen(PORT, async ()=>{
        console.log(`Server started at ${PORT}`);
        //console.log(process.env);
        const repo= new CityRepository();
        repo.createCity({name: "New Delhi"});
        //repo.deleteCity({cityId:7});
        
    }); 
}

setupAndStartServer();