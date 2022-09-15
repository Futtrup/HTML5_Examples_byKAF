
import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import MyChart from "./components/MyChart";

const Wrapper = styled.div`
  text-align: center;
`

const App: React.FunctionComponent = () =>  {
  return (
  <div>
    <Global styles={css`
      body {
      background-color: #f1f1f1;
      color: #7d7d7d
    }`}/>

    <Wrapper>
      <h1>This is a simple chart example app</h1>
      <MyChart />
    </Wrapper>    

  </div>
  );
}

export default App
