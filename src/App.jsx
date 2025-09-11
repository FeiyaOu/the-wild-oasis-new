import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import Cabins from './pages/Cabins';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Bookings from './pages/Bookings';
import Users from './pages/Users';
import PageNotFound from './pages/PageNotFound';
import GlobalStyles from './styles/globalStyles';
import AppLayout from './ui/AppLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/account" element={<Account />} />
            <Route path="/cabins" element={<Cabins />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<Users />} />
            <Route path="/bookings" element={<Bookings />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
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
