
let nombre = prompt(`Ingrese su nombre`)

let saludo = "Bienvenida/o ";
alert(saludo + nombre);


// Función para crear un objeto de producto
function crearProducto(nombre, precio) {
    return {
      nombre: nombre,
      precio: precio,
    };
  }
  
  // Array de productos disponibles 
  let productosDisponibles = [
    crearProducto("Anillo de plata", 4000),
    crearProducto("Collar de oro", 8000),
    crearProducto("Pulsera de plata", 7000),
    crearProducto("Aros de oro", 4500),
  ];
  
  // Array para almacenar los productos seleccionados por el usuario
  let carrito = [];
  
  // Variable para almacenar el total a pagar
  let totalAPagar = 0;
  
  // Función para agregar un producto al carrito
  function agregarAlCarrito(producto) {
    carrito.push(producto);
    totalAPagar += producto.precio;
    alert(`El producto "${producto.nombre}" ha sido agregado al carrito.`);
  }
  
  // Función para mostrar el contenido del carrito y el total a pagar
  function mostrarCarrito() {
    console.log("Productos en el carrito:");
    for (let i = 0; i < carrito.length; i++) {
      console.log(`${i + 1}. ${carrito[i].nombre} - $${carrito[i].precio}`);
    }
    alert(`Total a pagar: $${totalAPagar}`);
  }

  //Función para mostrar los productos en descuento
function mostrarProductosDescuento() {
    let productosConDescuento = productosDisponibles.filter(
      (producto) => producto.precio < 5000
    );
  
    let mensaje = "Productos en descuento:\n";
    for (let i = 0; i < productosConDescuento.length; i++) {
      mensaje += `${i + 1}. ${productosConDescuento[i].nombre} - $${productosConDescuento[i].precio}\n`;
    }
  
    alert(mensaje);
  }
  
  // Prompt para mostrar los productos disponibles y agregar al carrito
  while (true) {
    let opcion = parseInt(prompt(`Seleccione una opción:
      1. Productos disponibles
      2. Agregar producto al carrito
      3. Mostrar carrito
      4. Productos en descuento
      5. Salir`)
    );
  
    if (opcion === 1) {
      console.log("Productos disponibles:");
      for (let i = 0; i < productosDisponibles.length; i++) {
        console.log(
          `${i + 1}. ${productosDisponibles[i].nombre} - $${productosDisponibles[i].precio}`
        );
      }
    } else if (opcion === 2) {
      let productoIndex = parseInt(
        prompt("Ingrese el número del producto que desea agregar al carrito:")
      );
      if (
        productoIndex >= 1 &&
        productoIndex <= productosDisponibles.length
      ) {
        let productoSeleccionado =
          productosDisponibles[productoIndex - 1];
        agregarAlCarrito(productoSeleccionado);
      } else {
        alert("Opción inválida. Intente nuevamente.");
      }
    } else if (opcion === 3) {
      mostrarCarrito();
    } else if (opcion === 4) {
        mostrarProductosDescuento();
    } else if (opcion === 5) {
      break;
    } else {
      alert("Opción inválida. Intente nuevamente.");
    }
  }
  
  alert("Gracias por confiar en nosotros");