import React, { useState } from 'react';
import styled from '@emotion/styled';

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;
  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

function Form() {
  const [data, updateData] = useState({
    brand: '',
    year: '',
    plan: ''
  });

  const handleOnChange = e => {
    updateData({
      ...data,
      [e.target.name]: [e.target.value]
    });
    console.log([e.target.value]);
  };

  const { brand, year, plan } = data;

  return (
    <form>
      <Field>
        <Label>Marca</Label>
        <Select name="brand" value={brand} onChange={handleOnChange}>
          <option value="">-- Seleccione --</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Field>

      <Field>
        <Label>Año</Label>
        <Select name="year" value={year} onChange={handleOnChange}>
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>

      <Field>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === 'basico'}
          onChange={handleOnChange}
        />{' '}
        Básico
        <InputRadio
          type="radio"
          name="plan"
          value="completo"
          checked={plan === 'completo'}
          onChange={handleOnChange}
        />{' '}
        Completo
      </Field>

      <Button type="button">Cotizar</Button>
    </form>
  );
}

export default Form;
