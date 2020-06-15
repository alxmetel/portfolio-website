import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import Main from './Pages/Main/Main';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
