import categoriesData from '../../helpers/data/categoriesData';
import util from '../../helpers/util';

const categoryCardBuilder = (categories) => {
  let domString = '';
  categories.forEach((category) => {
    domString += '<div class="col-4">';
    domString += `<div id='${category.id}' class="card p-2">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${category.name}</h5>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('cards-page', domString);
};


const initCategories = () => {
  categoriesData.loadCategories()
    .then((resp) => {
      categoryCardBuilder(resp.data.categories);
    })
    .catch(err => console.error('error from loadCategories', err));
};

export default { initCategories };
