import React, { forwardRef } from 'react';
import { FourthSectionComp } from './style';
import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import uuidv4 from "react-uuid";
import Carroussel from './comp/carroussel';
import CardProject from './comp/cardProject';
import { StackIcon } from './comp/stackicon';
import ReactDOM from 'react-dom';


export const FourthSection = forwardRef((props, ref) => {

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
});

