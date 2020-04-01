import authReducer from './auth/reducers';
import galleryReducer from './home/reducers';

export default ({ auth, product, gallery }, action) => ({
  auth: authReducer(auth, action),
  gallery: galleryReducer(gallery, action)
});