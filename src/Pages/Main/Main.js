import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Projects from '../Projects/Projects';

const Main = () => {
  return (
    <main className="page">
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/about' component={ About } />
        <Route path='/projects' component={ Projects } />
      </Switch>
    </main>
  )
}

export default Main;