import React from 'react';
import Link from 'next/link';
import {  NavLink } from '../Header/HeaderStyles';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, SectionVideo, DivVideo } from './VideoHeroStyles';
import VideoBg from "reactjs-videobg";

const VideoHero = (props) => (
  <SectionVideo>
    <VideoBg>
      <VideoBg.Source src='images/videoartistico.mp4' type="video/mp4" />
    </VideoBg>
  </SectionVideo>
  //   <video disablePictureInPicture className='videoTag' autoPlay loop muted>
  //       <source src='images/videoartistico.mp4' type='video/mp4' />
  //   </video>

);

export default VideoHero;