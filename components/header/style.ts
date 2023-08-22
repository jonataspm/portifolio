import React from 'react'
import styled from 'styled-components'

export const SectionNameDiv = styled.div`
margin: 5% 5% 0% 10%;
display: flex;
flex-direction: column;

h1{
  transition: all;
  font-size: 80px;
  animation: taglineAnimation 2ms 5 iteration-count direction fill-mode;
}

b{
  color: var(--third-color);
}

.line {
  overflow: hidden;
  margin-bottom: 40px;
}
.lineUp {
  animation: 3s anim-lineUp ease-out;
}
@keyframes anim-lineUp {
  0% {
    opacity: 0;
    transform: translateY(80%);
  }
  20% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

.headerInfos{
  display: flex;
  flex-direction: row;
  margin-top: 20%;
  .infoContent{
    width: 10%;
    margin-right: 5%;
    margin-bottom: 20%;

    h1{
      flex-direction: row;
      display: flex;
    }
  }
}

#boxBorder {
    height: 3em;
    overflow: hidden;
    }
#boxBorder:hover {
height: 5em;
overflow: hidden;
}
#boxBorder:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 100px; 
    bottom: 10%;
    background-image: linear-gradient(to top, rgba(255,255,255,1), rgba(256,256,256,0));   
}

`
