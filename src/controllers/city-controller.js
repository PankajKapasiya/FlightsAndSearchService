const {CityService}= require('../services/index');

const cityservice= new CityService();

const create = async(req, res)=>{
    try{
        const city= await cityservice.createCity(req.body);

        return res.status(201).json({
            data:city,
            success:true,
            message: 'successfully created a city',
            err :{}
        });
    }
    catch(error){ 
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to create a city',
            err :error
        })
    }
}

const destroy=async (req,res) =>{
    try{
        const response= await cityservice.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message: 'successfully deleted a city',
            err :{}
        });
    }
    catch(error){
        console.log(error);

        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to delete a city',
            err :error
        })
    }
}

const get=async (req,res) =>{
    try{
        const response= await cityservice.getCity(req.params.id);

        return res.status(200).json({
            data:response,
            success:true,
            message: 'successfully fetched a city',
            err :{}
        });
    }
    catch(error){
        console.log(error);

        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to get a city',
            err :error
        })
    }
}

const update=async (req,res) =>{
    try{
        const response= await cityservice.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data:response,
            success:true,
            message: 'successfully update a city',
            err :{}
        });
    }
    catch(error){
        console.log(error);

        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to update a city',
            err :error
        })
    }
}   

const getall=async (req,res) =>{
    try{
        const cities= await cityservice.getallcities(req.body);

        return res.status(200).json({
            data:cities,
            success:true,
            message: 'successfully fetched all cities',
            err :{}
        });
    }
    catch(error){
        console.log(error);

        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to get a city',
            err :error
        })
    }
}

module.exports ={
    create,
    destroy,
    update,
    get,
    getall
}