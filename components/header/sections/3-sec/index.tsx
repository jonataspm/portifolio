import React from 'react';
import { ThirdSectionComp } from './style';
import { CardKnow } from '../../../Icons/cardKnowledge';

class Knows {
  LanguageName: string;
  AlternativeTitle?: string;
  YearsWork?: string;
  Description: string;

  constructor(name: string, alt: string | undefined, yw: string | undefined, dscp: string) {
    this.LanguageName = name;
    this.AlternativeTitle = alt;
    this.YearsWork = yw;
    this.Description = dscp;
  }
}

const ary: Knows[] = [];

ary.push(new Knows('Dotnet', 'NetCore', '+2', 'Years Experience'));
ary.push(new Knows('Csharp', 'C#', '+2', 'Years Experience'));
ary.push(new Knows('Azuredevops', 'Azure', '+2', 'Years Experience'));
ary.push(new Knows('Microsoftsqlserver', 'SqlServer', '+2', 'Years Experience'));
ary.push(new Knows('Mongodb', 'MongoDB', '1', 'Years Experience'));
ary.push(new Knows('Docker', undefined, undefined, 'Only Studies'));
ary.push(new Knows('React', 'ReactJs', undefined, 'Only Studies'));
ary.push(new Knows('Typescript', 'TypeScript', undefined, 'Only Studies'));


export const ThirdSection = () => {
  return (
    <ThirdSectionComp>
      <h1>Knowledge</h1>
      <div className='cards-content'>
        {ary.map((item, index) => (
          <CardKnow
            key={index}
            Name={item.LanguageName}
            AlternativeName={item.AlternativeTitle}
            YearsWork={item.YearsWork}
            Description={item.Description}
          />
        ))}
      </div>
    </ThirdSectionComp>
  );
};
