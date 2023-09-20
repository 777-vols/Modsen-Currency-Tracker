import Loading from '@components/Loading/Index.jsx';
import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

const Layout = lazy(() => import('@components/Layout/Index.jsx'));

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
