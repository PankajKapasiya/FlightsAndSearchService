class CrudService{
    constructor(repository){
        this.repository=repository;
    }

    async create(data){
        try{
            const response=await this.repository.create(data);
            return response;
        }
        catch(error){
            console.log("Something went wrong");
            throw error;
        }
    }

    async destroy(id){
        try{
            const repsonse=await this.repository.destroy(id);
            return response;
        }
        catch(error){
            console.log("Something went wrong");
            throw error;
        }
    }

    async update(id ,data){
        try{
            const response=await this.repository.update(id,data);
            return response;
        }
        catch(error){
            console.log("Something went wrong");
            throw error;
        }
    }

    async get(id){
        try{
            const response = await this.repository.get(id);
            return response;
        }
        catch(error){
            console.log("Something Something wrong");
            throw error;
        }
    }

    async getall(){
        try{
            const response =  await this.repository.getAll();
            return response;
        }
        catch(error){
            console.log("Something went wrong in crud service");
            throw error;
        }
    }

}


module.exports= CrudService;