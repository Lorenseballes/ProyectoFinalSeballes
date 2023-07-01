const list = document.querySelector(".listProductos");


const llamarProd= async()=>{
const resp = await fetch("./data.json");
const data = await resp.json();

data.forEach((prod)=>{
const li = document.createElement('li');
  li.innerHTML=
    ` <div id="contProductos" class="card-group">
      <div class="card">
      <img src="${prod.imagen}" class="card-img-top" alt="producto" />
        <div class="card-body">
          <h5 class="card-title">${prod.nombre}</h5>
          <h3 class="precio">U$S ${prod.precio}</h3>
          <button id="agregar" class="agregar-carrito btn btn-dark" data-product-id="${prod.id}">Agregar al carrito</button>
        </div>
      </div>
    </div>
    `;

        list.append(li)
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

// Agregar mensaje al DOM
const mensaje = document.createElement('p');
mensaje.textContent = 'Se agregó al carrito';
mensaje.classList.add('mensaje-agregado'); 
boton.parentNode.appendChild(mensaje);

// Borrar el mensaje después de un tiempo determinado 
setTimeout(() => {
  mensaje.remove();
}, 2000); 

}
function obtenerProductoDesdeBoton(boton) {
const productoId = boton.dataset.productId;
const producto = data.find((prod) => prod.id === parseInt(productoId));
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

  const productosHTML = carrito.map((producto, index) => {
    return `
      <div>
      <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-imagen" />
        <h3>${producto.nombre}</h3>
        <p>Precio: U$S${producto.precio}</p>
        <p>Cantidad: ${producto.cantidad}</p>
        <button class="eliminar-producto" data-product-index="${index}">
            <i class="fa fa-trash"></i> Eliminar
          </button>
      </div>
    `;
  })
  .join("");

  // Agregar los productos al contenedor del carrito
  contenido.innerHTML = productosHTML;

  const total = carrito.reduce((accumulator, producto) => {
      return accumulator + producto.precio * producto.cantidad;
  }, 0);

  const totalComp = document.querySelector("#totalComp");
  totalComp.textContent = total;
  
  // Agregar eventos de clic a los botones de eliminar
  const botonesEliminar = document.querySelectorAll(".eliminar-producto");
  botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", eliminarProducto);
  });
}

//Se pasa el array a JSON
const carro = JSON.stringify(carrito)
localStorage.setItem("prod", carro)

//Se obtiene información del storage

const carritoGuardado = localStorage.getItem('carro');
   if (carritoGuardado) {
 carro = JSON.parse(carritoGuardado);
} 

// Mostrar el modal del carrito
  modalCarrito.style.display = "block";
}
function eliminarProducto(event) {
const boton = event.target;
const productoIndex = boton.dataset.productIndex;
carrito.splice(productoIndex, 1);
mostrarCarritoModal();
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

}
llamarProd()


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

  //Inicio de sesión

  var modal = document.querySelector("#modal");
  var openModalBtn = document.querySelector("#open-modal");

  openModalBtn.addEventListener("click", function() {
  modal.style.display = "block"; // Mostrar el modal al hacer clic en el botón
});

  document.addEventListener("click", function(event) {
  if (event.target === modal) {
  modal.style.display = "none"; // Ocultar el modal al hacer clic fuera de él
}
});


  document.querySelector("#login-form").addEventListener("submit", function(event) {
  event.preventDefault(); 

  // Obtener los valores de los campos de entrada
  var username = document.querySelector("#username").value;
  var password = document.querySelector("#password").value;

  // Verificar datos 
  if (username === "Omar" && password === "1234") {
    // Inicio de sesión exitoso
    mostrarNombreUsuario(username);
    modal.style.display = "none"; 
  } else {
    // Usuario/contraseña incorrectas
    alert("Nombre de usuario o contraseña incorrectos");
  }
});

function mostrarNombreUsuario(username) {
  var mensaje = "Bienvenido, " + username + "!";
  document.querySelector("#nombre-usuario").textContent = mensaje;
}
  