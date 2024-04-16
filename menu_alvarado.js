const container_contenido = document.getElementById('container_contenido');


//Crear variables para cada uno de los items del menu
const item_perfil = document.getElementById('item_perfil');
const item_inicio = document.getElementById('item_inicio');
const item_formulario = document.getElementById('item_formulario');
const item_inse = document.getElementById('item_inse');
const item_register = document.getElementById('item_register');
const item_precio = document.getElementById('item_precio');



//Inicio de Código que se va a ejecutar cuando haga clic en el
//menu-item del cliente
item_perfil.addEventListener('click', (event) => {
    event.preventDefault(); // 
  
    fetch('perfil.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
}); 

item_inicio.addEventListener('click', (event) => {
    event.preventDefault(); // 
  
    fetch('inicio.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
}); 


item_formulario.addEventListener('click', (event) => {
    event.preventDefault(); // 
  
    fetch('formulario.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
}); 

item_inse.addEventListener('click', (event) => {
    event.preventDefault(); // 
  
    fetch('inse.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
}); 

item_register.addEventListener('click', (event) => {
    event.preventDefault(); // s
  
    fetch('register.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
}); 

item_precio.addEventListener('click', (event) => {
    event.preventDefault(); // 
  
    fetch('precio.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
}); 









