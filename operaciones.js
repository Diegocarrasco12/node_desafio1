const fs = require('fs');

function registrar(nombre, edad, tipo, color, enfermedad) {
    const nuevaCita = { nombre, edad, tipo, color, enfermedad };
    fs.readFile('citas.json', 'utf8', (err, data) => {
        if (err) throw err;
        const citas = JSON.parse(data);
        citas.push(nuevaCita);
        fs.writeFile('citas.json', JSON.stringify(citas, null, 2), (err) => {
            if (err) throw err;
            console.log('Cita registrada exitosamente');
        });
    });
}

function leer() {
    fs.readFile('citas.json', 'utf8', (err, data) => {
        if (err) throw err;
        const citas = JSON.parse(data);
        console.log(citas);
    });
}

module.exports = { registrar, leer };