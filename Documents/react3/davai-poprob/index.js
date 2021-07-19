const express = require('express');
const mongoose = require('mongoose')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({extended: true}))
app.use('api/post', require('./routes/posts.routes'))

async function start(){
    try {
        await mongoose.connect('mongodb+srv://dmytro:150673@cluster0.4xie8.mongodb.net/project1?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true
        })
        app.listen(PORT, () => {
            console.log(`Listen on port: ${PORT}`)
        })
    }catch (e) {
        console.log(e)
    }
}
start()