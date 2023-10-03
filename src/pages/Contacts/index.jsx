import React, { useMemo } from 'react';

import { Container } from '@/styled';

import config from './config';
import { Item, StyledSpan, Wrapper } from './styled';

function Contacts() {
  const contactsItems = useMemo(
    () =>
      config.map(({ id, content }) => (
        <Item key={id}>
          <StyledSpan>{content}</StyledSpan>
        </Item>
      )),
    [config]
  );
  return (
    <section>
      <Container>
        <Wrapper>{contactsItems}</Wrapper>
      </Container>
    </section>
  );
}

export default Contacts;
