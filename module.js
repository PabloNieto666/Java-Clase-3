const fs = require('fs');

fs.readFile('lejou.txt', 'utf-8', (err,data) => {
    if(err){
        console.log(err)
    }
    console.log(data)
})