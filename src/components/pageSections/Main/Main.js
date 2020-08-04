import React from 'react';
import './Main.scss';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/PageHome/PageHome';
import PageIndexProjects from '../../pages/PageIndexProjects/PageIndexProjects';
import PageJurliga from '../../pages/projects/PageJurliga/PageJurliga';

const Main = () => {
  return (
    <main className="page-main-section">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={PageIndexProjects} />
        <Route exact path='/projects/jurliga' component={PageJurliga} />
      </Switch>
    </main>
  )
}

export default Main;