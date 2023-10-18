import React from 'react';
import { SectionNameDiv } from './style';
import { FirstSection } from './sections/first';
import { SecondSection } from './sections/second';
import { ContactSection } from './sections/5-sec/contact';
import { ThirdSection } from './sections/3-sec';
import { FourthSection } from './sections/4-sec';

export const Header = () => {
  return (
    <SectionNameDiv id='boxBorder'>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <ContactSection/>
    </SectionNameDiv>
  );
}
