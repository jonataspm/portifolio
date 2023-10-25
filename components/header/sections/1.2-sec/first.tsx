import Reactfrom from 'react';
import { TitleSection } from '../../../title-header';
import { Paragraph, SecondTitle } from '../../../styleds/styleds';

export const IntroductionSection = () => {


  return (
    <section>
        <TitleSection Name='Introduction'/>
       
        <SecondTitle>
          The journey of a good programmer always begins as a <b>Software Bricklayer</b>
        </SecondTitle>
        
        <Paragraph>
          Technical leader in banking technology with a strong focus on boletos. 
          My journey at FitBank has been characterized by continuous technical enhancement and inspirational leadership. 
          I serve as a Technical Leader, specializing in banking products such as 'boleto collection' through CIP and CNAB 400. 
          My leadership drives teams and ensures delivery excellence, while my expertise spans C#, JS, MVC, .Net, RESTful APIs, and microservices architecture.
        </Paragraph>

      </section>
  );
};
