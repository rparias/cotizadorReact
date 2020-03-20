import React, { useState } from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Form from './components/Form';
import Summary from './components/Summary';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContainerForm = styled.div`
  background-color: #ffffff;
  padding: 3rem;
`;

function App() {
  const [summary, updateSummary] = useState({
    quotation: 0,
    data: {
      brand: '',
      year: '',
      plan: ''
    }
  });

  const { data } = summary;

  return (
    <Container>
      <Header title="Cotizador de seguros" />
      <ContainerForm>
        <Form updateSummary={updateSummary} />
        <Summary data={data} />
      </ContainerForm>
    </Container>
  );
}

export default App;
