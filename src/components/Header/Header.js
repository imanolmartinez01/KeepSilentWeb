import Link from 'next/link';
import React from 'react';
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { DiCodeigniter } from 'react-icons/di';

import { Container, Span, Div1, Div2, Div3, NavLink, SocialIcons, Img, ImgKeep } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '15px' }} href="">
        <Img src='/images/logoSoloCara.png' /><ImgKeep src='/images/letrasKeepSilentLogo.png' />
        </a>
      </Link>
    </Div1>
    <Div2>
    <li>
        <Link href="#collective">
          <NavLink>Collective</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#podcasts">
          <NavLink>Podcasts</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#players">
          <NavLink>Players</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>     
    </Div2>
    <Div3>
      <SocialIcons target="_blank" href="https://www.instagram.com/keepsilent.soy/">
        <AiFillYoutube size="3rem" />
      </SocialIcons>
      <SocialIcons target="_blank" href="https://www.youtube.com/@keepsilent5117/videos">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
