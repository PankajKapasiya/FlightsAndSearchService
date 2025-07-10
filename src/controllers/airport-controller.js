const { AirportService} = require('../services/index');

const airportservice = new AirportService();

const create = async (req,res) =>{
    try{
        const response = await airportservice.create(req.body);
        return res.status(201).json({
            message: 'Successfully created the airport',
            err : {},
            success: true,
            data: response
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: 'Cannot create a new airport'
        })
    }
}

module.exports = {
    create
}