import styled from 'styled-components';

import { deviceWidth } from '../../constans/deviceWidth';

const { tablet, desktop } = deviceWidth;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: ${desktop + 20}px;

  @media (min-width: ${tablet}px) {
    padding: 0 30px;
  }
`;
