import Header from '@components/Header/Index.jsx';
import * as urls from '@constants/urls';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Index.jsx';
import BankCard from './pages/BankCard/Index.jsx';
import Contact from './pages/Contact/Index.jsx';
import Home from './pages/Home/Index.jsx';
import Timeline from './pages/Timeline/Index.jsx';
import { AppWrapper } from './styled.js';

function App() {
  return (
    <AppWrapper>
      <Header />
      <Routes>
        <Route path={urls.home} element={<Home />} />
        <Route path={urls.timeline} element={<Timeline />} />
        <Route path={urls.bankCard} element={<BankCard />} />
        <Route path={urls.contact} element={<Contact />} />
      </Routes>
      <Footer />
    </AppWrapper>
  );
}

export default App;
