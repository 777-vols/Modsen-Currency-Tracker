import React from 'react';
import * as urls from '@constants/urls';

import { Container } from '../../styled';

import { LinkWrapper, PageNotFoundHeader, PageNotFoundLink } from './styled';

function PageNotFound() {
  return (
    <Container>
      <PageNotFoundHeader>Page not found, please try again</PageNotFoundHeader>
      <LinkWrapper>
        <PageNotFoundLink to={urls.home}>Go back to home page</PageNotFoundLink>
      </LinkWrapper>
    </Container>
  );
}

export default PageNotFound;
