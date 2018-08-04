const express = require('express');
const app = express();
const config = require('./config');
const bodyParser = require('body-parser');
const { mongo } = require('./dao');
const { auth } = require('./controller');
const { userTypes } = require('./const');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



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
                password: "123123"
            })
            await auth.createAdmin({
                userName: "admin2",
                password: "123123"
            })
        }

    })
    .catch(err => {
        console.log(`Failed to start the app: ${err.message}`);
    })









app.listen(config.port, () => {
    console.log(`App is running on port: ${config.port}`);

})