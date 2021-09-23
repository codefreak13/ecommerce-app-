import {call, takeEvery, put, all} from 'redux-saga/effects';
import Axios from 'axios';
import {
  login,
  fetchProducts,
  fetchProductsCategories,
  fetchProductsByCategory,
} from './reducers';
import {sagaActions} from './sagaActions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'https://fakestoreapi.com';

let callAPI = async ({url, method, data}) => {
  return await Axios({
    url,
    method,
    data,
  });
};

function* loginSaga({payload}) {
  try {
    let result = yield call(() =>
      callAPI({
        url: `${BASE_URL}/auth/login`,
        method: 'POST',
        data: {...payload},
      }),
    );
    AsyncStorage.setItem('token', result?.data?.token);
    yield put(login(result?.data?.token));
  } catch (e) {
    yield put({type: 'FETCH_FAILED'});
  }
}

function* fetchProductsSaga({payload: {sortType}}) {
  try {
    let result = yield call(() =>
      callAPI({url: `${BASE_URL}/products?sort=${sortType}`}),
    );
    yield put(fetchProducts(result.data));
  } catch (e) {
    yield put({type: 'FETCH_FAILED'});
  }
}

function* fetchProductsCategoriesSaga() {
  try {
    let result = yield call(() =>
      callAPI({url: `${BASE_URL}/products/categories`}),
    );
    yield put(fetchProductsCategories(result.data));
  } catch (e) {
    yield put({type: 'FETCH_FAILED'});
  }
}

function* fetchProductsByCategorySaga({payload: {categoryType, sortType}}) {
  try {
    let result = yield call(() =>
      callAPI({
        url: `${BASE_URL}/products/category/${categoryType}?sort=${sortType}`,
      }),
    );
    yield put(fetchProductsByCategory(result.data));
  } catch (e) {
    yield put({type: 'FETCH_FAILED'});
  }
}

export default function* rootSaga() {
  yield all([
    yield takeEvery(sagaActions.FETCH_PRODUCTS, fetchProductsSaga),
    yield takeEvery(
      sagaActions.FETCH_PRODUCTS_CATEGORY,
      fetchProductsCategoriesSaga,
    ),
    yield takeEvery(
      sagaActions.FETCH_PRODUCTS_BY_CATEGORY,
      fetchProductsByCategorySaga,
    ),
    yield takeEvery(sagaActions.USER_LOGIN, loginSaga),
  ]);
}
