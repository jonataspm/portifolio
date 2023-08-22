import React, { useState, useEffect } from 'react';
import { SectionNameDiv } from '../style';
import { getYearsWorked } from '../../../pages/api/getYeats';
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
  const [years, setYears] = useState(0);
  const profileURL = 'https://www.linkedin.com/in/jonatasp/';
  const projects = 4;

  useEffect(() => {
    getYearsWorked(profileURL)
      .then(result => {
        // Assuming 'result' contains the number of years worked
        setYears(2); // Convert to string before setting
      })
      .catch(error => {
        console.error(error);
      });
  }, []); // Run once on component mount

  return (
    <section>
        <div className='line'>
          <h1 className='lineUp'>Hi, my name is Jonatas,</h1>
          <h1 className='lineUp'>and I'm a <b>FullStack Developer</b></h1>
        </div>

        <span>I've been programming for a while, come and follow my accomplishments</span>
        <br />
        <span>Enjoy!</span>

        <div className='headerInfos'> 
          <div className='infoContent'>
            <h1>
              <Number n={(projects-2)}/>+
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
}
