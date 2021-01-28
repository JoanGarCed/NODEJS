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

        const empleado = empleados.find(e => e.id === id);

        (empleado)
            ? res(empleado.nombre)
            : rej(`No existe empleado con id ${id}`);

    });
    
}

const getSalario = (id) => {

    return new Promise((res, rej) => {

        const salario = salarios.find(s => s.id === id);

        (salario)
            ? res(salario.salario)
            : rej(`No existe un salario con el id ${id}`);

    });

} 

const getInfousUario = async(id) => {
    
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);

    return `El salario del empleado ${empleado} es de: ${salario}`;

}

const id = 1;

getInfousUario(id)
    .then( msg => console.log(msg));

