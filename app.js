const argv = require('./config/yargs').argv;
const colors = require('colors/safe');


// este tipo de instruccion se le llama destructuracion
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch(comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

//let base = '7';

//console.log(process.argv);
//let argv2 = process.argv;
// console.log(argv.base);
//console.log('Limite: ', argv.limite);


// let parametro = argv[2];
// let base = parametro.split('=')[1];

// ejecicio. Imprimir en consola la tabla del 2
/**
 2 * 1 = 2
 2 * 2 = 4
 2 * 3 = 6
 ...
 */