/* ----------------------------------------------------------------
   Edite aqui os marcos da nossa história.
   ---------------------------------------------------------------- */
const MOMENTOS: { ano: string; titulo: string; descricao: string }[] = [
  {
    ano: '2019',
    titulo: 'Como nos conhecemos',
    descricao:
      'O destino cruzou os nossos caminhos quando menos esperávamos, e desde aquele primeiro olhar tudo começou a fazer sentido.',
  },
  {
    ano: '2020',
    titulo: 'O primeiro encontro',
    descricao:
      'Uma conversa que parecia não ter fim, risadas e a certeza de que aquele seria o início de algo especial.',
  },
  {
    ano: '2021',
    titulo: 'Pedido de namoro',
    descricao:
      'Decidimos transformar a amizade em amor e seguir lado a lado, construindo memórias inesquecíveis.',
  },
  {
    ano: '2024',
    titulo: 'O noivado',
    descricao:
      'Entre lágrimas de alegria e um sim cheio de emoção, selamos a promessa de passar a vida juntos.',
  },
  {
    ano: '2026',
    titulo: 'O grande dia',
    descricao:
      'E agora chegou a hora de celebrar o nosso amor ao lado de quem mais amamos. O nosso para sempre começa aqui.',
  },
];

const Story = () => {
  return (
    <section
      aria-label='Nossa história'
      className='border-t border-line bg-sand px-6 py-16 sm:py-20'
    >
      <div className='text-center'>
        <p className='mb-4 font-sans text-xs font-medium uppercase tracking-[4px] text-accent'>
          Nossa História
        </p>
        <h2 className='font-heading font-medium tracking-tight text-ink text-[clamp(30px,5vw,46px)]'>
          De onde viemos até aqui
        </h2>
      </div>

      <ol className='relative mx-auto mt-12 max-w-[760px]'>
        {/* Linha central / lateral */}
        <span
          aria-hidden='true'
          className='absolute top-0 bottom-0 left-4 w-px bg-line sm:left-1/2 sm:-translate-x-1/2'
        />

        {MOMENTOS.map((momento, index) => {
          const ladoEsquerdo = index % 2 === 0;

          return (
            <li
              key={momento.ano}
              className={`relative mb-10 pl-12 last:mb-0 sm:w-1/2 sm:pl-0 ${
                ladoEsquerdo
                  ? 'sm:pr-12 sm:text-right'
                  : 'sm:ml-auto sm:pl-12 sm:text-left'
              }`}
            >
              {/* Ponto na linha */}
              <span
                aria-hidden='true'
                className={`absolute top-1.5 left-[9px] h-3.5 w-3.5 rounded-full border-2 border-accent bg-cream sm:left-auto ${
                  ladoEsquerdo ? 'sm:-right-[7px]' : 'sm:-left-[7px]'
                }`}
              />

              <div className='rounded-2xl border border-line bg-card px-6 py-5 shadow-soft'>
                <span className='font-sans text-xs font-medium uppercase tracking-[3px] text-accent'>
                  {momento.ano}
                </span>
                <h3 className='mt-1 font-heading text-[24px] leading-tight text-ink'>
                  {momento.titulo}
                </h3>
                <p className='mt-2 text-pretty text-[15px] leading-relaxed text-body'>
                  {momento.descricao}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export { Story };
