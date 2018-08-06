const express = require('express');
const app = express();
const config = require('./config');
const bodyParser = require('body-parser');
const { mongo } = require('./dao');
const { auth } = require('./controller');
const { userTypes } = require('./const');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public/dist/tokenApp')))

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', '*')
    next()
})





mongo.connect()
    .then(async result => {
        console.log("db connected starting routes");
        app.use('/api/auth', require('./routes').auth);
        app.use('/api/token', require('./routes').token);

        //bootstarp with 2 admin accounts        
        let adminExists = await auth.checkAdmins(2);

        if (!adminExists) {
            console.log("")
            await auth.createAdmin({
                userName: "admin1",
                password: "Password1"
            })
            await auth.createAdmin({
                userName: "admin2",
                password: "Password2"
            })
        }

    })
    .catch(err => {
        console.log(`Failed to start the app: ${err.message}`);
    })









app.listen(config.port, () => {
    console.log(`App is running on port: ${config.port}`);

})