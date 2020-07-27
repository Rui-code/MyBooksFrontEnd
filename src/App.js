import React from 'react';
import './App.css';
import Sidebar from './sidebar/index';
import Upbar from './upbar/index';
import Detail from './details/index';
import Footer from './downbar/index';

function App() {
  return (
    <>
      <Upbar />
      <div className="middle">
        <Sidebar />
        <Detail />
      </div>
      <Footer />
    </>
  );
}

export default App;
