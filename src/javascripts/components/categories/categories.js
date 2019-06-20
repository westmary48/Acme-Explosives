import categoriesData from '../../helpers/data/categoriesData';
import util from '../../helpers/util';

const seeTypeDiv = (e) => {
  const boardId = e.target.closest('.card').id;
  console.error('you clicked a button!', boardId);
  document.getElementById('categories-page').classList.add('hide');
  document.getElementById('types-page').classList.remove('hide');
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
    domString += '<button class="btn btn-warning see-types">Types</button>';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('user-categories', domString);
  bindEvents();
};

const initCategories = () => {
  categoriesData.loadCategories()
    .then((resp) => {
      writeCategories(resp.data.categories);
    })
    .catch(err => console.error('error from loadCategories', err));
};

export default { initCategories };
