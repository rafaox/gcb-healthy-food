import React from 'react';

import { Banner } from '../components/Banner';
import { Blog } from '../components/Blog';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Membership } from '../components/Membership';
import { Recipes } from '../components/Recipes';
import { Services } from '../components/Services';

export default function Home() {
  return (
    <>
      <Header />

      <Banner />
      <Recipes />
      <Services />
      <Blog />
      <Membership />

      <Footer />
    </>
  )
}
