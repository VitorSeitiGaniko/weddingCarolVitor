/* ----------------------------------------------------------------
   Edite aqui os dados do local da cerimônia.
   ---------------------------------------------------------------- */
const LOCAL = {
  nome: 'Recanto Real',
  endereco: 'Via Berlim, 625 - Chácaras Novo Hamburgo, Campo Limpo Paulista - SP',
  horarioChegada: '16h00',
  horarioCerimonia: '16h30',
  // Endereço usado para abrir no Google Maps
  mapaQuery: 'Recanto Real, Via Berlim, 625 - Chácaras Novo Hamburgo, Campo Limpo Paulista - SP',
};

const PinIcon = () => (
  <svg
    width='22'
    height='22'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    aria-hidden='true'
  >
    <path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' />
    <circle cx='12' cy='10' r='3' />
  </svg>
);

const ClockIcon = () => (
  <svg
    width='22'
    height='22'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    aria-hidden='true'
  >
    <circle cx='12' cy='12' r='9' />
    <path d='M12 7v5l3 2' />
  </svg>
);

const CeremonyLocation = () => {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(LOCAL.mapaQuery)}`;

  return (
    <section
      aria-label='Local e horário da cerimônia'
      className='border-t border-line px-6 py-16 text-center sm:py-20'
    >
      <p className='mb-4 font-sans text-xs font-medium uppercase tracking-[4px] text-accent'>Cerimônia</p>
      <h2 className='font-heading font-medium tracking-tight text-ink text-[clamp(30px,5vw,46px)]'>
        Onde vamos celebrar
      </h2>

      <div className='mx-auto mt-10 max-w-[560px] rounded-2xl border border-line bg-card px-7 py-9 shadow-soft'>
        <div className='flex flex-col items-center gap-3'>
          <span className='text-accent'>
            <PinIcon />
          </span>
          <h3 className='font-heading text-[26px] leading-tight text-ink'>{LOCAL.nome}</h3>
          <p className='max-w-[420px] text-pretty text-[15px] leading-relaxed text-body'>{LOCAL.endereco}</p>
        </div>

        <div className='mx-auto my-7 h-px w-20 bg-line' />

        <div className='flex flex-col items-center gap-3'>
          <span className='text-accent'>
            <ClockIcon />
          </span>
          <p className='text-[15px] leading-relaxed text-body'>
            Chegada dos convidados às <span className='font-medium text-ink'>{LOCAL.horarioChegada}</span>
            <br />
            Cerimônia às <span className='font-medium text-ink'>{LOCAL.horarioCerimonia}</span>
          </p>
        </div>

        <a
          href={mapsUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='mt-8 inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 font-sans text-xs font-medium uppercase tracking-[2px] text-cream shadow-soft transition-colors hover:bg-accent-deep'
        >
          Ver no mapa
        </a>
      </div>
    </section>
  );
};

export { CeremonyLocation };
