const hbs = require('hbs');
// helpers
hbs.registerHelper('getAnio',getAnio);
hbs.registerHelper('capitalizar',capitalizar);

function getAnio() {
    return new Date().getFullYear();
}
function capitalizar(texto) {
    let palabras = texto.split(' ');
    palabras.forEach((palabra,idx)=>{
       palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase() 
    });
    return palabras.join(' ');
}