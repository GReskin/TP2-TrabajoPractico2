const fs = require('fs').promises;

async function mapaa() {
    try {
        // Lectura del archivo package.json (Asincronico con promises - Then/catch)
        const contenidoStr = await fs.readFile('package.json', 'utf8');
        const contenidoObj = JSON.parse(contenidoStr);
        const stats = await fs.stat('package.json');

        //Objeto info
        let info = {
            contenidoStr,
            contenidoObj,
            size: stats.size
        };

        //Muestro info por consola y lo grabo en info.txt
        console.log(info);
        await fs.writeFile('info.txt', JSON.stringify(info, null, '\t'));
    } catch (err) {
        console.error('Error:', err);
    }
}

mapaa();
