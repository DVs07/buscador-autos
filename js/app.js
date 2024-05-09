// Variables
const resultado = document.querySelector('#resultado');

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
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