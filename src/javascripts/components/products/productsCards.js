import productsData from '../../helpers/data/productsData';

// import util from '../../helpers/util';

// const cardBuilder = (products) => {
//   let domString = '';
//   products.forEach((product) => {
//     domString += '<div class="col-4">';
//     domString += `<div id='${product.id}' class="card p-2">`;
//     domString += '<div class="card-body">';
//     domString += `<h5 class="card-title">${product.name}</h5>`;
//     domString += '</div>';
//     domString += '</div>';
//     domString += '</div>';
//   });
//   util.printToDom('cards-page', domString);
// };

const initProducts = () => {
  productsData.loadProducts()
    .then((resp) => {
      console.error('resp', resp.data.products);
    })
    .catch(err => console.error('error from load products', err));
};

export default { initProducts };
