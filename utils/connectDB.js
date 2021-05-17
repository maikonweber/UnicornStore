import mongoose from "mongoose"



const connectDB = () => {
    if(mongoose.connections[0].readyState){
        console.log('Already connected.')
        return;
    }
     mongoose.connect( "mongodb://maikon:ma128sio4@cluster0-shard-00-00.vepmz.mongodb.net:27017,cluster0-shard-00-01.vepmz.mongodb.net:27017,cluster0-shard-00-02.vepmz.mongodb.net:27017/unicornStore?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"  , {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log('Databse Connected!'))
      .catch(err => console.log(err));
      
}


export default connectDB
