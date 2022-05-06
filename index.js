require('dotenv').config();
const Getter = require('./Controllers/GetterTokens')
const express = require('express')
const app = express()
const port = 3000
app.use('/Tokens', express.static(__dirname + '/Tokens'));

Getter.getAll().then().catch()
app.get('/api/all', (req, res) => {
    res.json(Getter.allTokens);
})
app.get('/api/id/:id', (req, res) => {
    res.json(Getter.getById(req.params.id.replace('/', '')))
})

app.get('/Tokens/:id/logo', (req, res) => {
    const logo = Getter.getById(req.params.id.replace('/', ''));
    if (logo.logo) {
        res.sendFile(logo.logo.replace(process.env.SITE_URL, __dirname + '/'))
    } else {
        res.sendFile(__dirname + '/Tokens/default-asset-icon.svg')

    }
    
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})