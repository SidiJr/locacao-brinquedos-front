import React from 'react';
import BaseCard from './UI/Cards/BaseCard';
import Collapsible from './UI/Collapsibles/Collapsible';
import ValueCard from './UI/Cards/ValueCard';
import Section from './UI/Section';

function Home() {
  return (
    <>
      <Section className="p-4">
        <BaseCard className="flex w-full h-80 p-4 gap-4" title="Dashboard">
          <ValueCard title="Clientes cadastrados" value={4612}/>
          <ValueCard title="Brinquedos disponíveis" value={142}/>
          <ValueCard title="Locações ativas" value={38}/>
          <ValueCard title="Locações agendadas" value={62}/>
        </BaseCard>
      </Section>
      <Section className="flex gap-4 p-4 h-min">
      <BaseCard className="flex flex-col p-2 gap-2 w-full h-min">
        <Collapsible title="Clientes" className="w-full h-min"></Collapsible>
        <Collapsible title="Brinquedos" className="w-full h-min"></Collapsible>
        <Collapsible title="Locações" className="w-full h-min"></Collapsible>
        <Collapsible title="Pagamentos" className="w-full h-min"></Collapsible>
      </BaseCard>
      </Section>
    </>
  );
}

export default Home;