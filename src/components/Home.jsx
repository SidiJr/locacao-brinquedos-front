import React from 'react';
import BaseCard from './UI/BaseCard';
import Section from './UI/Section';

function Home() {
  return (
    <>
      <Section className="p-4">
        <BaseCard className="w-full h-80" title="Dashboard"/>
      </Section>
      <Section className="flex gap-4 p-4 h-120">
        <BaseCard className="w-full h-full"/>
        <BaseCard className="w-full h-full"/>
      </Section>
    </>
  );
}

export default Home;