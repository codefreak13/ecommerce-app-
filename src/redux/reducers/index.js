import authSlice, {login, logout} from './Auth';
import productsSlice, {
  fetchProducts,
  fetchProductsCategories,
  fetchProductsByCategory,
} from './Products';
import cartSlice, {add, remove, persistConfig} from './Cart';

export {
  authSlice,
  login,
  logout,
  productsSlice,
  fetchProducts,
  fetchProductsCategories,
  fetchProductsByCategory,
  cartSlice,
  add,
  remove,
  persistConfig,
};
