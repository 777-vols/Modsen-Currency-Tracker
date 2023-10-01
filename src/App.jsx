import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import Loading from '@components/Loading';
import { ThemeProvider } from 'styled-components';

const Layout = lazy(() => import('@components/Layout'));

function App() {
  const theme = useSelector((state) => state.themes.currentTheme);
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loading />}>
        <Layout />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
