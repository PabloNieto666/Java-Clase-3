const fs = require('fs');

//leer contenido de archivo
const dato =fs.readFileSync('dato.txt', 'utf-8');
console.log(dato);


const tue = fs.readFileSync('tue.js');
console.log(tue.toString());

//crear o insertar un contenido
const n = "H";
fs.writeFileSync('tercero.js', n);

//crear un archiVo e inserta un contenido

fs.writeFileSync('tercero.js', hola , {
    flag: 'a',
});