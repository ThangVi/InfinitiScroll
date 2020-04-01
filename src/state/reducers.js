import authReducer from './auth/reducers';
import productReducer from './product/reducers';
import galleryReducer from './home/reducers';

export default ({ auth, product, gallery }, action) => ({
  auth: authReducer(auth, action),
  product: productReducer(product, action),
  gallery: galleryReducer(gallery, action)
});