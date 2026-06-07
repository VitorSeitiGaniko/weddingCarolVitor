import { Banner, Timer, Story, Gift, CeremonyLocation } from './components';

const Home = () => {
  return (
    <main className='flex flex-col'>
      <section className='mb-14'>
        <div className='mx-auto flex items-center justify-center gap-3.5 text-muted'>
          <span className='h-px w-14 bg-line' />
          <span className='whitespace-nowrap font-sans text-xs uppercase tracking-[3px]'>
            Nosso Casamento
          </span>
          <span className='h-px w-14 bg-line' />
        </div>
      </section>

      <Banner />
      <Timer />
      <Story />
      <Gift />
      <CeremonyLocation />
    </main>
  );
};

export { Home };
