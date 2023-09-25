import { configureStore } from '@reduxjs/toolkit';

import themesReducer from './slices/ThemeSlice';

const store = configureStore({
  reducer: {
    themes: themesReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

export default store;
