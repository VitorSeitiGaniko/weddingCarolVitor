/* ----------------------------------------------------------------
   Caminho da página da lista de presentes (ajuste se a rota mudar).
   ---------------------------------------------------------------- */
const ROTA_LISTA_PRESENTES = '/lista-de-presentes';

const Gift = () => {
  return (
    <section
      aria-label='Lista de presentes'
      className='border-t border-line px-6 py-16 text-center sm:py-20'
    >
      <p className='mb-4 font-sans text-xs font-medium uppercase tracking-[4px] text-accent'>
        Presentes
      </p>
      <h2 className='mx-auto max-w-[600px] font-heading font-medium tracking-tight text-ink text-[clamp(30px,5vw,46px)]'>
        A sua presença é o nosso maior presente
      </h2>
      <p className='mx-auto mt-5 max-w-[560px] text-pretty text-[17px] leading-relaxed text-body'>
        Mas, se desejar fazer parte do começo da nossa nova vida juntos, preparamos com muito
        carinho uma lista de presentes. Cada lembrança nos ajudará a construir o nosso lar e os
        nossos primeiros sonhos a dois.
      </p>

      <a
        href={ROTA_LISTA_PRESENTES}
        className='mt-8 inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 font-sans text-xs font-medium uppercase tracking-[2px] text-cream shadow-soft transition-colors hover:bg-accent-deep'
      >
        Ver lista de presentes
      </a>
    </section>
  );
};

export { Gift };
