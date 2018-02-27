// -------------------------------------- API MERCADO LIBRE
// ------------------------------MUESTRA INFO DE PRODUCTOS

const accessToken = 'APP_USR-8189733489067517-022707-815285de0a64dbe771d33f0539e5cf43__J_H__-239442426';
document.addEventListener('click', function(e) {
  if (e.target.id === 'view_product') {
    let dataID = $(e.target).data('id');
    getProductInfo(dataID);
  }
});

function getProductInfo(productID) {
  fetch(`https://api.mercadolibre.com/items/${productID}?access_token=${accessToken}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      fillTemplate(data);
      $('#productModal').modal();
    });
}

// ---------------------------------- AGREGA EL TEMPLATE

function fillTemplate(data) {
  let rawTemplate = document.getElementById('product-template').innerHTML;
  let compiledTemplate = Handlebars.compile(rawTemplate);
  let generatedHTML = compiledTemplate(data);

  const app = document.getElementById('here');
  app.innerHTML = generatedHTML;
  console.log(data);
}