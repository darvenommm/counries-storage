import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { Container } from '../Container/Container';
import { Wrapper } from './elements/Wrapper';
import { Image } from './elements/Image';
import { TextWrapper } from './elements/TextWrapper';
import { TextList } from './elements/TextList';
import { Title } from './elements/Title';
import { TextItem } from './elements/TextItem';
import { Info } from '../Info/Info';
import { BorderCountries } from '../BorderCountries/BorderCountries';

import { fetchCountryByName } from '../../api/fetchCountryByName';

export const CountryInfo = () => {
  const [country, setCountry] = useState(null);

  const { name } = useParams();

  useEffect(() => {
    fetchCountryByName(name)
      .then(response => setCountry(response.data[0]))
      .catch(error => setCountry(error));
  }, [name]);

  if (country === null) {
    return (
      <Info>Loading...</Info>
    );
  }

  if (country instanceof Error) {
    return (
      <Info>{ country.name }: { country.message }</Info>
    );
  }

  const imageSrc = country.flag ? country.flag : 'none';
  const officialName = country.name ? country.name : 'none';
  const nativeName = country.nativeName ? country.nativeName : 'none';
  const population = country.population ? country.population : 'none';
  const region = country.region ? country.region : 'none';
  const subregion = country.subregion ? country.subregion : 'none';
  const capital = country.capital ? country.capital : 'none';
  const topLevelDomain = country.topLevelDomain[0] ? country.topLevelDomain[0] : 'none';

  const createStringWithComma = (arr) => (
    arr.reduce((result, currenc) => (
      result + currenc.name + ', '
    ), '')
    .slice(0, -2)
  );

  const currencies = country.currencies ? createStringWithComma(country.currencies) : 'none';

  const languages = country.languages ? createStringWithComma(country.languages) : 'none';

  const codes = country.borders ? country.borders : null;

  return (
    <Container>
      <Wrapper>
        <Image src={imageSrc} alt={`It is flag of ${officialName}.`} />
        <TextWrapper>
          <Title>{ officialName }</Title>
          <Wrapper>
            <TextList>
              <TextItem>
                <b>Native Name:</b> { nativeName }
              </TextItem>
              <TextItem>
                <b>Population:</b> { population }
              </TextItem>
              <TextItem>
                <b>Region:</b> { region }
              </TextItem>
              <TextItem>
                <b>Sum Region:</b> { subregion }
              </TextItem>
              <TextItem>
                <b>Capital:</b> { capital }
              </TextItem>
            </TextList>
            <TextList>
              <TextItem>
                <b>Top Level Domain:</b> { topLevelDomain }
              </TextItem>
              <TextItem>
                <b>Currencies:</b> { currencies }
              </TextItem>
              <TextItem>
                <b>Languages:</b> { languages }
              </TextItem>
            </TextList>
          </Wrapper>
          <BorderCountries codes={codes} />
        </TextWrapper>
      </Wrapper>
    </Container>
  );
};
