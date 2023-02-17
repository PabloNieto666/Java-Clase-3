const path = require ('path');

//crea, junta unsa salida adecuada deacuerdo al sos
const fileJoin = Path .join('consumible', '/propiedades', 'etc.js');
console.log(fileJoin);

//la base de ruta donde termina
const fileBasename = path.basename(fileJoin);
console.log(fileBasename);

//dar la ruta sin el archiVo
const fileDirname = path.dirname(fileJoin);
console.log(fileDirname);

//dar ruta en forma de objeto
const filParse = path.parse(fileJoin);
console.log(fileParse);

//completa la ruta del sistema con la ruta proporcionada
const fileResolve = path.resolve(fileJoin);
console.log(fileResolve);