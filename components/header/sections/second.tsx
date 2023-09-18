import React, { useState, useEffect } from 'react';
import { SectionNameDiv } from '../style';
import { getYearsWorked } from '../../../pages/api/getYeats';
import { useSpring, animated } from 'react-spring';
import { ExpiriencesBox } from '../../ExprienceProfile/exprencieProf';

function Number({ n }:any):any {
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: n }, 
    delay: 200,
    config: { mass: 1, tension: 100, friction: 30 }, 
  });
  
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

export const SecondSection = () => {
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
        <h1>Experience</h1>
        <div className='features'>
          <div className='bound'>
            <ul>
              <ExpiriencesBox/>
              <ExpiriencesBox/>
              <ExpiriencesBox/>
            </ul>
          </div>
        </div>
    </section>
  );
}
