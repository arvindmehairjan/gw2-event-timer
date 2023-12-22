import React from 'react';
import NavBar from '../components/Navbar';
import TableView from '../components/Table';
import Footer from '../components/Footer';
import EventBtn from '../components/EventBtn';

const LivingWorldPage = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-white-500 text-black flex items-center justify-center flex-col"> {/* Added flex-col for vertical alignment */}
      <EventBtn/>

        <div className="text-center py-5">
          <h1 className="text-3xl font-bold mb-1">Living World Events</h1>
        </div>
      </div>
      <TableView region="Living World" />
      <Footer />
    </div>
  );
};

export default LivingWorldPage;
