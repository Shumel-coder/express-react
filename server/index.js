//import express 
const express = require('express')

//create a new express application
const app = express()

//port 
const port = 3000

//alow static assets in public folder 
app.use(express.static('public'))

const root = require('path').join(__dirname, '../social-media-app-master', 'dist')
app.use(express.static(root))

//server routes
app.get('/', (req, res)=> {

    res.sendFile('index.html', {root})
})

app.get('/message', (req, res)=> {

    res.send("Hello from our server")
})

app.post('/api', (req, res)=>{
    res.send("Received post request")
})

//run server

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})