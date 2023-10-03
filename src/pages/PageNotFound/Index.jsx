import React from 'react';
import urls from '@constants/urls';

import { Container } from '@/styled';

import { Header, Link, LinkWrapper } from './styled';

function PageNotFound() {
  return (
    <Container>
      <Header>Page not found, please try again</Header>
      <LinkWrapper>
        <Link to={urls.home}>Go back to home page</Link>
      </LinkWrapper>
    </Container>
  );
}

export default PageNotFound;
