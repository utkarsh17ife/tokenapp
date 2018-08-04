const express = require('express');
const app = express();
const config = require('./config');


app.use('/api/auth', require('./routes').auth);
app.use('/api/token', require('./routes').token);




app.listen(port, () => {
    console.log(`App is running on port: ${port}`);

})