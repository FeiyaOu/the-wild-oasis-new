import { BrowserRouter } from 'react-router-dom';

function App() {
  return <BrowserRouter></BrowserRouter>;
}
``;

export default App;

// import styled from "styled-components";
// import GlobalStyles from "./styles/globalStyles";
// import Button from "./ui/Button";
// import Heading from "./ui/Heading";
// import Row from "./ui/Row";

// const Input = styled.input`
//   border: solid 1px green;
//   padding: 1.2rem 1.4rem;
//   border-radius: 5px;
//   display: block;
//   margin-top: 2rem;
// `;
// const StyledApp = styled.main`
//   background-color: pink;
//   padding: 1.6rem;
// `;

// function App() {
//   return (
//     <>
//       <GlobalStyles />
//       <StyledApp>
//         <Row type="horizontal">
//           <Heading as="h1">Hello World!</Heading>
//           <div>
//           <Heading as="h2">Check in and out</Heading>
//           <Button variation="primary" size="medium" onClick={() => alert("check in")}>Check in</Button>
//           <Button variation="secondary" size="small" onClick={() => alert("check out")}>Check out</Button>
//           </div>
//         </Row>
//         <Row >
//           <Heading as="h3">Form</Heading>
//           <form>
//           <Input type="number" placeholder="number of guests" />
//           <Input type="number" placeholder="number of guests" />
//           </form>
//           </Row>
//       </StyledApp>
//     </>
//   );
// }

// export default App;
