import { NavLink } from 'react-router-dom';
import { WEDDING_LIST } from '../../../../utils/constants';
const Gift = () => {
  return (
    <section aria-label='Lista de presentes' className='border-t border-line px-6 py-16 text-center sm:py-20'>
      <p className='mb-4 font-sans text-xs font-medium uppercase tracking-[4px] text-accent'>Presentes</p>
      <h2 className='mx-auto max-w-[600px] font-heading font-medium tracking-tight text-ink text-[clamp(30px,5vw,46px)]'>
        A sua presença é o nosso maior presente
      </h2>
      <p className='mx-auto mt-5 max-w-[560px] text-pretty text-[17px] leading-relaxed text-body'>
        Mas, se desejar fazer parte do começo da nossa nova vida juntos, preparamos com muito carinho uma
        lista de presentes. Cada lembrança nos ajudará a construir o nosso lar e os nossos primeiros sonhos a
        dois.
      </p>

      <NavLink to={WEDDING_LIST} className='inline-block'>
        <button className='mt-8 cursor-pointer inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 font-sans text-xs font-medium uppercase tracking-[2px] text-cream shadow-soft transition-colors hover:bg-accent-deep'>
          Ver lista de presentes
        </button>
      </NavLink>
    </section>
  );
};

export { Gift };
