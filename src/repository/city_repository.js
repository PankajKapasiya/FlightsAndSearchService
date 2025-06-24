const {City} = require('../models/index');

const {Op}= require('sequelize');
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

    async getAllcities(filter){
        try{
            console.log(filter);
            if(filter.name){
                console.log("ENter to");
                const cities = await City.findAll({
                    where :{
                        name :{
                            [Op.startsWith] : filter.name
                        }
                    }
                });

                return cities;
            }
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