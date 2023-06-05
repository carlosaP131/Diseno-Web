function mostrarTablas() {
    var inicio = parseInt(document.getElementById("inicio").value);
    var fin = parseInt(document.getElementById("fin").value);
  
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiamos el contenido anterior
  
    for (var j = inicio; j <= fin; j++) {
      var tablaDiv = document.createElement("div");
      tablaDiv.innerHTML = "<h2>Tabla de multiplicar del " + j + "</h2>";
      tablaDiv.innerHTML += "<ul>";
      for (var i = 1; i <= 10; i++) {
        tablaDiv.innerHTML += "<li>";
        tablaDiv.innerHTML += j + " x " + i + " = " + j * i;
        tablaDiv.innerHTML += "</li>";
      }
      tablaDiv.innerHTML += "</ul>";
      resultado.appendChild(tablaDiv);
    }
  }
  