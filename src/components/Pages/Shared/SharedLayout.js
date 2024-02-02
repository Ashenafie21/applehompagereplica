import React from 'react'
import { Outlet } from 'react-router-dom';

import Header from '../../Header/header';
import Footer from '../../Footer/Footer';

function SharedLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default SharedLayout;
