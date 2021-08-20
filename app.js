var express = require('express');
const mongoose = require('mongoose');
const Form = require('./models/form');

//express app
var app = express();

 //connect to mongodb
const dbuRI = 'mongodb+srv://goloba:271299@cluster0.ossks.mongodb.net/israel?retryWrites=true&w=majority'
mongoose.connect(dbuRI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => console.log('connected to db') )
.catch((err) => console.log(err));
   
   
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.post('/form', (req,res) => {
 const { name, email, phone, message} = req.body;
    form = new Form({
        name,
        email,
        phone,
        message,
 });
     form.save();
     res.send( 'message receieved');

});
      
app.get('/', function(req, res){
    res.render('cv');
});
app.listen(3000);
                                                                              