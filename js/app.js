// Variables
const marca = document.querySelector('#marca');
const years = document.querySelector('#year');
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
    mostrarAutos(); // Muestra los autos al cargar

    // Llena las opciones de años
    llenarSelect();
})

// Eventos para los selects
marca.addEventListener('change', e => {
    // console.log(e.target.value);
    datosBusqueda.marca = e.target.value;

    // console.log(datosBusqueda);
})

years.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value);
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
function mostrarAutos() {
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

// Genera los años del select
function llenarSelect() {
    // console.log('funciona');
    for (let i = max; i >= min; i--) {
        const yearHTML = document.createElement('option');
        yearHTML.value = i;
        yearHTML.textContent = i;
        years.appendChild(yearHTML);
    }
}