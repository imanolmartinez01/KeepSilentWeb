import React from 'react';
import { AiFillYoutube, AiFillInstagram } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:34697853453">+34 697 85 34 53</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:keepsilent.soy@gmail.com">
            keepsilent.soy@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating the concept of partying.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons target="_blank" href="https://www.youtube.com/@keepsilent5117/videos">
            <AiFillYoutube size="3rem" />
          </SocialIcons>
          <SocialIcons target="_blank" href="https://www.instagram.com/keepsilent.soy/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
