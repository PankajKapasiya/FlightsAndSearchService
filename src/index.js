const  express= require("express");

//const {PORT} =require('./config/serverconfig');
const PORT=3000;
const {City} =require('./models/index');

const CityRepository= require('./repository/city_repository')
const {Airplane} =require('./models/index');
const ApiRoutes = require('./routes/index');
const bodyParser = require("body-parser");
const setupAndStartServer =async ()=>{
    // create the express object

    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.use('/api', ApiRoutes);

    app.listen(PORT, async ()=>{
        console.log(`Server started at ${PORT}`);

        // await Airplane.create({
        //     modelNumber: 'Bombardier CRJ'
        // }); 
    }); 

}

setupAndStartServer();