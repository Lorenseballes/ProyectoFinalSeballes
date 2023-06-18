
     //productos

 /*const productos = [
  {
      id: 1,
      nombre: "PULSERA CON DIAMANTES",
      precio: 200,
      imagen: "./imagenes/04",
      cantidad: 1
  },
  {
      id: 2,
      nombre: "SET COLLAR Y PULSERA",
      precio: 500,
      imagen: "./imagenes/tres",
      cantidad: 1
  },
  {
      id: 3,
      nombre: "AROS",
      precio: 300,
      imagen: "./imagenes/03",
      cantidad: 1
  },
  {
    id: 4,
    nombre: "CADENA DOBLE",
    precio: 400,
    imagen: "./imagenes/01",
    cantidad: 1
},
{
    id: 5,
    nombre: "ANILLOS DISEÑO 1",
    precio: 300,
    imagen: "./imagenes/uno",
    cantidad: 1
},
{
    id: 6,
    nombre: "ANILLOS DISEÑO 2",
    precio: 300,
    imagen: "./imagenes/dos",
    cantidad: 1
}
]; */

const list = document.querySelector(".listProductos")

fetch("../data.json")
.then((res)=>res.json())
.then((data)=>{
  data.forEach((prod)=>{
const li = document.createElement('li');
li.innerHTML=
      ` <div id="contProductos" class="card-group">
        <div class="card">
        <img src="${prod.imagen}" class="card-img-top" alt="producto" />
          <div class="card-body">
            <h5 class="card-title">${prod.nombre}</h5>
            <h3 class="precio">U$S ${prod.precio}</h3>
            <button id="agregar" class="agregar-carrito btn btn-dark" data-product-id="1">Agregar al carrito</button>
          </div>
        </div>
      </div>
      `;

          list.append(li)
  })
})



let carrito = []

const botonesAgregar = document.querySelectorAll(".agregar-carrito");

botonesAgregar.forEach((boton) => {
  boton.addEventListener("click", agregarAlCarrito);


});

function agregarAlCarrito(event) {
  const boton = event.target;
  const producto = obtenerProductoDesdeBoton(boton);
  carrito.push(producto);
  mostrarCarrito();
}
function obtenerProductoDesdeBoton(boton) {
  const productoId = boton.dataset.productId;
  const producto = productos.find((prod) => prod.id === parseInt(productoId));
  return producto;
}
function mostrarCarrito() {
 console.log("Productos en el carrito:");
  console.log(carrito);
}





const verCarrito = document.querySelector("#verCarrito");
const modalCarrito = document.querySelector("#modalCarrito");
const contenido = document.querySelector("#contenido");

verCarrito.addEventListener("click", mostrarCarritoModal);

function mostrarCarritoModal () {
    contenido.innerHTML = " ";

if (carrito.length === 0) {
    contenido.innerHTML = "<p>El carrito está vacío.</p>";
  } else {

    const productosHTML = carrito.map((producto) => {
      return `
        <div>
          <h3>${producto.nombre}</h3>
          <p>Precio: U$S${producto.precio}</p>
          <p>Cantidad: ${producto.cantidad}</p>
        </div>
      `;
    });

    // Agregar los productos al contenedor del carrito
    contenido.innerHTML = productosHTML.join("");

    const total = carrito.reduce((accumulator, producto) => {
        return accumulator + producto.precio * producto.cantidad;
    }, 0);

    const totalComp = document.querySelector("#totalComp");
    totalComp.textContent = total;
}

  // Mostrar el modal del carrito
  modalCarrito.style.display = "block";
 }

 //vaciar carrito 

 const botonVaciarCarrito = document.querySelector("#eliminar");
 const totalCompElemento = document.querySelector("#totalComp");

botonVaciarCarrito.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
  carrito = []; 
  mostrarCarrito(); 
  totalCompElemento.textContent = "0";
}

   //Saludo

   const Saludo = document.querySelector("#eliminar")

  Saludo.addEventListener("click", ()=> {
    Swal.fire('Regresa cuando quieras, aquí te esperamos')

    }) 

  //finalizar

  const fin = document.querySelector("#finalizar")

  fin.addEventListener("click", ()=> {
    Swal.fire(
        ' ',
        'Tu compra se ha realizado con éxito :)',
        'success'
      )

    }) 



// Ingresar mail

const btn = document.querySelector("#button-addon2")

btn.addEventListener("click", ()=> {
    Swal.fire(
        'Gracias por dejarnos tu mail',
        'Nos pondremos en contacto contigo :)',
        'success'
      )

    }) 


