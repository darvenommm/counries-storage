import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: var(--text-color);
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);

  padding: 5px;
`;
