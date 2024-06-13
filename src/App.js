import React from 'react';
import './App.css';
import LeftSidebar from './components/LeftSidebar';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';
import LeftBar from './components/LeftBar';

function App() {
  return (
    <div className="app">
      <LeftBar />
      <LeftSidebar />
      <MainContent />
      <RightSidebar />
    </div>
  );
}

export default App;