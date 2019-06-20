import typesData from '../../helpers/data/typesData';

const initTypes = (caetegoryId) => {
  typesData.loadTypesForCategories(caetegoryId)
    .then((types) => {
      console.error('all types', types);
    })
    .catch(err => console.error(err));
};

export default { initTypes };
