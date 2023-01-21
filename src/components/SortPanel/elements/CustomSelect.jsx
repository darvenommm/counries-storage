import Select from 'react-select';

import { useDispatch } from 'react-redux';
import { setNewRegionAction } from '../../../store/filters/filtersActions';

import styled from 'styled-components';

import { regionsForSelect } from '../../../constans/regions';

import { deviceWidth } from '../../../constans/deviceWidth';

const selectStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'var(--element-color)',
    border: 'var(--element-color)',
    boxShadow: 'var(--shadow)',
  }),
  singleValue: (styles) => ({
    ...styles,
    color: 'var(--text-color)',
  }),
  option: (styles) => ({
    ...styles,
    backgroundColor: 'var(--element-color)',
    color: 'var(--text-color)',
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: 'var(--element-color)',
    boxShadow: 'var(--shadow)',
  }),
};

const SelectContainer = styled.div`
  @media (min-width: ${deviceWidth.tablet}px) {
    width: 400px;
  }
`;

export const CustomSelect = () => {
  const dispatch = useDispatch();

  const changeSelectHanlder = (choice) => (
    dispatch(setNewRegionAction(choice.value))
  );

  return (
    <SelectContainer>
      <Select
        options={regionsForSelect}
        defaultValue={regionsForSelect[0]}
        styles={selectStyles}
        onChange={changeSelectHanlder}
      />
    </SelectContainer>
  );
};
