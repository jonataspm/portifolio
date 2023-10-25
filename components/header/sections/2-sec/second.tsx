import React, { useState, useEffect, forwardRef } from 'react';
import { ExpiriencesBox } from '../../../ExprienceProfile/exprencieProf';
import { TitleSection } from '../../../title-header';
import { SecondTitle } from '../../../styleds/styleds';


export const SecondSection = () => {

  return (
    <section>
      <TitleSection Name='Experience'/>
      <SecondTitle>My <b>career</b> path</SecondTitle>
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
