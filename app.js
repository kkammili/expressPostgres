const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const monsters = require('./routes/monsters')
const habitats = require('./routes/habitats')
const lives = require('./routes/lives')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/monsters', monsters)
app.use('/habitats', habitats)
app.use('/lives', lives)

app.use((err, req, res, next)=>{
    res.json(err)
})

const port = 3000
app.listen(port, ()=> console.log(`listening on port ${port}`))