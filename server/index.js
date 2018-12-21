require('dotenv').config()
const massive = require('massive')
const express = require('express')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const houseController = require('./controller')

const app = express();
massive(CONNECTION_STRING).then((dbInstance) => {
    app.set('db', dbInstance)
})
app.use(express.json())

app.get('/api/houses', houseController.getHouses)
app.post('/api/houses', houseController.addHouse)
app.delete('/api/houses/:id', houseController.deleteHouse)

app.listen(SERVER_PORT, () => console.log(`I got ${SERVER_PORT} problems, but a server ain't one`))