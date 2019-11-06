import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import DashboardContent from './components/dashboardContent';
import DashboardHeader from './components/dashboardHeader';


// import { Layout, Avatar } from 'antd';

// const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
          <DashboardHeader />
          <Navbar />
          <DashboardContent />
      
    </div>
  );
}

export default App;
