const express = require('express');
// const mongoose = require('mongoose');
const router = express.Router();
const simulacro = require('../controllers/control')
const auth = require('../middleware/auth');

router.get('/ObtenerUsuarioAutenticado',auth.authenticated(),simulacro.getUser);

router.get('/ObtenerUsuario',simulacro.getUser);

router.post('/crearUsuario',simulacro.crateUser);

router.post('/registrar',simulacro.register);

router.post('/login',simulacro.login);

