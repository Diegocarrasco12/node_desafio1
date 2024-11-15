const fs = require('fs');

const operacionesFile = 'operaciones.js';
if (!fs.existsSync(operacionesFile)) {
  fs.writeFileSync(
    operacionesFile,
    `// Archivo de operaciones para gestionar las citas veterinarias.\n\n`,
    'utf8'
  );
  console.log(`${operacionesFile} ha sido creado exitosamente.`);
} else {
  console.log(`${operacionesFile} ya existe.`);
}

const citasFile = 'citas.json';
if (!fs.existsSync(citasFile)) {
  fs.writeFileSync(citasFile, '[]', 'utf8');
  console.log(`${citasFile} ha sido creado con un contenido inicial vacío.`);
} else {
  console.log(`${citasFile} ya existe.`);
}

// agregar funciones para archivo operaciones.js
const { registrar, leer } = require('./operaciones');
const [,, operacion, nombre, edad, tipo, color, enfermedad] = process.argv;
if (operacion === 'registrar') {
    registrar(nombre, edad, tipo, color, enfermedad);
} else if (operacion === 'leer') {
    leer();
} else {
    console.log('Operación no válida. Use "registrar" o "leer".');
}