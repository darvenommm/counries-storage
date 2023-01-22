import React from 'react';

import { Wrapper } from './elements/Wrapper';
import { CountryItemWrapper } from './elements/CountryItemWrapper';
import { CountryItem } from './elements/CountryItem';

export const BorderCountries = ({ codes }) => {
  if (codes === null) {
    return (
      <>
        <p>
          <b>Border Countries:</b>
        </p>
        <p>none</p>
      </>
    );
  }

  const CountryItems = codes.map(code => (
    <CountryItemWrapper>
      <CountryItem code={code} />
    </CountryItemWrapper>
  ));

  return (
    <>
      <p>
        <b>Border Countries:</b>
      </p>
      <Wrapper>
        { CountryItems }
      </Wrapper>
    </>

  );
};
