import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ id, title, info }) => {
  const [showAnswer, setshowAnswer] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        {/* if showanswer iis true show minus icon, otherwise plus icon */}
        <button className="btn" onClick={() => setshowAnswer(!showAnswer)}> {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />} </button>
      </header>
      {/* if show answer is true show paragraph */}
      {showAnswer && <p>{info}</p>}
    </article>
  );
};

export default Question;
