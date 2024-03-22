const { default: mongoose } = require("mongoose");

const connectToDatabase= async()=>{
    console.log('database connecting');
    const uri='mongodb+srv://projectdb:JOhkLTgzWnvgVNJh@cluster0.hiylnp2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

    await mongoose.connect(uri,{
        dbName:'MyDb'
    })
    console.log('connected');
}


module.exports=connectToDatabase