import React, { useState } from 'react';
import './App.scss';
import { Form, Card } from './components';
import { IFormDataState } from './interfaces';

const App = (): JSX.Element => {
  const [formDataArray, setFormDataArray] = useState<IFormDataState[]>([]);

  return (
    <div className="App">
      <Form setFormDataArray={setFormDataArray} />
      <section className="card-container">
        {formDataArray.map((formData) => (
          <Card key={formData.email} cardData={formData} />
        ))}
      </section>
    </div>
  );
};

export default App;
