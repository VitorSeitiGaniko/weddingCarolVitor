const Header = () => {
  return (
    <header className='px-6 pt-20 pb-2 text-center bg-[radial-gradient(circle_at_50%_-10%,var(--color-sand),transparent_60%)]'>
      <p className='mb-5 font-sans text-xs font-medium uppercase tracking-[4px] text-accent'>
        Vamos nos casar
      </p>
      <h1 className='font-heading font-medium leading-none tracking-tight text-ink text-[clamp(48px,9vw,92px)]'>
        Carol
        <span className='mx-2 inline-block font-normal italic text-accent'>&amp;</span>
        Vitor
      </h1>
    </header>
  );
};

export { Header };
