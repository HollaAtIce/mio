const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 8888

app.use((req,res)=> {
    res.send("HELLO FROM ISAACPANTS")
})

app.listen(port, () => {
    console.log(`On the corner of port ${port}`)
})