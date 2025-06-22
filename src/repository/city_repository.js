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

    async updateCity(cityId, data){
        try{
            const city=await City.update(data, {
                where:{
                    id:cityId
                }
            })

            return city;
        }
        catch(error){
             console.log("Something went wrong");
            throw(error);
        }

    }

    async getCity(cityId){
        try{
            const city=await City.findByPK(cityId);
            return city;
        }
        catch(error){
            console.log("Something went wrong");
            throw(error);
        }
    }
}

module.exports = CityRepository;