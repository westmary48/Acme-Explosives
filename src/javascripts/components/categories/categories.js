import categoriesData from '../../helpers/data/categoriesData';

const initCategories = () => {
  categoriesData.loadCategories()
    .then((resp) => {
      console.error('resp', resp.data.categories);
    })
    .catch(err => console.error('error from loadCategories', err));
};

export default { initCategories };
