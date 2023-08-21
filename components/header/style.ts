import React from 'react'
import styled from 'styled-components'

export const SectionNameDiv = styled.div`
margin-left:10%;
margin-top: 5%;
display: flex;
flex-direction: row;
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

  .infoContent{
    width: 10%;
    margin-right: 5%;
  }
}

`
