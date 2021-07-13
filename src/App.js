import React from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return (
    <main>
      <section className="container">
        <h3>Questions And Answers About Login</h3>
        <section className="info">
          {data.map(question =>
            <SingleQuestion key={question.id} {...question} />
          )}

        </section>
      </section>
    </main>
  );
}

export default App;

// for every item in data array display single question
// depending on state value you show or hide element
