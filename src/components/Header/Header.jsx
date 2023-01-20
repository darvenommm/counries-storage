import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setNewThemeAction } from '../../store/theme/themeActions';
import { themeSelector } from '../../store/theme/themeSelectors';

import { OuterWrapper } from './elements/OuterWrapper';
import { Container } from '../Container/Container';
import { InnerWrapper } from './elements/InnerWrapper';
import { HeaderLink } from './elements/HeaderLink';
import { Button } from './elements/Button';

import { IoMoonOutline, IoMoon } from "react-icons/io5";

import { LIGHT_THEME, DARK_THEME } from '../../constans/themes';

import { capitalize } from '../../helpers/uppercase';

export const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector(themeSelector);

  const findOppositeTheme = theme =>
    theme === LIGHT_THEME
      ? DARK_THEME
      : LIGHT_THEME;

  const clickButtonHanlder = () => {
    dispatch(
      setNewThemeAction(
        findOppositeTheme(theme),
      ),
    );
  };

  const buttonText = `${capitalize(findOppositeTheme(theme))} Theme`
  const buttonIcon = theme === LIGHT_THEME ? <IoMoonOutline /> : <IoMoon />;

  return (
    <OuterWrapper>
      <Container>
        <InnerWrapper>
          <HeaderLink to="/">
            Where in the world!
          </HeaderLink>
          <Button
            onClick={clickButtonHanlder}
            type="button"
          >
            { buttonIcon }
            { buttonText }
          </Button>
        </InnerWrapper>
      </Container>
    </OuterWrapper>
  );
};
