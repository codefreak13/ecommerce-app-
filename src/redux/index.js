import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';

import {productsSlice, cartSlice, authSlice, persistConfig} from './reducers';
import saga from './saga';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productsSlice,
    cart: persistReducer(persistConfig, cartSlice),
  },
  middleware,
});

sagaMiddleware.run(saga);

export const persistor = persistStore(store);
export default store;
