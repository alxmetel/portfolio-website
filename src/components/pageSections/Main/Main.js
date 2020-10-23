import React from 'react';
import './Main.scss';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/PageHome/PageHome';
import PageIndexProjects from '../../pages/PageIndexProjects/PageIndexProjects';

import PageScientificJournal from '../../pages/projects/PageScientificJournal/PageScientificJournal';
import PageLegalNews from '../../pages/projects/PageLegalNews/PageLegalNews';
import PageAccountingNews from '../../pages/projects/PageAccountingNews/PageAccountingNews';
import PageBusinessNews from '../../pages/projects/PageBusinessNews/PageBusinessNews';
import PageLawCatalogue from '../../pages/projects/PageLawCatalogue/PageLawCatalogue';
import PageCOC from '../../pages/projects/PageCOC/PageCOC';
import PageRestaurantCRM from '../../pages/projects/PageRestaurantCRM/PageRestaurantCRM';
import PagePortfolio from '../../pages/projects/PagePortfolio/PagePortfolio';

const Main = () => {
  return (
    <main className="page-main-section">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={PageIndexProjects} />
        <Route exact path='/projects/scientific-journal-website' component={PageScientificJournal} />
        <Route exact path='/projects/legal-news-website' component={PageLegalNews} />
        <Route exact path='/projects/accounting-news-website' component={PageAccountingNews} />
        <Route exact path='/projects/business-news-website' component={PageBusinessNews} />
        <Route exact path='/projects/law-catalogue-website' component={PageLawCatalogue} />
        <Route exact path='/projects/coc' component={PageCOC} />
        <Route exact path='/projects/restaurant-crm' component={PageRestaurantCRM} />
        <Route exact path='/projects/portfolio' component={PagePortfolio} />
      </Switch>
    </main>
  )
}

export default Main;