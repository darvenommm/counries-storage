import styled from 'styled-components';

import { deviceWidth } from '../../../constans/deviceWidth';

export const TextList = styled.ul`
  padding: 0;
  margin: 0;
  margin-bottom: 40px;
  list-style: none;

  @media (min-width: ${deviceWidth.desktop}px) {
    margin-bottom: 0;
  }
`;
