const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];


const getEmpleado = (id) => {
    

    return new Promise( (res, rej) => {

        const empleado = empleados.find(e => e.id === id)

        if(empleado) {
            res(empleado.nombre);
        }else{
            rej(`No existe empleado con id ${id}`);
        }

    });
    
}

const id = 4;

getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err));