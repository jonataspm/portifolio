import React, { useState, useEffect, forwardRef } from 'react';
import { ExpiriencesBox } from '../../ExprienceProfile/exprencieProf';
import { TitleSection } from '../../title-header';


export const SecondSection = () => {

  return (
    <section>
      <TitleSection Name='Experience'/>
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
};
