//1st
// const obj = require('./lib')

// obj.greet()

//2nd
// const obj = require('./lib')
// console.log(obj.name)

//3rd
// const koibhi = require('./lib')
// console.log(koibhi.name)
// koibhi.greet()

//4th

// const func = require('./lib')
// console.log(func)

//5th
// console.log(process.argv.slice(2))

//6th
require('dotenv').config()
// console.log(process.env.PORT)

//7th
// const qs = require('querystring')
// const url = 'https://www.helloworld.com?msg=hello+world'
// const person = {name: 'Hadi', age:23, gender: 'male'}
// const str = qs.stringify(person)
// //console.log(str)
// //console.log(qs.parse(str))
// const subStr = url.substring(url.indexOf('?')+1)
// console.log(qs.parse(subStr))

//Server creation with node.js
// const http = require('http');
// const fs = require('fs');

// const abuoutPage = fs.readFileSync('about.html');
// const server = http.createServer(function(req, res){
//     if(req.url == '/about'){
//         //return res.end(abuoutPage)
//         res.write('Hello')
//         return res.end()
//     }
        

//     res.end('Not found!')
// })

// server.listen(process.env.PORT,function(){
//     console.log('Server is listening on port '+process.env.PORT)
// })

//Working with Express JS

const express = require('express')
const path = require('path')
const ejs = require('ejs')
const mongoose = require('mongoose')
const Player = require('./models/Player')

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/mera-db')

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/players', async function(req, res){
    const players = await Player.find({});
    res.render('player',{ players })
})

app.get('/player/create', function(req, res){

        Player.create({
            name: 'Ahmed',
            country: 'Pakistan',
            playerType: 'Bowler',
            role: 'M',
            score: 35,
            ranking: 120,
        }, function(err, result) {
            console.log(err);
        })
    
    res.redirect('/players')
})

app.get('/players/:id', async function(req, res){
    const player = await Player.findById(req.params.id);
    res.render('playerDetails', {player})
})

app.get('/home', function(req, res){
    res.render('home')
})
app.get('/about', function(req, res){
    res.render('about')
})

app.listen(process.env.PORT,function(){
    console.log('Express listening on port '+process.env.PORT)
})







