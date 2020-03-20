import React, { useState } from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Form from './components/Form';
import Summary from './components/Summary';
import Result from './components/Result';
import Spinner from './components/Spinner';

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

  const [isLoading, updateIsLoading] = useState(false);

  const { quotation, data } = summary;

  return (
    <Container>
      <Header title="Cotizador de seguros" />
      <ContainerForm>
        <Form updateSummary={updateSummary} updateIsLoading={updateIsLoading} />

        {isLoading ? (
          <Spinner />
        ) : (
          <div>
            <Summary data={data} />
            <Result quotation={quotation} />
          </div>
        )}
      </ContainerForm>
    </Container>
  );
}

export default App;
