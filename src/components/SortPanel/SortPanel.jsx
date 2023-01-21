import React  from 'react';

import { useDispatch } from 'react-redux';
import { setNewNameAction } from '../../store/filters/filtersActions';

import { OuterWrapper } from './elements/OuterWrapper';
import { Container } from '../Container/Container';
import { InnerWrapper } from './elements/InnerWrapper';
import { Input } from './elements/Input';
import { CustomSelect } from './elements/CustomSelect';

export const SortPanel = () => {
  const dispatch = useDispatch();

  const changeInputHandler = (event) => (
    dispatch(setNewNameAction(event.target.value))
  );

  return (
    <OuterWrapper>
      <Container>
        <InnerWrapper>
          <Input
            placeholder="Write country name for searhing..."
            onChange={changeInputHandler}
          />
          <CustomSelect />
        </InnerWrapper>
      </Container>
    </OuterWrapper>
  );
};
