const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require('./data/data_video')
const about = require('./data/data_about')

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure('views', {
    express:server,                      
    autoescape: false,                   
    noCache: true                        
})

server.get("/", function(req, res){
    return res.render("about", {about: about})
})

server.get("/portfolio", function(req, res){
    return res.render("portfolio", {items: videos})
})

server.use(function(req, res){
    res.status(404).render("not-found")
})

server.listen(5000, function(){
    console.log("Server is running")
})