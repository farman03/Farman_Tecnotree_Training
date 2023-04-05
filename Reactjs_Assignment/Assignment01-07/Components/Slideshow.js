

import React, { useState, useEffect } from 'react';

function Slideshow(props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((index + 1) % props.images.length);
    }, props.displayTime);
    return () => clearTimeout(timer);
  }, [index, props]);

  return (
    <div>
      <img src={props.images[index]} alt={`Slide ${index}`} />
    </div>
  );
}

export default Slideshow;
