import typesData from '../../helpers/data/typesData';

const initTypes = () => {
  typesData.loadTypes()
    .then((resp) => {
      console.error('resp', resp.data.types);
    })
    .catch(err => console.error('error from load types', err));
};

export default { initTypes };
