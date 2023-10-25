import React from 'react';
import { SectionNameDiv } from './style';
import { FirstSection } from './sections/1-sec/first';
import { SecondSection } from './sections/2-sec/second';
import { ContactSection } from './sections/5-sec/contact';
import { ThirdSection } from './sections/3-sec';
import { FourthSection } from './sections/4-sec';
import { IntroductionSection } from './sections/1.2-sec/firstsec';

type HeaderProps = {
  innerRefs: {
    homeRef: React.RefObject<HTMLDivElement>;
    introductionRef: React.RefObject<HTMLDivElement>;
    workRef: React.RefObject<HTMLDivElement>;
    knowledgesRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
  };
};

export function Header({ innerRefs }: HeaderProps) {

  return (
    <SectionNameDiv id='boxBorder'>
      <div ref={innerRefs.homeRef}>
        <FirstSection />
      </div>

      <div ref={innerRefs.introductionRef}>
        <IntroductionSection/>
      </div>

      <div ref={innerRefs.workRef}>
        <SecondSection />
      </div>

      <div ref={innerRefs.knowledgesRef} >
        <ThirdSection />
      </div>

      <div ref={innerRefs.projectsRef}>
        <FourthSection  />
      </div>

      <div ref={innerRefs.contactRef}>
        <ContactSection />
      </div>

    </SectionNameDiv>
  );
}
