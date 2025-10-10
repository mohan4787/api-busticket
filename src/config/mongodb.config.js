const mongoose = require("mongoose");
const { DbConfig } = require("./config");

(async () => {
    try {
        await mongoose.connect(DbConfig.mongoDBUrl,{
            dbName: DbConfig.mongoDBName,
            autoCreate: true,
            autoIndex: true,
        });;
        console.log("MongoDB connected successfully.....");
    } catch (exception) {
        console.log("MongoDB connection error", exception);
        process.exit(1);
    }
}) ();