import styled from 'styled-components';

import { deviceWidth } from '../../../constans/deviceWidth';

export const Input = styled.input`
  background-color: var(--element-color);
  box-shadow: var(--shadow);

  width: 100%;
  margin-bottom: 30px;
  padding: 10px;
  border: none;

  @media (min-width: ${deviceWidth.tablet}px) {
    margin-bottom: 0;
    width: 250px;
  }
`;
