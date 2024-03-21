const mongoose = require('mongoose');

let user;

const connectDB = async () => {
    try {
        if (!user) {
            user = mongoose.model('user',requiere('../models/model'));
        };

        await mongoose.connect('mongodb+srv://SimulacroRiwiNodeJs:gHxRlmGe3ZAS6e7k@simulacronodejs.ekm2ec7.mongodb.net/')
        .then(() => {
             console.log('MongoDB connected')
        })
        .catch(err => {
            console.log(err);
        });

        iniData();

    } catch (error) {
        console.error('failed to connect to MongoDB',error);
        process.exit(1);
    };
};

const iniData = async() => {
    
    try {
        console.log('conection successfully');
    } catch (error) {
        console.error('failed to connect to MongoDB',error);
        process.exit(1);
    };
};

module.exports = connectDB;