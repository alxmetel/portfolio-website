import React from 'react';
import './Main.scss';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/PageHome/PageHome';
import PageIndexProjects from '../../pages/PageIndexProjects/PageIndexProjects';

import PageAcademyJournal from '../../pages/projects/PageAcademyJournal/PageAcademyJournal';
import PageLegalLiga from '../../pages/projects/PageLegalLiga/PageLegalLiga';
import PageFinancialLiga from '../../pages/projects/PageBusinessLiga/PageBusinessLiga';
import PageBusinessLiga from '../../pages/projects/PageBusinessLiga/PageBusinessLiga';
import PageLigaBook from '../../pages/projects/PageLigaBook/PageLigaBook';
import PageOdin from '../../pages/projects/PageOdin/PageOdin';
import PageMyPortfolio from '../../pages/projects/PageMyPortfolio/PageMyPortfolio';

const Main = () => {
  return (
    <main className="page-main-section">
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/projects' component={ PageIndexProjects } />
        <Route exact path='/projects/academy-journal' component={ PageAcademyJournal } />
        <Route exact path='/projects/legal-liga' component={ PageLegalLiga } />
        <Route exact path='/projects/financial-liga' component={ PageFinancialLiga } />
        <Route exact path='/projects/business-liga' component={ PageBusinessLiga } />
        <Route exact path='/projects/liga-book' component={ PageLigaBook } />
        <Route exact path='/projects/odin' component={ PageOdin } />
        <Route exact path='/projects/my-portfolio' component={ PageMyPortfolio } />
      </Switch>
    </main>
  )
}

export default Main;