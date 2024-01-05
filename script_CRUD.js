// Local storage solo guarda texto....
let tarjetas = JSON.parse(localStorage.getItem("tarjetas")) || [];

const descripcionTarjeta = document.getElementById("descripcionTarjeta")
const urlTarjeta = document.getElementById("urlTarjeta")
const tituloTarjeta = document.getElementById("tituloTarjeta")

botonAgregar = document.getElementById("botonAgregar")
botonBorrarTodo = document.getElementById("botonBorrarTodo")

divCards = document.getElementById("divCards");

class Tarjeta{
    constructor(titulo, descripcion, url){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.url = url;
    }
}

function crearTarjeta(titulo, descripcion, url){
    tituloVal = titulo.value;
    descripcionVal = descripcion.value;
    urlVal = url.value;

    tarjetaTemp = new Tarjeta(tituloVal, descripcionVal, urlVal);
    tarjetas.push(tarjetaTemp);
    localStorage.setItem("tarjetas", JSON.stringify(tarjetas))

    console.log(tarjetaTemp);
    mostrarTarjetas();
}

function borrarTodo(){
    localStorage.clear();
    tarjetas = [];
    mostrarTarjetas();
}

function mostrarTarjetas(){
    if (tarjetas.length === 0){
        divCards.innerHTML = "";
        return;
    }
    divCards.innerHTML = "";
    tarjetas.forEach(element => {
        divCards.innerHTML += 
        `<card>
        <text class = "card-title">${element.titulo}</text>
        <text class = "card-body">${element.descripcion}</text>
        <button class = "card-button" href = ${element.url}>Url</button>
    </card>`;

    });
}

botonAgregar.addEventListener("click", () => {
    crearTarjeta(tituloTarjeta, descripcionTarjeta, urlTarjeta);
})

botonBorrarTodo.addEventListener('click', ()=> {
    borrarTodo();
})

mostrarTarjetas();