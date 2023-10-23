import React from 'react';
import { FourthSectionComp } from './style';
import uuidv4 from "react-uuid";
import CardProject from './comp/cardProject';
import { StackIcon } from './comp/stackicon';



export const FourthSection = () => {

    let cards = [];
    
    let stacks: StackIcon[] = [];
    stacks.push(new StackIcon('React','blue'));
    stacks.push(new StackIcon('Javascript','yellow'));
    cards.push({ key: uuidv4(),  content: <CardProject Title='Titulo 1' Stacks={stacks} Image='' Description=''/>})
    cards.push({ key: uuidv4(),  content: <CardProject Title='Titulo 2' Stacks={stacks} Image='' Description=''/>})


  return (
    <FourthSectionComp>
      <h1>Projects</h1>
      <div id='projects_content'>
        
      </div>
    </FourthSectionComp>
  )
};

