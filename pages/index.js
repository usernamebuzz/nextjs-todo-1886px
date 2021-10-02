import styled, { createGlobalStyle } from "styled-components";
import Header from "./src/components/Header.js";
import Todo from "./src/components/todo/Todo";

const GlobalStyle = createGlobalStyle`
  *{  
    box-sizing: border-box;
    background-color : #d7e3fc;
    font-family: "consolas"
  }
  html {
    font-size : 10px;
    
  }
  body {
    width: 100%;
    margin: 0;
  }

`;

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#abc4ff"
          fillOpacity="1"
          d="M0,128L48,133.3C96,139,192,149,288,170.7C384,192,480,224,576,240C672,256,768,256,864,224C960,192,1056,128,1152,122.7C1248,117,1344,171,1392,197.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <Todo />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

export default App;
