require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
// const userRoutes = require('./routes/user')

const app = express();

//middleware setup
app.use(express.json())

// app.use((req, res, next) => {
//     console.log(req.path, req.method)
//     next()
// })

//routes
// app.use('/api/user', userRoutes)

//database connection
mongoose.connect(process.env.URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to database and listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log('Error in database connection')
    })

