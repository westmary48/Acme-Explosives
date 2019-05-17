import categories from './components/categories/categories';
import '../styles/main.scss';
import types from './components/types/types';
import products from './components/products/productsCards';

const init = () => {
  categories.initCategories();
  types.initTypes();
  products.initProducts();
};
init();
