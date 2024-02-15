import React from "react";
import Typed from "typed.js";

const Hero = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Healthy.', 'Well.', 'Fit.'],
      typeSpeed: 100,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  });
  return (
      <>
      Stay <span ref={el} />
      </>
        
  );
};
export default Hero;