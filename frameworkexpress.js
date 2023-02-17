const express = require('express')

const app = express();

app.get(`/home`, (req, res) =>{
    res.send('este es el home')
})

app.use((req, res) =>{
    res.status('404').send('this is home!')
})

app.listen(8000)