import React from 'react';

function Summary({ data }) {
  const { brand, year, plan } = data;

  const isInvalidData = () => {
    return brand.trim() === '' || year.trim() === '' || plan.trim() === '';
  };

  if (isInvalidData()) {
    return null;
  }

  return (
    <div>
      <h2>Resumen de cotización</h2>
      <ul>
        <li>Marca:</li>
        <li>Plan:</li>
        <li>Año del auto:</li>
      </ul>
    </div>
  );
}

export default Summary;
