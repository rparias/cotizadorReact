import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const QuotationResult = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const QuotationText = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

function Result({ quotation }) {
  if (quotation === 0)
    return <Message>Elige marca, año y tipo de seguro</Message>;

  return (
    <QuotationResult>
      <TransitionGroup component={null} className="result">
        <CSSTransition
          classNames="result"
          key={quotation}
          timeout={{ enter: 5, exit: 5 }}
        >
          <QuotationText>El total es ${quotation}</QuotationText>
        </CSSTransition>
      </TransitionGroup>
    </QuotationResult>
  );
}

export default Result;
