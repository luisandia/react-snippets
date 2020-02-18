import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import Button from './components/Button';


const MainWrapper = styled.section`
  width:100%;
  max-width:1400px;
  /* margin: 0 auto; */
  display:flex;
  flex-direction:column;
`;

const PaginationWrapper = styled.div`
  display:flex;
  width:100%;
  justify-content:${({ page }) => {
    if (page === 'first') return 'flex-end';
    else if (page === 'middle')
      return 'space-between';
    else return 'flex-start';
  }}
`;

const Link = styled.a.attrs(props => ({
  target: '_blank'
}))`
  color:violet;
  font-size:1.5rem;
`;


function App() {
  return (
    <MainWrapper>
      <Button primary children='My button' />

      <PaginationWrapper>
        <Button>Page 5</Button>
        <Button>Page 6</Button>
      </PaginationWrapper>

      <Link href="http://www.google.com">ONe Linke</Link>
      <Link href="http://www.google.com">other Linke</Link>
    </MainWrapper>
  );
}

export default App;
