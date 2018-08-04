const express = require('express');
const router = express.Router();
const { auth } = require('../controller');


router.post('/signup', async (req, res) => {

    let res = auth.signup(req.body);

    res.status(res.code).send(res);

})


router.post('/login', async (req, res) => {

    let res = auth.login(req.body);

    res.status(res.code).send(res);

})

module.exports = router;

