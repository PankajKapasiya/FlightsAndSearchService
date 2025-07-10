class CrudRepository{

    constructor(model){
        this.model=model;
    }

    async create(data){
        try{
            const response = await this.model.create(data);
            return response;
        }
        catch(error){
            console.log("Something went wrong in crud repio");
            throw error;
        }
    }

    async destroy(modelid){
        try{
          await this.model.destroy({
                where :{
                    id: modelid
                }
            });
            return true;
        }
        catch(error){
            console.log("Something went wrong in crud repio");
            throw error;
        }
    }  

    async get(id){
        try{
            const result = await this.model.getByPk(id);
            return result;
        }
        catch(error){
            console.log("Something went wrong in crud repio");
            throw error;
        }
    }
    
    async getAll(){
        try{
            const response = await this.model.findAll();
            return response;
        }
        catch(error){
            console.log("Something went wrong in crud repio");
            throw error;
        }
    }

     async update(modelid ,data){
        try{
            const result = await this.model.update(data, {
                where :{
                    id:modelid
                }
            });
            return result;
        }
        catch(error){
            console.log("Something went wrong in crud repio");
            throw error;
        }
    }
}

module.exports=CrudRepository;