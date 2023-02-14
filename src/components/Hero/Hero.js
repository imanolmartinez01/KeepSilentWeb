import React from 'react';
import Link from 'next/link';
import {  NavLink } from './../Header/HeaderStyles';

import { Section  } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection , Img, SectionText} from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <Img src="/images/letrasKeepSilent.png" />
      <SectionText>We are a particular result of the society, we are culture, we are party.</SectionText>
      <Button ><Link href="#collective"><NavLink>Learn More</NavLink></Link></Button>
    </LeftSection>
  </Section>
);

export default Hero;