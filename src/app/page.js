import React from 'react';
import ProductsGrid from '@/app/components/ProductsGrid/ProductsGrid';
import HomeHero from '@/app/components/HomeHero/HomeHero';
import Marker from '@/app/components/Marker/Marker';

export default function Home() {

  return (
    <div className='px-12'>
      <HomeHero />
      { <ProductsGrid /> }
      {<Marker />}
    </div>
  );
}