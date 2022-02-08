import React, { forwardRef, useEffect } from 'react';
import './StoryPointResult.scss';

const StoryPointResult = forwardRef((props, ref) => {
  useEffect(() => {
    scrollSmoothHandler(ref);
  });

  const scrollSmoothHandler = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={ref} className='storypointresult'>
      {props.result}
    </div>
  );
});

export default StoryPointResult;
