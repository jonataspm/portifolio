import React, { useState, useEffect } from 'react';
import { ExperienceLI } from './style';

export const ExpiriencesBox = () => {
  return (
    <ExperienceLI>
        <img src="../../fitbanco.png" className='enterpriseAnimated' />
        <div>
            <h3>Atividades principais: </h3>
            <p>
            Liderança técnica, voltada a execução de atividades relacionados com Produtos Bancários, Especialmente 'cobrança de
            boleto' via CIP e CNAB 400. Gestão de pessoas e equipes de desenvolvimento de sistemas - Desenvolvimento de talentos.
            </p>
        </div>
    </ExperienceLI>
  );
}


