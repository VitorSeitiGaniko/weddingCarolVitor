/* ----------------------------------------------------------------
   Edite aqui os marcos da nossa história.
   ---------------------------------------------------------------- */
import { ImageCasamento, ImageMorarJunto, ImageNoivado } from '../../../../assets/images';

const MOMENTOS: { ano: string; titulo: string; descricao: string; imagem?: string; alt?: string }[] = [
  {
    ano: '2020',
    titulo: 'O primeiro encontro',
    descricao:
      'O destino cruzou nossos caminhos no momento mais improvável, trazendo amor e esperança em plena pandemia.',
  },
  {
    ano: '2023',
    titulo: 'Nosso novo lar',
    descricao:
      'Demos um novo e lindo passo: escolhemos começar a escrever a história da nossa família no nosso cantinho em Santo André.',
    imagem: ImageMorarJunto,
    alt: 'Carol e Vitor celebrando o novo lar',
  },
  {
    ano: '2025',
    titulo: 'O noivado em Paris',
    descricao:
      'Um sonho inesquecível! Sob o céu de Paris, com muitas lágrimas de alegria e um "sim" emocionado, prometemos um ao outro uma vida inteira juntos.',
    imagem: ImageNoivado,
    alt: 'Carol e Vitor em Paris durante o noivado',
  },
  {
    ano: '2027',
    titulo: 'O grande dia',
    descricao:
      'E agora chegou a hora de celebrar o nosso amor ao lado de quem mais amamos. O nosso "para sempre" começa aqui.',
    imagem: ImageCasamento,
    alt: 'Carol e Vitor celebrando o casamento',
  },
];

const Story = () => {
  return (
    <section aria-label='Nossa história' className='border-t border-line bg-sand px-6 py-16 sm:py-20'>
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
              className={`relative mb-10 pl-12 last:mb-0 sm:grid sm:grid-cols-2 sm:items-center sm:gap-6 sm:pl-0 ${
                ladoEsquerdo ? 'sm:text-right' : 'sm:text-left'
              }`}
            >
              {/* Ponto na linha */}
              <span
                aria-hidden='true'
                className={`absolute top-1.5 left-[9px] h-3.5 w-3.5 rounded-full border-2 border-accent bg-cream sm:left-auto ${
                  ladoEsquerdo ? 'sm:-right-[7px]' : 'sm:-left-[7px]'
                }`}
              />

              <div className={ladoEsquerdo ? 'sm:col-start-1' : 'sm:col-start-2'}>
                <div className='rounded-2xl border border-line bg-card px-6 py-5 shadow-soft'>
                  <span className='font-sans text-xs font-medium uppercase tracking-[3px] text-accent'>
                    {momento.ano}
                  </span>
                  <h3 className='mt-1 font-heading text-[24px] leading-tight text-ink'>{momento.titulo}</h3>
                  <p className='mt-2 text-pretty text-[15px] leading-relaxed text-body'>{momento.descricao}</p>
                </div>
              </div>

              {momento.imagem && (
                <div className={`mt-4 overflow-hidden rounded-2xl border border-line shadow-soft sm:mt-0 ${
                  ladoEsquerdo ? 'sm:col-start-2' : 'sm:col-start-1 sm:row-start-1'
                }`}>
                  <img
                    src={momento.imagem}
                    alt={momento.alt}
                    className='block h-auto w-full'
                  />
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export { Story };
