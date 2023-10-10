import ErrorBoundary from '@components/ErrorBoundary';
import Loading from '@components/Loading';
import { getLocaleStorageItem } from '@helpers/localeStorageHelpers';
import { toggleTheme } from '@store/slices/ThemeSlice';
import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

const Layout = lazy(() => import('@components/Layout'));

function App() {
  const theme = useSelector((state) => state.themes.currentTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    if (getLocaleStorageItem('currentTheme') !== null)
      dispatch(toggleTheme(getLocaleStorageItem('currentTheme')));
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Layout />
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
