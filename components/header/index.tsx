import React from 'react';
import { SectionNameDiv } from './style'
import { getYearsWorked } from '../../pages/api/getYeats';


export const Header = () => {
const [years, setYears] = React.useState(true);
const profileURL = 'https://www.linkedin.com/in/jonatasp/';
const projects = 4;

getYearsWorked(profileURL)
  .then(result => {
    setYears(result);
  })
  .catch(error => {
    console.error(error);
  });

 
  return (
    <SectionNameDiv>
      <section>
        <div className='line'>
          <h1 className='lineUp'>Hi, my name is Jonatas,</h1>
          <h1 className='lineUp'>and i'm a <b>FullStack Developer</b></h1>
        </div>

        <span>I've been programming for a while, come and follow my accomplishments</span>
        <br />
        <span>Enjoy!</span>

        <div className='headerInfos'> 
          <div className='infoContent'>
            <h1>{years}+</h1>
            <span>YEARS OF EXPERIENCE</span>
          </div>
          <div className='infoContent'>
            <h1>{projects}+</h1>
            <span>PROJECTS COMPLETEDS</span>
          </div>
        </div>
      </section>
    </SectionNameDiv>
  )
}
