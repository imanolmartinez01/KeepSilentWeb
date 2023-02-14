import VideoHero from '../components/VideoHero/VideoHero';
import Hero from '../components/Hero/Hero';
import Players from '../components/Players/Players';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import Podcasts from '../components/Podcasts/Podcasts';
import React from 'react'
import Products from '../components/Products/Products';


const Home = () => {
  return (
    <Layout>
      <VideoHero />
      <Hero />
      <Timeline />
      <Podcasts />
      {/* <Technologies />
      <Experience /> */}
      <Players />
      <Products />
      {/* <Acomplishments /> */}
    </Layout>
  );
};

export default Home;
