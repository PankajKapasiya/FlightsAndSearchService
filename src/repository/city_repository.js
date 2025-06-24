const {City} = require('../models/index');

class CityRepository{
    async createCity({name}){
        try{
            const city=await City.create({name});
            return city;
        }
        catch(error){
            console.log("Something went wrong");
            throw(error);
        }
    }

    async deleteCity(cityid){
        try{
            const city=await City.destroy({
                where:{
                    id:cityid
                }
            });

            return city;
        }
        catch(error){
           console.log("Something went wrong");
           throw(error);
        }
    }

    async updateCity(cityId, data){ // {name: "prayagraj"}
        try{
            const city=await City.update(data, {
                where:{
                    id:cityId
                }
            });

            return city;
        }
        catch(error){
             console.log("Something went wrong");
            throw(error);
        }

    }

    async getCity(cityId){
        try{
            const city=await City.findByPk(cityId);
            return city;
        }
        catch(error){
            console.log("Something went wrong");
            throw(error);
        }
    }

    async getAllcities(){
        try{
            const city=await City.findAll();
            return city;
        }
        catch(error){
            console.log("Something went wrong");
            throw(error);
        }
    }
}

module.exports = CityRepository;