import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;

  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);

  background-color: transparent;

  border: none;
  padding: 5px;

  svg {
    position: relative;
    top: -2px;

    margin-right: 5px;
  }
`;
