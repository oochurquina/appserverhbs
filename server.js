const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.PORT | 3000;

app.use(express.static(__dirname+'/public'));
// express hbs engine
hbs.registerPartials(__dirname+'/views/partials');

app.set('view engine','hbs');

// rutas definidas
app.get('/',homePage);
app.get('/about',aboutPage)
app.listen(port,mensajeEscucha);


// FUNCIONES
function mensajeEscucha(){
    console.log(`Escuchando peticiones en el puerto ${port}`);
}
function homePage(req,res){
    res.render('home',{
        nombre: 'CyberNautas',
    });
}
function aboutPage(req,res) {
    res.render('about')
}
