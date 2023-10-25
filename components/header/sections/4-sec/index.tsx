import React from 'react';
import { FourthSectionComp } from './style';
import uuidv4 from "react-uuid";
import CardProject from './comp/cardProject';
import { StackIcon } from './comp/stackicon';
import { TitleSection } from '../../../title-header';
import { SecondTitle } from '../../../styleds/styleds';



export const FourthSection = () => {

    let cards = [];
    
    let stacks: StackIcon[] = [];
    stacks.push(new StackIcon('React','blue'));
    stacks.push(new StackIcon('Javascript','yellow'));
    cards.push({ key: uuidv4(),  content: <CardProject Title='Titulo 1' Stacks={stacks} Image='' Description=''/>})
    cards.push({ key: uuidv4(),  content: <CardProject Title='Titulo 2' Stacks={stacks} Image='' Description=''/>})


  return (
    <FourthSectionComp>
      <TitleSection Name='Projects'/>
      <SecondTitle>My project <b>collection</b></SecondTitle>
      <div id='projects_content'>
        
      </div>
    </FourthSectionComp>
  )
};

