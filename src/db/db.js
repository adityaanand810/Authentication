const dns = require('node:dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);


const mongoose = require('mongoose')



async function connectDB() {

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected Successfully!");
    } catch (error) {
        console.error("Database connection error",error)
    }
}

module.exports = connectDB;