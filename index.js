const fs = require('fs');

fs.readFile('./data.txt', 'utf8', (err, data) => {

    // Sacar parte de adelante:
    data = data.replace('{script:"dsBloquesDia.callbackRefreshHandler(response, {serviceResponse: {success:true,data:{data:','')

    // Sacar parte del final:
    data = data.replace(', total: 0}}}, dsBloquesDia, o.eventType, o.action, o.extraParams);"}', '')

    // Sacar los caracteres de escape
    data = data.replace(/\\/g, '');

    const jsonData = JSON.parse(data)

    const jsonDataToString = JSON.stringify(jsonData, null, 2)

    // Exportar en un archivo:
    fs.writeFile('data.json', jsonDataToString, 'utf8', (err) => {
        if (err) {
            console.error('Error al escribir el archivo:', err);
        } else {
            console.log('Archivo JSON generado exitosamente.');
        }
    });
});





