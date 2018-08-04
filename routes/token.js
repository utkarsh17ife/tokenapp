const express = require('express');
const router = express.Router();
const jwt = require('../utils/jwt');


router.get('/gen', jwt.verifyJWT, async (req, res) => {

    let userFromJWT = user.decoded;


    res.status(200).send({
        message: "token gen route"
    })

})


router.post('/check', async (req, res) => {

    res.status(200).send({
        message: "token check route"
    })

})


router.get('/stats', async (req, res) => {

    res.status(200).send({
        message: "token stats route"
    })

})

module.exports = router;