import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { connect } from 'react-redux';
import {
  storeProjectsData,
  storeTechData
} from './actions';

import Header from './components/pageSections/Header/Header';
import Main from './components/pageSections/Main/Main';
import Footer from './components/pageSections/Footer/Footer';

const App = props => {

  useEffect(() => {
    if (Object.keys(props.projectsData).length === 0) {
      fetchProjectsData();
    }
  }, [props.projectsData]);

  useEffect(() => {
    if (Object.keys(props.techData).length === 0) {
      fetchTechnologiesData();
    }
  }, [props.techData]);

  function fetchProjectsData() {
    const url = 'https://portfolio-website-18313.firebaseio.com/projects.json';

    fetch(url).then(response => response.json()).then(data => {
      props.storeProjectsData(data);
    })
  }

  function fetchTechnologiesData() {
    const url = 'https://portfolio-website-18313.firebaseio.com/technologies.json';

    fetch(url).then(response => response.json()).then(data => {
      props.storeTechData(data);
    })
  }

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

const mapStateToProps = state => ({
  projectsData: state.portfolioData.projectsData,
  techData: state.portfolioData.technologiesData
});

const mapDispatchToProps = {
  storeProjectsData,
  storeTechData
};

export default connect(mapStateToProps, mapDispatchToProps)(App);