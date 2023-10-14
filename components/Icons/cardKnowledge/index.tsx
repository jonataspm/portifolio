import React from 'react';
import { CardKnowComp } from './style';
import { DivIcons } from './devincon';

interface CardKnowProps {

  Name: string;
  AlternativeName?: string;
  YearsWork?: string;
  Description: string;
}

export const CardKnow = (props: CardKnowProps) => {
  const DevIcon = DivIcons[props.Name];

  return (
    <CardKnowComp>
        <div className='card'>

          <div className='FrontSide Sides'>
            <DevIcon className='divIcon' />
            <b>{props.AlternativeName ?? props.Name}</b>
          </div>

          <div className='BackSide Sides'>
            <div className='backValues'>
              {props.YearsWork != null && <h3>{props.YearsWork}</h3>}
              <span>{props.Description}</span>
            </div>
          </div>

        </div>
    </CardKnowComp>
  );
};
