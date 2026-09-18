import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

import { Header, Footer } from '../../components';
import { scrollToTop } from '../../utils/scroll';

const PaymentFailure = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className='min-h-screen flex flex-col bg-cream'>
      <NavLink to='/' aria-label='Ir para a página inicial' className='inline-block'>
        <Header />
      </NavLink>

      <main className='flex-1 max-w-2xl mx-auto w-full px-5 py-8 md:py-12 flex flex-col items-center'>
        <div className='w-full bg-card border border-line rounded-3xl p-6 sm:p-10 shadow-raised text-center relative overflow-hidden'>
          {/* Subtle decorative top glow */}
          <div
            aria-hidden='true'
            className='absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#fde8e8] rounded-full blur-2xl opacity-60 pointer-events-none'
          />

          {/* Failure Icon */}
          <div className='relative inline-flex items-center justify-center mb-6'>
            <div className='w-20 h-20 rounded-full bg-[#fdf2f2] border border-[#fbd5d5] flex items-center justify-center text-[#c85a5a] shadow-soft'>
              <HighlightOffRoundedIcon sx={{ fontSize: 44 }} />
            </div>
          </div>

          <p className='font-sans text-xs font-semibold uppercase tracking-[3px] text-[#c85a5a] mb-2'>
            Pagamento não concluído
          </p>

          <h2 className='font-heading text-3xl sm:text-4xl text-ink font-medium tracking-tight mb-4'>
            Ops! Algo deu errado
          </h2>

          <p className='text-body text-base sm:text-[17px] leading-relaxed max-w-lg mx-auto mb-8'>
            Não conseguimos processar o seu pagamento. Nenhuma cobrança foi efetuada ou os dados não puderam
            ser validados pela operadora.
          </p>

          {/* Tips Box */}
          <div className='mb-8 text-left bg-sand/40 border border-line rounded-2xl p-5 text-sm'>
            <div className='flex items-center gap-2 font-medium text-ink mb-3 pb-2 border-b border-line'>
              <HelpOutlineOutlinedIcon sx={{ fontSize: 20, color: 'var(--color-accent)' }} />
              <span>O que você pode fazer:</span>
            </div>

            <ul className='space-y-2.5 text-body list-disc list-inside'>
              <li>Verificar se os dados do cartão foram digitados corretamente.</li>
              <li>Confirmar se há limite disponível ou autorização no app do seu banco.</li>
              <li>Tentar outro método de pagamento, como o Pix.</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-3 justify-center items-center'>
            <NavLink
              to='/wedding-list'
              className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent-deep text-cream font-medium text-sm transition-all duration-200 shadow-soft hover:shadow-md'
            >
              <ReplayRoundedIcon sx={{ fontSize: 18 }} />
              Tentar novamente
            </NavLink>

            <NavLink
              to='/'
              className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sand/60 hover:bg-sand border border-line text-ink font-medium text-sm transition-all duration-200'
            >
              <HomeOutlinedIcon sx={{ fontSize: 18 }} />
              Voltar para o início
            </NavLink>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export { PaymentFailure };
