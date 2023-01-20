import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;

  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
`;
