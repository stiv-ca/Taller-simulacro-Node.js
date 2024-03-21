const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./src/config/DB');
const auth = require('./src/middleware/auth');
const routes = require('./src/routers/router');

const app = express();

const port = 3000;

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(auth.initialize());

app.use('/',routes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});