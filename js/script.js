//DOM
let divProductos = document.querySelector("#divProductos");

//Fetch - Json
fetch("../json/productos.json")
  .then((response) => response.json())
  .then((producto) => {
    producto.forEach((productos) => {
      let { nombre, precio, id, img } = productos;
      divProductos.innerHTML += `
        <div id="${id}"class="col-sm-12 col-md-6 col-xl-4 ">
            <div class="card mt-3 mb-5 bgCard displayCard tarjeta--nueva">
                <img class="card-img-top imgP" src="${img}" alt="Foto de producto">
                <div class="card-body">
                    <h4 class="card-title">${nombre} </h4>
                    <p class="card-text">$${precio}</p>
                    <div class="boton1">
                    <button id="btn-send botonCompra" class="btn-sm enviar" name="crearcuenta" type="click" value="Registrarme"> Agregar al carrito </button>                    </div>
                </div>
            </div>
        </div>
        `;
    });
  });

