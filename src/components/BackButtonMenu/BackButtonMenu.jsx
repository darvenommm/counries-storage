import React from "react";

import { Link } from "../Link/Link";
import { rootPath } from "../../constans/routerPath";

import { AiOutlineArrowLeft } from 'react-icons/ai';

import { Wrapper } from "./elements/Wrapper";
import { Container } from "../Container/Container";
import { Button } from "../Button/Button";
import { Text } from "./elements/Text";

export const BackButtonMenu = () => {
  return (
    <Wrapper>
      <Container>
        <Link to={`${rootPath}`}>
          <Button type="button">
            <AiOutlineArrowLeft />
            <Text>Back</Text>
          </Button>
        </Link>
      </Container>
    </Wrapper>
  );
};
