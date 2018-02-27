var productsTemplate = document.getElementById('productsTemplate').innerHTML;
var template = Handlebars.compile(productsTemplate);


// ---------------------------- BOTONES PARA CARGAR PRODUCTOS SEGUN CATEGORIA
var vintageBtn = document.getElementById('vintageBtn');
vintageBtn.addEventListener('click', showVintage);

var homeDecoBtn = document.getElementById('homeDecoBtn');
homeDecoBtn.addEventListener('click', showDeco);

var artBtn = document.getElementById('artBtn');
artBtn.addEventListener('click', showArt);

var techBtn = document.getElementById('techBtn');
techBtn.addEventListener('click', showTech);

var booksBtn = document.getElementById('booksBtn');
booksBtn.addEventListener('click', showBooks);

var adultsBtn = document.getElementById('adultsBtn');
adultsBtn.addEventListener('click', showAdults);

// ---------------------------- FUNCIONES QUE CARGAN CONTENIDO
function showVintage() {
  document.getElementById('app').innerHTML = '';
  var data = fetch('https://api.mercadolibre.com/sites/MLC/search?q=vintage')
    .then(response => response.json())
  
    .then(data => {
      let productsData;
      
      for (let i = 0; i < data.results.length; i++) {
        productsData = template({
          decoHome: [
            {decoHome: data.results[i].title}],
          thumb: [
            {thumbnail: data.results[i].thumbnail}],
          price: [
            {price: data.results[i].price}],
          id: [
            {id: data.results[i].id}] 
        });
        document.getElementById('app').innerHTML += productsData;
      };
    });
}

function showDeco() {
  document.getElementById('app').innerHTML = '';
  var data = fetch('https://api.mercadolibre.com/sites/MLC/search?q=hogar')
    .then(response => response.json())
  
    .then(data => {
      let productsData;
      for (let i = 0; i < data.results.length; i++) {
        productsData = template({
          decoHome: [
            {decoHome: data.results[i].title}],
          thumb: [
            {thumbnail: data.results[i].thumbnail}],
          available: [
            {available: data.results[i].available_quantity}],
          price: [
            {price: data.results[i].price}],
          id: [
            {id: data.results[i].id}] 
        });
        document.getElementById('app').innerHTML += productsData;
      };
    });
}

function showArt() {
  document.getElementById('app').innerHTML = '';
  var data = fetch('https://api.mercadolibre.com/sites/MLC/search?q=arte')
    .then(response => response.json())
  
    .then(data => {
      let productsData;
      for (let i = 0; i < data.results.length; i++) {
        productsData = template({
          decoHome: [
            {decoHome: data.results[i].title}],
          thumb: [
            {thumbnail: data.results[i].thumbnail}],
          available: [
            {available: data.results[i].available_quantity}],
          price: [
            {price: data.results[i].price}],
          id: [
            {id: data.results[i].id}] 
        });
        document.getElementById('app').innerHTML += productsData;
      };
    });
}

function showTech() {
  document.getElementById('app').innerHTML = '';
  var data = fetch('https://api.mercadolibre.com/sites/MLC/search?q=tecnologia')
    .then(response => response.json())
  
    .then(data => {
      let productsData;
      for (let i = 0; i < data.results.length; i++) {
        productsData = template({
          decoHome: [
            {decoHome: data.results[i].title}],
          thumb: [
            {thumbnail: data.results[i].thumbnail}],
          available: [
            {available: data.results[i].available_quantity}],
          price: [
            {price: data.results[i].price}],
          id: [
            {id: data.results[i].id}] 
        });
        document.getElementById('app').innerHTML += productsData;
      };
    });
}

function showBooks() {
  document.getElementById('app').innerHTML = '';
  var data = fetch('https://api.mercadolibre.com/sites/MLC/search?q=books')
    .then(response => response.json())
  
    .then(data => {
      let productsData;
      for (let i = 0; i < data.results.length; i++) {
        productsData = template({
          decoHome: [
            {decoHome: data.results[i].title}],
          thumb: [
            {thumbnail: data.results[i].thumbnail}],
          available: [
            {available: data.results[i].available_quantity}],
          price: [
            {price: data.results[i].price}],
          id: [
            {id: data.results[i].id}]          
        });
        document.getElementById('app').innerHTML += productsData;
      };
    });
}

function showAdults() {
  document.getElementById('app').innerHTML = '';
  var data = fetch('https://api.mercadolibre.com/sites/MLC/search?q=31%20minutos')
    .then(response => response.json())
  
    .then(data => {
      let productsData;
      for (let i = 0; i < data.results.length; i++) {
        productsData = template({
          decoHome: [
            {decoHome: data.results[i].title}],
          thumb: [
            {thumbnail: data.results[i].thumbnail}],
          available: [
            {available: data.results[i].available_quantity}],
          price: [
            {price: data.results[i].price}],
          id: [
            {id: data.results[i].id}]          
        });
        document.getElementById('app').innerHTML += productsData;
      };
    });
}