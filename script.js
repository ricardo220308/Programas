const productos = {
    playeras: [
      { nombre: "Playera 1", precio: 200, img: "playera1.jpg" },
      { nombre: "Playera 2", precio: 250, img: "playera2.jpg" },
      { nombre: "Playera 3", precio: 300, img: "playera3.jpg" },
      { nombre: "Playera 4", precio: 350, img: "playera4.jpg" },
      { nombre: "Playera 5", precio: 400, img: "playera5.jpg" },
      { nombre: "Playera 6", precio: 450, img: "playera6.jpg" },
      { nombre: "Playera 7", precio: 500, img: "playera7.jpg" },
      { nombre: "Playera 8", precio: 550, img: "playera8.jpg" },
      { nombre: "Playera 9", precio: 600, img: "playera9.jpg" },
      { nombre: "Playera 10", precio: 650, img: "playera10.jpg" }
    ],
    guantes: [
      { nombre: "Guante 1", precio: 500, img: "guantes1.jpg" },
      { nombre: "Guante 2", precio: 550, img: "guantes2.jpg" },
      { nombre: "Guante 3", precio: 600, img: "guantes3.jpg" },
      { nombre: "Guante 4", precio: 650, img: "guantes4.jpg" },
      { nombre: "Guante 5", precio: 300, img: "guantes5.jpg" },
      { nombre: "Guante 6", precio: 400, img: "guantes6.jpg" },
      { nombre: "Guante 7", precio: 350, img: "guantes7.jpg" },
      { nombre: "Guante 8", precio: 850, img: "guantes8.jpg" },
      { nombre: "Guante 9", precio: 250, img: "guantes9.jpg" },
      { nombre: "Guante 10", precio: 450, img: "guantes10.jpg" }
    ],
    balones: [
      { nombre: "Balón 1", precio: 400, img: "balon1.jpg" },
      { nombre: "Balón 2", precio: 450, img: "balon2.jpg" },
      { nombre: "Balón 3", precio: 500, img: "balon3.jpg" },
      { nombre: "Balón 4", precio: 550, img: "balon4.jpg" },
      { nombre: "Balón 5", precio: 600, img: "balon5.jpg" },
      { nombre: "Balón 6", precio: 650, img: "balon6.jpg" },
      { nombre: "Balón 7", precio: 700, img: "balon7.jpg" },
      { nombre: "Balón 8", precio: 750, img: "balon8.jpg" },
      { nombre: "Balón 9", precio: 780, img: "balon9.jpg" },
      { nombre: "Balón 10", precio: 300, img: "balon10.jpg" }
    ],
    accesorios: [
      { nombre: "Accesorio 1", precio: 100, img: "accesorio1.jpg" },
      { nombre: "Accesorio 2", precio: 150, img: "accesorio2.jpg" },
      { nombre: "Accesorio 3", precio: 90, img: "accesorio3.jpg" },
      { nombre: "Accesorio 4", precio: 70, img: "accesorio4.jpg" },
      { nombre: "Accesorio 5", precio: 30, img: "accesorio5.jpg" },
      { nombre: "Accesorio 6", precio: 50, img: "acceso6.jpg" },
      { nombre: "Accesorio 7", precio: 270, img: "Accesorios7.jpg" },
      { nombre: "Accesorio 8", precio: 150, img: "accesorios8.jpg" },
      { nombre: "Accesorio 9", precio: 100, img: "accesorios9.jpg" },
      { nombre: "Accesorio 10", precio: 350, img: "accesorios10.jpg" }
    ]
  };
  
  let total = 0;
  
  function mostrarProductos() {
    const categoria = document.getElementById("categoriaSelect").value;
    const productosDiv = document.getElementById("productos");
    const bienvenidaDiv = document.getElementById("seccion-bienvenida");
    let contenido = "";
  
    productosDiv.innerHTML = "";
    bienvenidaDiv.style.display = "none";
  
    if (categoria === "Bienvenida") {
      bienvenidaDiv.style.display = "block";
    } else if (productos[categoria]) {
      productos[categoria].forEach(producto => {
        contenido += `
          <div class="producto">
            <img src="${producto.img}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.precio})">Agregar</button>
          </div>
        `;
      });
      contenido += `<div style="text-align:center;"><button class="btn-atras" onclick="irAInicio()">Atrás</button></div>`;
      productosDiv.innerHTML = contenido;
    }
  }
  
  function agregarAlCarrito(precio) {
    total += precio;
    document.getElementById("totalAmount").innerText = total;
  }
  
  function irAInicio() {
    document.getElementById("categoriaSelect").value = "Bienvenida";
    mostrarProductos();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  


