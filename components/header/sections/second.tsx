import React, { useState, useEffect, forwardRef } from 'react';
import { ExpiriencesBox } from '../../ExprienceProfile/exprencieProf';


export const SecondSection = forwardRef((props, ref) => {

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
});
