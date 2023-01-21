import styled from 'styled-components';

import { deviceWidth } from '../../../constans/deviceWidth';

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${deviceWidth.tablet}px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
