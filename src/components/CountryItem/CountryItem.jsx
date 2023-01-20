import React from 'react'

import { Wrapper } from './elements/Wrapper';
import { Image } from './elements/Image';
import { Title } from './elements/Title';
import { CountryProperty } from './elements/CountryProperty';
import { InnerWrapper } from './elements/InnerWrapper';

export const CountryItem = ({
  name,
  population,
  region,
  capital,
  imageSrc: src,
}) => {
  return (
    <Wrapper>
      <Image
        src={src}
        alt={`It's the flag of ${name}`}
        width="300"
        height="200"
        loading="lazy"
      />
      <Title>{ name }</Title>
      <InnerWrapper>
        <CountryProperty>
          <b>Population:</b>
          { population }
        </CountryProperty>
        <CountryProperty>
          <b>Region:</b>
          { region }
        </CountryProperty>
        <CountryProperty>
          <b>Capital:</b>
          {
            capital.length === 0
              ? 'none'
              : capital.join(', ')
          }
        </CountryProperty>
      </InnerWrapper>
    </Wrapper>
  );
};
