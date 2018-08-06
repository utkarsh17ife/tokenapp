const express = require('express');
const {Response} = require('../model');
const router = express.Router();
const jwt = require('../utils/jwt');
const { token } = require('../controller');


router.get('/getToken/:id', jwt.verifyJWT, async (req, res) => {
    let userFromJWT = req.decoded;
    let response = await token.getTokens(req.params.id);
    res.status(response.code).send(response);
})

router.get('/gennavigate', jwt.verifyJWT, async (req, res) => {
    let userFromJWT = req.decoded;
        res.send(new Response({
            code:200,
            message:"Token generation page",
            data:{user:userFromJWT._id},
            err:null
        }))
})


router.get('/gen', jwt.verifyJWT, async (req, res) => {
    let userFromJWT = req.decoded;
    let count = await token.getCount(userFromJWT._id)
    if(count.data.tokens<=5){
        let response = await token.generateToken(userFromJWT);
        res.status(response.code).send(response);
    }
    else{
        res.send(new Response({
            code:200,
            message:"Cannot allocate more than 5 tokens at a time",
            data:null,
            err:null
        }))
    }
})


router.post('/check', async (req, res) => {
    let userFromJWT = req.decoded;
    let response = await token.checkTokens(req.body.token);
    res.status(response.code).send(response);
})

router.post('/delete', async (req, res) => {
    let userFromJWT = req.decoded;
    console.log(req.body._id)
    let response = await token.deleteToken(req.body._id);
    console.log(response)
    res.status(response.code).send(response);
})


// router.get('/stats', async (req, res) => {
//     res.status(200).send({
//         message: "token stats route"
//     })

// })

module.exports = router;