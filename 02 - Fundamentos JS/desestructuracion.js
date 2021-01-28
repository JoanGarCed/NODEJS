const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    edad:  50,
    getNombre() {
        return `${this.nombre} ${this.nombre} ${this.poder}`;
    }
}

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

// const { nombre, apellido, poder, edad = 0 } = deadpool;
// console.log(nombre, apellido, poder, edad);

function imprimeHeroe({nombre, apellido, poder, edad = 0}){
    console.log(nombre, apellido, poder, edad);
}

imprimeHeroe(deadpool);