import styled from 'styled-components';

import { deviceWidth } from './../../../constans/deviceWidth';

export const Image = styled.img`
  display: block;

  box-shadow: var(--shadow);

  width: 100%;
  height: auto;
  margin-bottom: 30px;

  @media (min-width: ${deviceWidth.tablet}px) {
    margin-bottom: 0;
  }
`;
