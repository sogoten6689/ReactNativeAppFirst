import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import { rootReducer } from '../reducer';

// middleware for create store
import middlewares from './middleware';
import { PERSIST_CONFIG } from './persist';

const persistedReducer = persistReducer(PERSIST_CONFIG, rootReducer);
const middleWareEnhancer = applyMiddleware(...middlewares);

export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(
  persistedReducer,
  composeWithDevTools(middleWareEnhancer),
);

export const persistor = persistStore(store);
