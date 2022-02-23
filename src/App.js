import { useState, useMemo } from 'react';
import styled from 'styled-components';
import Card from './components/Card';
import doubleNumbers from './utils/doubleNumbers';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: 16px;
  margin-top: 50px;
`;

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const outputValue = useMemo(() => {
    if (inputValue.length <= 0) {
      return '';
    }
    return doubleNumbers(inputValue.split(','));
  }, [inputValue]);

  const handleSetInputValue = (value) => {
    setInputValue(value);
  };

  return (
    <Container>
      <Card
        title="Input"
        subtitle="Array"
        value={inputValue}
        onHandleChange={handleSetInputValue}
        data-testid="input-card"
      />
      <Card
        title="Output"
        subtitle="Double"
        value={outputValue}
        isReadOnly
        data-testid="output-card"
      />
    </Container>
  );
};

export default App;
