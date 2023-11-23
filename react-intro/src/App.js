import React from 'react';
import Sidebar from './components/Sidebar/Sidebar/Sidebar';
import Header from './components/Sidebar/Header/Header';
import Main from './components/Sidebar/Main/Main';


const App = () => {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Main/>
    </div>
  );
};

export default App;