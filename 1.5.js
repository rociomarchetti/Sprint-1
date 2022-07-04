//NIVEL 1

/* - Exercici 1
Crea una funció que, en executar-la, escrigui una frase en un fitxer. */
 
let fs = require('fs')
 
const message = 'Esta es la frase a ser impresa'
 
fs.writeFile('newfile.txt', message, (err) => {
    if (err) {
        console.log('Error al crear archivo')
    } else {
        console.log('Archivo creado con éxito')
    }
})
 
/* - Exercici 2
Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior. */
 
fs.readFile('newfile.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Error al leer el archivo')
    } else {
        console.log(data)
    }
 
})

/* - Exercici 3
Crea una funció que comprimeixi el fitxer del nivell 1. */

const compression = require('compressing')

compression.gzip.compressFile('newfile.txt', 'compressFile.gz')
.then(console.log('el archivo ha sido comprimido'))