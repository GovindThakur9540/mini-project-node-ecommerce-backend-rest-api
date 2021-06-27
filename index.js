require('dotenv').config();
const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")
const productRouter = require('./controller/ProductRoutes')
const orderRoutes = require('./controller/OrderRoutes')
const userRoutes = require('./controller/UserRoutes')


require('./config/connection')();
var app = express();

app.use(bodyParser.json())
app.use(cors({ origin: '*' }))

const PORT = 3000;

app.get('/', (req, res) =>{
    res.send("server started")
})

app.listen(PORT, ()=>
    console.log(`server started at ${PORT}`))


app.use("/products", productRouter)
app.use("/orders", orderRoutes)
app.use("/user", userRoutes)