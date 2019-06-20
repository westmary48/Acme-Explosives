import typesData from '../../helpers/data/typesData';
import util from '../../helpers/util';

const bindEvents = () => {
  document.getElementById('toCategoriesBtn').addEventListener('click', () => {
    document.getElementById('categories-page').classList.remove('hide');
    document.getElementById('types-page').classList.add('hide');
  });
};

const writeTypes = (types) => {
  let domString = '';
  types.forEach((type) => {
    domString += '<div class="col-3">';
    domString += `<div id='${type.name}' class="card p-2">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${type.description}</h5>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('types-on-categories', domString);
};

const initTypes = (categoryId) => {
  bindEvents();
  typesData.loadTypesForCategories(categoryId)
    .then((types) => {
      writeTypes(types);
    })
    .catch(err => console.error(err));
};

export default { initTypes };
