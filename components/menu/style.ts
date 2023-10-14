import { colors } from '@mui/material';
import React from 'react'
import styled from 'styled-components'

export const MenuDiv = styled.div`

width: 100px;
height: 100vh;
display: flex;
align-items: center;
color: var(--secondary-color);

.side_menu_bar{
    position: fixed;
    right: 30px;
    top: 30px;

    width: 55px;
    height: 55px;
    border-radius: 50%;


    border: 1px solid var(--secondary-color);

    display: flex;
    align-items: center;
    justify-content: center;
    transition: .5s;
    z-index:99;
}

.side_menu{
    position: fixed;
    display: flex;
    flex-direction: column;
    height:min-content;

    gap: 20px;
    right: 30px;
    border: 1px solid var(--secondary-color);
    border-radius: 50px;
    padding: 20px 15px;
}

svg{
    cursor: pointer;

    &:hover{
        color:var(--third-color);
    }
}

.sideBar{
    position: fixed;
    top: 0;
    max-width: 350px;
    width: 100%;
    height: 100%;
    color: #fff;
    background-color: var(--background-color);

    transition: right 0.5s;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    gap: 20px;

    padding-top: 50px;
    padding-left: 40px;
    & div{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    svg{
        color: var(--third-color);
    }

    z-index: 2;
}

.hidden {
  right: -350px;
}

.visible {
  right: 0;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0); 
  z-index: 1;
  opacity: 0; 
  transition: ease-in-out 0.3s; 
  display: none;
}

.overlay.active {
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1; 
}

`
