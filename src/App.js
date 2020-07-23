import React from 'react';
import './App.css';
import Sidebar from './sidebar/index';
import Upbar from './upbar/index';
import Detail from './details/index';

function App() {
  return (
    <>
      <Upbar />
      <div className="middle">
        <Sidebar />
        <Detail />
      </div>
    </>
  );
}

export default App;
