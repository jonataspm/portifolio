import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { ExperienceLI } from './style';

export const ExpiriencesBox = () => {
  return (
    <ExperienceLI>
        <img src="../../fitbanco.png" className='enterpriseAnimated' alt='EnterpriseIcon'/>

        <div>
            <h3>Atividades principais: </h3>
            <p>
            Liderança técnica, voltada a execução de atividades relacionados com Produtos Bancários, Especialmente &apos;cobrança de
            boleto&apos; via CIP e CNAB 400. Gestão de pessoas e equipes de desenvolvimento de sistemas - Desenvolvimento de talentos.
            </p>
        </div>
    </ExperienceLI>
  );
}


