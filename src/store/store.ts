import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import createWebStorageImport from 'redux-persist/lib/storage/createWebStorage';

import favoriteReducer from 'services/addToFavourite';
import { spellApi } from 'services/fetchSpell';

import themeReducer from './themeSlice';

const createWebStorage =
  (createWebStorageImport as unknown as { default?: typeof createWebStorageImport }).default ?? createWebStorageImport;
const storage = createWebStorage('local');
// Combine reducers
const reducers = combineReducers({
  favorites: favoriteReducer,
  theme: themeReducer,
  [spellApi.reducerPath]: spellApi.reducer,
});

// Configure persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorites'],
};

// Wrap reducers with persistReducer
const persistedReducer = persistReducer(persistConfig, reducers);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/PAUSE',
          'persist/PURGE',
          'persist/REGISTER',
          'persist/FLUSH',
        ],
      },
    }).concat(spellApi.middleware),
});

export type RootState = ReturnType<typeof reducers>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
