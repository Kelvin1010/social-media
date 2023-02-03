const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const AuthRoute = require('./Routes/AuthRoute');
const UserRoute = require('./Routes/UserRoute');
const PostRoute = require('./Routes/PostRoute');


dotenv.config();

//middleware
app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))

mongoose
.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Listening at ${process.env.PORT}`)
    )
)
.catch((error) => console.log(error));


// usage of routes
app.use('/auth', AuthRoute)
app.use('/user', UserRoute)
app.use('/post', PostRoute)