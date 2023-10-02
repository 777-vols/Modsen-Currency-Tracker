import React, { useMemo } from 'react';

import { Container } from '@/styled';

import config from './config';
import { ContactItem, ContactSpan, ContactsWrapper } from './styled';

function Contacts() {
  const contactsItems = useMemo(
    () =>
      config.map((contactItem) => (
        <ContactItem key={contactItem.id}>
          <ContactSpan>{contactItem.content}</ContactSpan>
        </ContactItem>
      )),
    [config]
  );
  return (
    <section>
      <Container>
        <ContactsWrapper>{contactsItems}</ContactsWrapper>
      </Container>
    </section>
  );
}

export default Contacts;
