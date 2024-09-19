const fs = require('fs');

try {
    //Lectura del archivo package.json (Sincronico)
    const contenidoStr = fs.readFileSync('package.json', 'utf8');
    const contenidoObj = JSON.parse(contenidoStr);
    const size = fs.statSync('package.json').size;
    // Objeto info
    let info = {
        contenidoStr,
        contenidoObj,
        size
    };

    // Muestro info por consola y lo grabo en info.txt
    console.log(info);
    fs.writeFileSync('info.txt', JSON.stringify(info, null, '\t'));

} catch (error) {
    console.error('Error:', error);
}

