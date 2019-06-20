// import typesData from '../../helpers/data/typesData';
// import util from '../../helpers/util';

// const bindEvents = () => {
//   document.getElementById('toCategoriesBtn').addEventListener('click', () => {
//     document.getElementById('categories-page').classList.remove('hide');
//     document.getElementById('types-page').classList.add('hide');
//   });
// };

// const writeTypes = (types) => {
//   let domString = '';
//   types.forEach((type) => {
//     domString += `<div>${type.name}</div>`;
//   });
//   util.printToDom('types-on-categories', domString);
// };

// const initTypes = (categoryId) => {
//   bindEvents();
//   typesData.loadTypesForCategory(categoryId)
//     .then((types) => {
//       writeTypes(types);
//     })
//     .catch(err => console.error(err));
// };

// export default { initTypes };
