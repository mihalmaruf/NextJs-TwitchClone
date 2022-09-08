import React from 'react';
import Categories from './Categories';
import Hero from './Hero';
import IconBar from './Iconbar';
import LiveChannels from './LiveChannels';

const Main = () => {
  return (
    <div className='absolute left-[64px] xl:left-[220px]'>
        <Hero />
        <LiveChannels />
        <IconBar />
        <Categories />
    </div>
  )
}

export default Main