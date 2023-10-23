import React, { useState, useEffect, forwardRef } from 'react';
import { useSpring, animated } from 'react-spring';

function Number({ n }:any):any {
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: n }, 
    delay: 200,
    config: { mass: 1, tension: 100, friction: 30 }, 
  });
  
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

export const FirstSection = () => {
  const profileURL = 'https://www.linkedin.com/in/jonatasp/';
  const years = 2
  const projects = 4;

  return (
    <section>
        <div className='line'>
          <h1 className='lineUp'>Hi, my name is Jonatas,</h1>
          <h1 className='lineUp'>and I&apos;m a <b>BackEnd Developer</b></h1>
        </div>

        <span>trying to become a <b>Fullstack</b> 😭</span>
        <br />
        <span>Enjoy!</span>

        <div className='headerInfos'> 
          <div className='infoContent'>
            <h1>
              <Number n={(years)}/>+
            </h1>
            <span>YEARS OF EXPERIENCE</span>
          </div>
          <div className='infoContent'>
            <h1>
              <Number n={(projects)}/>+
            </h1>
            <span>PROJECTS COMPLETED</span>
          </div>
        </div>
      </section>
  );
};
