import React from 'react';

import { Container } from '../../styled';

import { ContactItem, Contacts, ContactSpan } from './styled';

function Contact() {
  return (
    <section>
      <Container>
        <Contacts>
          <ContactItem>
            <ContactSpan>Phone number: +375291096785</ContactSpan>
          </ContactItem>
          <ContactItem>
            <ContactSpan>Email: currency-tracker@mail.ru</ContactSpan>
          </ContactItem>
          <ContactItem>
            <ContactSpan>Adress: Belarus, Minsk, st. Revolutionary</ContactSpan>
          </ContactItem>
          <ContactItem>
            <ContactSpan>Socials: Telegram</ContactSpan>
          </ContactItem>
        </Contacts>
      </Container>
    </section>
  );
}

export default Contact;
