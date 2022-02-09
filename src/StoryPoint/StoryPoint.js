import { useState } from 'react';
import React, { useRef } from 'react';
import StoryPointModel from '../StoryPointModel';
import StoryPointResult from '../StoryPointResult/StoryPointResult';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './StoryPoint.scss';

function StoryPoint() {
  const storyPointResultRef = useRef(null);
  const [result, setResult] = useState(0);
  function handleOption(e) {
    setResult(e.target.innerHTML);
  }

  return (
    <div className='storypoint'>
      <Header />
      <div className='storypoint__options'>
        {StoryPointModel.map((options, key) => (
          <button
            onClick={(e) => handleOption(e)}
            key={key}
            className='storypoint__option'
          >
            {options}
          </button>
        ))}
      </div>
      {result > 0 ? (
        <StoryPointResult ref={storyPointResultRef} result={result} />
      ) : (
        ''
      )}
      <Footer />
    </div>
  );
}

export default StoryPoint;
