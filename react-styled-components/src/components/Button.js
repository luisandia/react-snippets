import React from 'react';
import styled, { css } from 'styled-components';

import { Wrapper, fadeIn } from './styled';



const StyledBtn = styled.button`
  padding: 1rem 1.5rem;
  font-size:1.8rem;
  color :#fff;
  outline:none;
  border:none;
  margin-bottom:1rem;
  background-color:#333;
  ${ ({ primary }) => (primary &&
    css`
    color:red;
    background-color:${({ bgColor }) => bgColor}
  `)};

  &:hover {
    color:white;
    background-color:palevioletred;
  }

  @media ${ ({ theme }) => theme.mediaQueries['bellow-768']}{
    font-size:0.4rem;
    color:blue;
  }

  .someClass {
    color:blue;
  }
`;

const SuperBtn = styled(StyledBtn)`
  font-size:2.5rem;
  animation: 2s ${fadeIn} ease-in;
`;

const Button = ({ primary, children }) => {
  return (
    <Wrapper>
      <SuperBtn primary={primary}>{children}
        <p className="someClass">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat aperiam, saepe praesentium at debitis dolor, accusamus placeat laboriosam officiis inventore cupiditate numquam atque odio, quasi voluptate magni asperiores unde veniam.</p>
      </SuperBtn>
    </Wrapper>
  )
}

export default Button;