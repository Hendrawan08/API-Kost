const express = require('express')
const app = express()
const ListKost = require('./list_kost.json')

const port = process.env.port || 3000

app.get('/',(req, res) => {
    res.send("list kost")
})

app.get('/listkost', (req, res) => {
    res.send(ListKost)
})

app.listen(port, () => {
    console.log(`App is listening to port ${port}`)
})