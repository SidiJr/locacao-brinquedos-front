import React from 'react';
import BaseCard from './UI/Cards/BaseCard';
import Collapsible from './UI/Collapsibles/Collapsible';
import ValueCard from './UI/Cards/ValueCard';
import Section from './UI/Section';
import BaseList from './ListElements/BaseList';
import { ListProvider } from '../contexts/ListContext';

function Home() {
  return (
    <>
      <Section className="p-4">
        <BaseCard className="flex w-full h-80 p-4 gap-4" title="Dashboard">
          <ValueCard title="Clientes cadastrados" baseRoute="/clientes" />
          <ValueCard title="Brinquedos disponíveis" baseRoute="/brinquedos" />
          <ValueCard title="Locações ativas" baseRoute="/locacoes" />
          <ValueCard title="Locações agendadas" startValue={0} />
        </BaseCard>
      </Section>
      <Section className="flex gap-4 p-4 h-min">
        <BaseCard className="flex flex-col p-2 gap-2 w-full h-min">

          <Collapsible title="Clientes" className="w-full h-min">
            <ListProvider>
              <BaseList baseRoute="/clientes" fields={["id", "nome"]} canEdit={false} />
            </ListProvider>
          </Collapsible>

          <Collapsible title="Brinquedos" className="w-full h-min">
            <ListProvider>
              <BaseList baseRoute="/brinquedos" fields={["id", "nome"]} canEdit={false} />
            </ListProvider>
          </Collapsible>

          <Collapsible title="Locações" className="w-full h-min">
            <ListProvider>
              <BaseList baseRoute="/locacoes" fields={["id"]} canEdit={false} />
            </ListProvider>
          </Collapsible>

          <Collapsible title="Pagamentos" className="w-full h-min">
            <ListProvider>
              <BaseList baseRoute="/pagamentos" fields={["id"]} canEdit={false} />
            </ListProvider>
          </Collapsible>
          
        </BaseCard>
      </Section>
    </>
  );
}

export default Home;