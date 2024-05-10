// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const precioMinimo = document.querySelector('#minimo');
const precioMaximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor para los resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;
// console.log(max, min);

// Generar un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); // Muestra los autos al cargar

    // Llena las opciones de años
    llenarSelect();
})

// Eventos para los selects
marca.addEventListener('change', e => {
    // console.log(e.target.value);
    datosBusqueda.marca = e.target.value;

    // console.log(datosBusqueda);

    filtrarAutos();
})

year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAutos();
})

precioMinimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
})

precioMaximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
})

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value);
})

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
})

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
})
// Funciones
function mostrarAutos(autos) {
    limpiarHTML();
    autos.forEach(auto => {

        const {marca, modelo, year, precio, puertas, transmision, color} = auto;
        const autoHTML = document.createElement('tr');

        autoHTML.innerHTML = `
        <td>${marca}</td>
        <td>${modelo}</td>
        <td>${year}</td>
        <td>${precio}</td>
        <td>${puertas}</td>
        <td>${transmision}</td>
        <td>${color}</td>
        `;
    
        // Insertar el HTML
        resultado.appendChild(autoHTML);
    });
}

// Limpiar HTML
function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}
// Genera los años del select
function llenarSelect() {
    // console.log('funciona');
    for (let i = max; i >= min; i--) {
        const yearHTML = document.createElement('option');
        yearHTML.value = i;
        yearHTML.textContent = i;
        year.appendChild(yearHTML);
    }
}

// Funcion que filtra en base a la busqueda
function filtrarAutos() {
    // console.log('funciona!!!');
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear);
    
    // console.log(busqueda);
    mostrarAutos(resultado);
    console.log(resultado);
}

function filtrarMarca(auto) {
    // console.log(auto.marca);
    const { marca } = datosBusqueda;
    if (marca) { // Si hay una marca
        return auto.marca === marca; // Retorna el auto que cumpla la condicion
    }
    return auto; // Retorna todos los autos
}

function filtrarYear(auto) {
    // console.log(typeof datosBusqueda.year);
    // console.log(typeof auto.year);
    const { year } = datosBusqueda;
    if (year) {
        return auto.year === parseInt(year);
    }
    return auto;
}