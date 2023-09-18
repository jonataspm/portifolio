

import React from 'react'
import styled from 'styled-components'

export const ExperienceLI = styled.li`

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 65px;
    min-height: 47px;

    
    img{
        max-width: 50px;
        max-height: 50px;
    }

    .enterpriseAnimated{
        animation:scale-up-horizontal-center 1s;
    } 
    @keyframes enterpriseAnimated{
        0%{
            transform:scaleX(.2)
        }
        100%{
            transform:scaleX(1)
        }
    }

`
