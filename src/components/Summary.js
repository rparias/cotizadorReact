import React from 'react';
import styled from '@emotion/styled';
import { capitalizeFirstLetter } from '../helper';

const ContainerSummary = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #ffffff;
  margin-top: 1rem;
`;

function Summary({ data }) {
  const { brand, year, plan } = data;

  const isInvalidData = () => {
    return brand.trim() === '' || year.trim() === '' || plan.trim() === '';
  };

  if (isInvalidData()) {
    return null;
  }

  return (
    <ContainerSummary>
      <h2>Resumen de cotización</h2>
      <ul>
        <li>Marca: {capitalizeFirstLetter(brand)}</li>
        <li>Plan: {capitalizeFirstLetter(plan)}</li>
        <li>Año del auto: {year}</li>
      </ul>
    </ContainerSummary>
  );
}

export default Summary;
