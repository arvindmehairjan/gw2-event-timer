import React from 'react';
import NavBar from '../components/Navbar';
import Table from '../components/Table';
import Footer from '../components/Footer';
import EventBtn from '../components/EventBtn';

const CoreTyriaPage = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-white-500 text-black flex items-center justify-center flex-col">
      <EventBtn/>

        <div className="text-center py-5">
          <h1 className="text-3xl font-bold mb-1">Core Tyria Events</h1>
        </div>
      </div>
      <Table region="Core Tyria" />
      <Footer />
    </div>
  );
};

export default CoreTyriaPage;
