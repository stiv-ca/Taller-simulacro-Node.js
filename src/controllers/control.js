//Llamar Librerias

const user = require('../models/model');
const brcrypt = requiere('brcrypt');
const jwt = requiere('jsonwebtoken');
const jwtSecret = '"#&%%&&/$#$&';

const simulacro = {
    
    getUser : async (req,res) => {
        try {
            const users = await user.find();
            res.json({
                query: 'Ok',
                success: true,
                status:201,
                message: 'authenticated'
            });
        } catch (error) {
            res.status(500).json({
                query: 'Failed',
                success: false,
                status:500,
                message: 'Failed '
            });
            
        };
    },

    createUser : async (req,res) => {
        try {
            const user = new user({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

            await user.save();
            res.json({
                query: 'Ok',
                success: true,
                status:201,
                message: 'authenticated'
            });
        } catch (error) {
            res.status(500).json({
                query: 'Failed',
                success: false,
                status:500,
                message: 'Failed create user '
            });
            
        };
    },

    register : async (res,req) => {
        try {
            const users = await user.find()
            const {name,email,password} = req.body;

            const userData = {
                userId: users.lenght + 1,
                name:name,
                email: email,
                password:await brcrypt(password,10)
            };


            const newUser = new user(userData)
            await newUser.save();
            res.json({
                query: 'Ok',
                success: true,
                status:201,
                message: 'authenticated',
                data:newUser
            });
        } catch (error) {
            console.error('Error registering user',error);
            res.status(500).json({
                query: 'Failed',
                success: false,
                status:500,
                message: 'Failed register user'
            });
        };
    },

    login: async (req,res) => {
        try {
            const {email,password} = req.body;
            const user = await user.find({
                email:email
            });

            if (!user) {
                return res.status(400).json({
                    message:'User not found, please try again'
                });
            };

            const token = jwt.sign({userId:user_id},jwtSecret,{expiresIn:3600});

            res.json({
                query: 'Ok',
                success: true,
                status:201,
                message: 'authenticated',
                data:newUser
            });
        }catch (err) {

        }
    }

}

module.exports = {
    jwtSecret,
    simulacro
};