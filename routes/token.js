const express = require('express');
const router = express.Router();



router.get('/gen', async (req, res) => {

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