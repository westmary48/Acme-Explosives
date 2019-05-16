import categoriesData from '../../helpers/data/categoriesData';
import typesData from '../../helpers/data/typesData';
import productsData from '../../helpers/data/productsData';

// import util from '../../helpers/util';

// const cardBuilder = (categories) => {
//   let domString = '';
//   categories.forEach((category) => {
//     domString += '<div class="col-4">';
//     domString += `<div id='${category.id}' class="card p-2">`;
//     domString += '<div class="card-body">';
//     domString += `<h5 class="card-title">${category.name}</h5>`;
//     domString += '</div>';
//     domString += '</div>';
//     domString += '</div>';
//   });
//   util.printToDom('cards-page', domString);
// };


const initCards = () => {
  categoriesData.loadCategories();
  typesData.loadTypes();
  productsData.productsData();
    .then((resp) => {
      console.error('resp', resp.data.categories);
    .then((resp) => {
      console.error('resp', resp.data.types);
    .then((resp) => {
      console.error('resp', resp.data.products);
    })
    .catch(err => console.error('error from cards', err));
};

export default { initCards };
