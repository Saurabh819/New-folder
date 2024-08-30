const mongoose = require("mongoose");


const URL = "mongodb+srv://saurabh819:19xOAeG7CRMiWKnj@cluster0.767tn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const ConnectDB = async (req, res) => {
    try {
        await mongoose.connect(URL);
        console.log("Database connected Succefully")
    } catch (error) {
        console.log(error)
    }
}


module.exports = ConnectDB;