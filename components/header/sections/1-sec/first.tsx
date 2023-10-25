import Reactfrom from 'react';
import { useSpring, animated } from 'react-spring';
import { TitleSection } from '../../../title-header';
import { Title } from '../../../styleds/styleds';

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
        <TitleSection Name='Home'/>
        <div className='line'>
          <Title className='lineUp'>Hi, call me Jonatas, I&apos;m a <b>BackEnd Developer</b></Title>
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
