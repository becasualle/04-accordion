import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ id, title, info }) => {
  const [showAnswer, setshowAnswer] = useState(false);

  const toggleView = () => {
    setshowAnswer(!showAnswer);
  }

  console.log(showAnswer);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={toggleView} > {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
      </header>

      <p> {showAnswer ? info : ''} </p>
    </article>
  );
};

export default Question;
