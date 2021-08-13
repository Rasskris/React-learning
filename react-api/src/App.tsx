import React from 'react';
import { Route, useLocation, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.scss';
import { Home, About, RecipeDetails, NotFound } from './pages';
import { Header } from './components';

const App = (): JSX.Element => {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <div className="content">
        <TransitionGroup className="page">
          <CSSTransition key={location.key} classNames="page" timeout={300}>
            <Switch location={location}>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/details/:id">
                <RecipeDetails />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default App;
