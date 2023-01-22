import Select from 'react-select';

import { useSelector, useDispatch } from 'react-redux';
import { setNewRegionAction } from '../../../store/filters/filtersActions';
import { regionFilterSelector } from '../../../store/filters/filtersSelectors';

import styled from 'styled-components';

import { regionsForSelect } from '../../../constans/regions';

import { deviceWidth } from '../../../constans/deviceWidth';

const selectStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'var(--element-color)',
    border: 'var(--element-color)',
    boxShadow: 'var(--shadow)',
    transition: 'none',
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
  const choosedRegion = useSelector(regionFilterSelector);

  const changeSelectHanlder = (choice) => (
    dispatch(setNewRegionAction(choice.value))
  );

  const indexChoosedRegion = regionsForSelect.findIndex(region => (
    region.value === choosedRegion
  ));

  return (
    <SelectContainer>
      <Select
        options={regionsForSelect}
        // Works only with passing an index to an array
        defaultValue={regionsForSelect[indexChoosedRegion]}
        styles={selectStyles}
        onChange={changeSelectHanlder}
      />
    </SelectContainer>
  );
};
