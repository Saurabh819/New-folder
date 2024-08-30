const express = require('express')

const app = express();
const PORT = 3000;

const db = require('./db/db')
db();

const studentRouter = require('./route/studentRoute')
app.use(express.json())
app.use('/school',studentRouter)

app.listen(PORT, () => {
    console.log("Server is running at 3000")
})