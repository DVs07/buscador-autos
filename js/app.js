// Variables
const resultado = document.querySelector('#resultado');
const years = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 10;
console.log(max, min);

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); // Muestra los autos al cargar

    // Llena las opciones de años
    llenarSelect();
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