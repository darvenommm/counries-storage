import styled from 'styled-components';

import { deviceWidth } from '../../../constans/deviceWidth';

export const Wrapper = styled.div`
  display: grid;

  margin-bottom: 20px;

  @media (min-width: ${deviceWidth.desktop}px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
`;
