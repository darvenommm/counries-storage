import React  from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setNewNameAction } from '../../store/filters/filtersActions';
import { nameFilterSelector } from '../../store/filters/filtersSelectors';

import { OuterWrapper } from './elements/OuterWrapper';
import { Container } from '../Container/Container';
import { InnerWrapper } from './elements/InnerWrapper';
import { Input } from './elements/Input';
import { CustomSelect } from './elements/CustomSelect';

export const SortPanel = () => {
  const dispatch = useDispatch();

  const startNameValue = useSelector(nameFilterSelector);

  const changeInputHandler = (event) => (
    dispatch(setNewNameAction(event.target.value))
  );

  return (
    <OuterWrapper>
      <Container>
        <InnerWrapper>
          <Input
            placeholder="Write country name for searhing..."
            defaultValue={startNameValue}
            onChange={changeInputHandler}
          />
          <CustomSelect />
        </InnerWrapper>
      </Container>
    </OuterWrapper>
  );
};
