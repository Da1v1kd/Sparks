const express = require('express')
const mongoose = require('mongoose')
const router = require('./router/routes')
const cors = require('cors')

mongoose.connect("mongodb+srv://Daivikd:daivik123@cluster0.avqak.mongodb.net/pbank?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
}, (err) => {
    if(err)
        console.log(err)
})

app = express();

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(process.env.PORT || 5000);