const fs = require('fs').promises;

fs.readFile('package.json', 'utf8')
    .then(contenidoStr => {
        // Lectura del archivo package.json (Asincronico con promises - Then/catch)
        const contenidoObj = JSON.parse(contenidoStr);
        return fs.stat('package.json').then(stats => ({
            contenidoStr,
            contenidoObj,
            size: stats.size
        }));
    })
    .then(info => {
        //Muestro info por consola y lo grabo en info.txt
        console.log(info);
        return fs.writeFile('info.txt', JSON.stringify(info, null, '\t'));
    })
    .catch(err => {
        console.error('Error:', err);
    });

