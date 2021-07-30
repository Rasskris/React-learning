import React from 'react';
import { SearchBarContainer, CardsContainer } from './components';

function App(): JSX.Element {
  return (
    <div className="app">
      <SearchBarContainer />
      <CardsContainer />
    </div>
  );
}

export default App;
