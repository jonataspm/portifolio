import React, { useState, useEffect } from 'react';
import { ExpiriencesBox } from '../../ExprienceProfile/exprencieProf';


export const SecondSection = () => {

  return (
    <section>
        <h1>Experience</h1>
        <div className='features'>
          <div className='bound'>
            <ul>
              <ExpiriencesBox/>
              <ExpiriencesBox/>
              <ExpiriencesBox/>
            </ul>
          </div>
        </div>
    </section>
  );
}
