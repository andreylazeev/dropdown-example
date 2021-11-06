import { useEffect } from 'react';
import {FC, useState} from 'react';
import styled from "styled-components";

import Dropdown from "./components/Dropdown";
import { Value } from './interfaces';

const options = [
  {value: 1, label: 'test'},
  {value: 2, label: 'test 2'},
  {value: 3, label: 'test 3'},
  {value: 4, label: 'test 4'},
]

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100vh;
`

const App: FC = () => {
  const [firstValue, setFirstValue] = useState<Value>();
  const [secondValue, setSecondValue] = useState<Value>(2);

  useEffect(() => {
    console.log('First:', firstValue);
  }, [firstValue])
  useEffect(() => {
    console.log('Second:', secondValue);
  }, [secondValue])

  return (
    <Wrapper>
      <Dropdown
        options={options}
        selected={firstValue}
        onSelectedChange={setFirstValue}
      />
      <Dropdown
        style={{ marginLeft: 16 }}
        options={options}
        placeholder="sam sasi"
        selected={secondValue}
        onSelectedChange={setSecondValue}
      />
    </Wrapper>
  );
}

export default App;
