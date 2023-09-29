import React, { useState, useEffect } from 'react';
import { SectionNameDiv } from './style';
import { getYearsWorked } from '../../pages/api/getYeats';
import { useSpring, animated } from 'react-spring';
import { FirstSection } from './sections/first';
import { SecondSection } from './sections/second';
import { ContactSection } from './sections/contact';

export const Header = () => {
  return (
    <SectionNameDiv id='boxBorder'>
      <FirstSection/>
      <SecondSection/>
      <ContactSection/>
    </SectionNameDiv>
  );
}
