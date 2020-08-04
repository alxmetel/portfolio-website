import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './components/pageSections/Header/Header';
import Main from './components/pageSections/Main/Main';
import Footer from './components/pageSections/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App dark">
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;