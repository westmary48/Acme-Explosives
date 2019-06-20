// import categoriesData from '../../helpers/data/categoriesData';
// import typesData from '../../helpers/data/typesData';

// import util from '../../helpers/util';

// const cardBuilder = (arrayTest) => {
//   let domString = '';
//   arrayTest.forEach((category) => {
//     category.types.forEach((type) => {
//       domString += '<div class="col-4">';
//       domString += `<div id='${category.name}' class="card p-2">`;
//       domString += '<div class="card-body">';
//       domString += `<h5 class="card-title">${type.name}</h5>`;
//       domString += '</div>';
//       domString += '</div>';
//       domString += '</div>';
//     });
//   });
//   util.printToDom('cards-page', domString);
// };

// const initializeCard = () => {
//   categoriesData.loadCategories()
//     .then(resp => typesData.getTypesForCategories(resp.data.categories))
//     .then((catWithTypes) => {
//       cardBuilder(catWithTypes);
//     })
//     .catch(err => console.error('error from initializeCard request', err));
// };

// export default { initializeCard };
