import React from 'react';
import NavBar from '../components/Navbar';
import TableView from '../components/Table';
import Footer from '../components/Footer';

const CoreTyriaPage = () => {
  return (
    <div>
      <NavBar />
      <TableView region="Core Tyria" />
      <Footer />
    </div>
  );
};

export default CoreTyriaPage;
