import { Timer } from './components/timer';
import { CeremonyLocation } from './components/ceremonyLocation';
import { Story } from './components/story';
import { Gift } from './components/gift';

const Home = () => {
  return (
    <main className='flex flex-col'>
      {/* ---------- Hero ---------- */}
      <header className='px-6 pt-20 pb-14 text-center bg-[radial-gradient(circle_at_50%_-10%,var(--color-sand),transparent_60%)]'>
        <p className='mb-5 font-sans text-xs font-medium uppercase tracking-[4px] text-accent'>
          Vamos nos casar
        </p>
        <h1 className='font-heading font-medium leading-none tracking-tight text-ink text-[clamp(48px,9vw,92px)]'>
          Carol
          <span className='mx-2 inline-block font-normal italic text-accent'>&amp;</span>
          Vitor
        </h1>

        <div className='mx-auto mt-7 flex items-center justify-center gap-3.5 text-muted'>
          <span className='h-px w-14 bg-line' />
          <span className='whitespace-nowrap font-sans text-xs uppercase tracking-[3px]'>
            Nosso Casamento
          </span>
          <span className='h-px w-14 bg-line' />
        </div>
      </header>

      <Timer />
      <CeremonyLocation />
      <Story />
      <Gift />

      {/* ---------- Footer ---------- */}
      <footer className='mt-auto border-t border-line px-6 pb-14 pt-10 text-center text-muted'>
        <p className='mb-1.5 font-heading text-[26px] text-ink'>Carol &amp; Vitor</p>
        <p className='text-[13px] tracking-wide'>
          Feito com amor para celebrar este dia tão especial.
        </p>
      </footer>
    </main>
  );
};

export { Home };
