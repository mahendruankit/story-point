import { useState } from 'react';
import StoryPointModel from '../StoryPointModel';
import StoryPointResult from '../StoryPointResult/StoryPointResult';
import Footer from '../Footer/Footer';
import './StoryPoint.scss';

function StoryPoint() {
  const [result, setResult] = useState(1);
  function handleOption(e) {
    setResult(e.target.innerHTML);
  }

  return (
    <div className='storypoint'>
      <div className='storypoint__header'>Story Point</div>
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
      {result ? <StoryPointResult result={result} /> : ''}
      <Footer />
    </div>
  );
}

export default StoryPoint;
