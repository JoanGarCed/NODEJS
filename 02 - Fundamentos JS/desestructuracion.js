const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${this.nombre} ${this.nombre} ${this.poder}`;
    }
}

const nombre = deadpool.nombre;
const apellido = deadpool.apellido;
const poder = deadpool.poder;

console.log(nombre, apellido, poder);