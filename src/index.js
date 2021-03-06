const express = require('express');
const app = express();
const path = require('path')

//settings
app.set('port', 3000)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
//middlewares


//routes
app.use(require('./routes'))
//static files
app.use(express.static(path.join(__dirname, '/public')))
//listening to server
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'))
})