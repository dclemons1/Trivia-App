const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const app = express();
const path = require('path')
const ObjectId = require('mongodb').ObjectID
app.set("view engine", "pug")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname,'/style')));
app.use(express.static(path.join(__dirname,'/scripts')));




let db
let trivia_cards= []


MongoClient.connect('mongodb://trivia_app:trivia101@ds117128.mlab.com:17128/trivia', (err,database)=>{

if (err) return console.log(err)
db = database.db('trivia')
app.listen(3000, function(){
    console.log("listening on port 3000")
                          })
})

app.get('/', function(req,res) {
    cursor = db.collection("trivia").find().toArray(function(err,results){
        if (err) return console.log(err)
        trivia_cards=results
        console.log(results)
        res.render('index.pug', {trivia: results})
    })
})
app.get('/trivia', (req,res)=>{
    res.send(trivia_cards)
})
app.post('/trivia', (req,res)=>{
    db.collection('trivia').save(req.body, (err,results)=>{
        if (err) return console.log(err)
        console.log('saved to database:)')
        console.log(req.body)
        res.redirect('/')
    })
})
app.post('/triviaUpdate', (req,res)=>{
    let updateCard = { 
    question: req.body.question,
    hint: req.body.question,
    answer: req.body.answer
}
let id = req.body.id
    db.collection('trivia').updateOne({_id:ObjectId(id)},{$set:updateCard},(err,results)=>{
        if (err) return console.log(err)
        res.redirect('/')
    })
})

  
  
  
  
