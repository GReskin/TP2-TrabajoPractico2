const fs = require('fs');

try {
    //Lectura del archivo package.json (Asincronico)
    fs.readFile('package.json', 'utf8', (err, contenidoStr) => {
        if (err) throw err;
        try {
            const contenidoObj = JSON.parse(contenidoStr);
            fs.stat('package.json', (err, stats) => {
                if (err) throw err;
                try {
                    //Objeto info
                    let info = {
                        contenidoStr,
                        contenidoObj,
                        size: stats.size
                    };

                    //Muestro info por consola y lo grabo en info.txt
                    console.log(info);
                    fs.writeFile('info.txt', JSON.stringify(info, null, '\t'), (err) => {
                        if (err) throw err;
                    });
                } catch (err) {
                    console.error('Error:', err);
                }
            });
        } catch (err) {
            console.error('Error:', err);
        }
    });
} catch (err) {
    console.error('Error:', err);
}
