import styled from 'styled-components';

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: 0.1s linear;
  border-radius: 100%;
  ${(props) =>
    props.active &&
    `
     background: #ccc;
    `}
`;
