const http = require('http');

const callback = (req,res) =>{

    res.writeHead(200, {'Content-Type':'application/json'});
    let salida = {
        nombre: 'omar',
        edad:21,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();
}

http.createServer(callback)
    .listen(3000);
console.log('Escuchando el puerto 3000');