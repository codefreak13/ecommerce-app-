import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  data: [],
  categories: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProducts: (state, {payload}) => {
      state.data = payload;
      state.loading = false;
    },
    fetchProductsCategories: (state, {payload}) => {
      state.categories = payload;
    },
    fetchProductsByCategory: (state, {payload}) => {
      state.loading = true;
      state.data = payload;
      state.loading = false;
    },
  },
});

const {
  actions: {fetchProducts, fetchProductsCategories, fetchProductsByCategory},
} = productsSlice;

export {fetchProducts, fetchProductsCategories, fetchProductsByCategory};
export default productsSlice.reducer;
