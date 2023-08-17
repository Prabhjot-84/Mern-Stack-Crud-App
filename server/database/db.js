import mongoose from "mongoose";

const Connection = async (username, password) => {

    const URL = `mongodb://${username}:${password}@ac-9wj4k0d-shard-00-00.sdwqavp.mongodb.net:27017,ac-9wj4k0d-shard-00-01.sdwqavp.mongodb.net:27017,ac-9wj4k0d-shard-00-02.sdwqavp.mongodb.net:27017/MERNAPP?ssl=true&replicaSet=atlas-xxajyz-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try{
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database connected successfully');
    } catch(error){
        console.log('Error while connecting with the database', error);
    }
}

export default Connection;
