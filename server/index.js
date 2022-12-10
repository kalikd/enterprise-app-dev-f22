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
const User = require('./models/User')
const bcrypt = require('bcrypt');
const expressSession = require('express-session');
//const bodyparser = require('body-parser')
const playerValidationMiddleware = require('./middleware/playerDataValidation')
const authRedirectMiddleware = require('./middleware/authRedirectMiddleware')
const authIsLoggedInMiddleware = require('./middleware/authIsLoggedInMiddleware')
const generalSessionMiddleware = require('./middleware/generalSessionMiddleware')
const { logout } = require('./controllers/Auth')
const { getPlayers } = require('./controllers/Players')
const { env } = require('process')
const flash = require('connect-flash')

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/mera-db')

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(expressSession({
    secret:process.env.SECRET_KEY
}))

app.use(flash())

//app.use(express.json())
app.use(express.urlencoded())
//app.use(bodyparser.json())

global.isLoggedIn = false

app.get('/players', authRedirectMiddleware, getPlayers)

app.post('/player/create', playerValidationMiddleware, function(req, res){
        
        Player.create(req.body, function(err, result) {
            if(!err){
                return res.redirect('/players')
            }
            const validationError = Object.keys(err.errors).map(key=> err.errors[key].message)
            
            //req.session.validationError = validationError
            req.flash('validationError', validationError)
            res.redirect('/player/new')

        })
    
})

app.get('/login', authIsLoggedInMiddleware, async function(req, res){
    res.render('login')
})

app.get('/logout', logout)

app.post('/authenticate', function(req, res){
   const {username, password} = req.body;

   /* Checking if the user exists in the database. If it does, it is comparing the password entered by
   the user with the password stored in the database. If they match, it is setting the session id
   and redirecting the user to the players page. If they don't match, it is redirecting the user to
   the login page. */
   User.findOne({username: username}, function(err,user){
        if(!!user){
            bcrypt.compare(password, user.password, function(err, same){
                if(same){
                    isLoggedIn = true;
                    req.session.uid = user._id
                    console.log(req.session)
                    return res.redirect('/players')
                }
                res.redirect('/login')
            })
        }
   })

})

/* A route handler. It is a function that will be called when a request is made to the server with the
path `/player/new`. */
app.get('/player/new', authRedirectMiddleware, async function(req, res){
    res.render('newPlayer',{ 
        errors: req.flash('validationError')//req.session.validationError 
    })
})

app.get('/signup', authIsLoggedInMiddleware, async function(req, res){
    console.log('working')
    res.render('signup')
})

app.post('/user/create', function(req, res){
   
    User.create(req.body, function(err, result) {
        if(!err){
            return res.redirect('/login')
        }
        console.log('ABC=>',err._message);

    })

})

app.get('/players/:id', authRedirectMiddleware, async function(req, res){
    const player = await Player.findById(req.params.id);
    res.render('playerDetails', {player})
})

app.get('/home', authRedirectMiddleware, function(req, res){
    res.render('home')
})
app.get('/about', authRedirectMiddleware, function(req, res){
    res.render('about')
})

//app.use('*', generalSessionMiddleware)


app.listen(process.env.PORT,function(){
    console.log('Express listening on port '+process.env.PORT)
})







