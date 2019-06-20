import categoriesData from '../../helpers/data/categoriesData';
import typesData from '../../helpers/data/typesData';
import util from '../../helpers/util';
import types from '../types/types';

const seeTypeDiv = (e) => {
  const categoryId = e.target.closest('.card').id;
  document.getElementById('categories-page').classList.add('hide');
  document.getElementById('types-page').classList.remove('hide');
  types.initTypes(categoryId);
};

const bindEvents = () => {
  const allButtons = document.getElementsByClassName('see-types');
  for (let i = 0; i < allButtons.length; i += 1) {
    allButtons[i].addEventListener('click', seeTypeDiv);
  }
};

const writeCategories = (categories) => {
  let domString = '';
  categories.forEach((category) => {
    domString += '<div class="col-3">';
    domString += `<div id='${category.id}' class="card p-2">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${category.name}</h5>`;
    domString += `<button class="btn btn-warning see-types">${category.types.length} Types</button>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('user-categories', domString);
  bindEvents();
};

const initCategories = () => {
  categoriesData.loadCategories()
    .then(resp => typesData.getTypesForEachCategory(resp.data.categories))
    .then((categoriesWithTypes) => {
      writeCategories(categoriesWithTypes);
    })
    .catch(err => console.error('error from loadCategories', err));
};

export default { initCategories };
