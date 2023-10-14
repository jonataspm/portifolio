import { colors } from '@mui/material';
import React from 'react'
import styled from 'styled-components'

export const CardKnowComp = styled.div`
    padding: 10px;
    border: 1px solid var(--secondary-color);
    border-radius: 10px;
    
    width: 110px;
    height: 110px;
    text-align: center;
    perspective: 1000px;

    .divIcon {
        width: 50px;
        height: 50px; 
    }

    .Sides{
        position: absolute;
        backface-visibility: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 90px;
        color: white;
    }
    .FrontSide{
        b{margin-top: 8px; color:white;}
    }
    .BackSide{
        transform: rotateY(-180deg);

        .backValues{
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            height: 100%;
            h3{
                color:var(--third-color);
            };
        }
    }
    .card{
        position: relative;
        transition: transform 1s;
        transform-style: preserve-3d;
    }
    &:hover .card{
        transform: rotateY(-180deg);
    }

    &:hover{
        border: 1px solid var(--third-color);
    }

    transition: ease-in-out 1s;
`

