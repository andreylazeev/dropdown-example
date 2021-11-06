import React, {FC} from 'react';
import Dropdown from "./components/Dropdown";
import styled from "styled-components";

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
  return (
    <Wrapper>
      <Dropdown options={options} placeholder={'sasi'}/>
    </Wrapper>
  );
}

export default App;
