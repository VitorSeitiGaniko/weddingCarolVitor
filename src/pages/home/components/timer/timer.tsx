import { useEffect, useState } from 'react';

/* ----------------------------------------------------------------
   Edite aqui a data e o horário do casamento.
   Formato: ano, mês (0 = janeiro), dia, hora, minuto
   ---------------------------------------------------------------- */
const WEDDING_DATE = new Date(2027, 0, 23, 16, 0, 0);

type TimeLeft = {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
};

const calcularTempoRestante = (): TimeLeft | null => {
  const diferenca = WEDDING_DATE.getTime() - Date.now();

  if (diferenca <= 0) {
    return null;
  }

  return {
    dias: Math.floor(diferenca / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diferenca / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diferenca / (1000 * 60)) % 60),
    segundos: Math.floor((diferenca / 1000) % 60),
  };
};

const formatarData = (data: Date) =>
  data.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

const Timer = () => {
  const [tempoRestante, setTempoRestante] = useState<TimeLeft | null>(calcularTempoRestante);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTempoRestante(calcularTempoRestante());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const blocos: { label: string; valor: number }[] = tempoRestante
    ? [
        { label: 'Dias', valor: tempoRestante.dias },
        { label: 'Horas', valor: tempoRestante.horas },
        { label: 'Minutos', valor: tempoRestante.minutos },
        { label: 'Segundos', valor: tempoRestante.segundos },
      ]
    : [];

  return (
    <section
      aria-label='Contagem regressiva para o casamento'
      className='bg-[radial-gradient(circle_at_50%_-20%,var(--color-sand),transparent_65%)] px-6 py-16 text-center sm:py-20'
    >
      <p className='mb-4 font-sans text-xs font-medium uppercase tracking-[4px] text-accent'>
        Contagem Regressiva
      </p>
      <h2 className='font-heading font-medium tracking-tight text-ink text-[clamp(30px,5vw,46px)]'>
        Faltam poucos momentos
      </h2>
      <p className='mx-auto mt-3 max-w-[440px] text-[15px] text-muted'>
        Estamos contando os segundos para celebrar este dia ao seu lado.
      </p>

      {tempoRestante ? (
        <div className='mx-auto mt-10 grid max-w-[640px] grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6'>
          {blocos.map((bloco) => (
            <div
              key={bloco.label}
              className='flex flex-col items-center justify-center rounded-2xl border border-line bg-card py-6 shadow-soft'
            >
              <span className='font-heading text-[clamp(38px,8vw,56px)] leading-none text-ink tabular-nums'>
                {String(bloco.valor).padStart(2, '0')}
              </span>
              <span className='mt-2 font-sans text-[11px] uppercase tracking-[3px] text-muted'>
                {bloco.label}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className='mx-auto mt-10 max-w-[480px] font-heading text-[clamp(26px,5vw,38px)] italic text-accent'>
          Chegou o grande dia. Hoje começa o nosso para sempre!
        </p>
      )}

      <div className='mx-auto mt-10 flex items-center justify-center gap-3.5 text-muted'>
        <span className='h-px w-12 bg-line' />
        <span className='whitespace-nowrap font-sans text-xs uppercase tracking-[3px]'>
          {formatarData(WEDDING_DATE)}
        </span>
        <span className='h-px w-12 bg-line' />
      </div>
    </section>
  );
};

export { Timer };
