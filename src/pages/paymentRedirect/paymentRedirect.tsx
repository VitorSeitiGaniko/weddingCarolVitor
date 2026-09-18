import { useEffect, useState } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';

import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import SyncRoundedIcon from '@mui/icons-material/SyncRounded';

import { Header, Footer } from '../../components';
import { useStoreCart } from '../../store/useStoreCart';
import { scrollToTop } from '../../utils/scroll';
import { openLinkInNewTab } from '../../utils/openLink';

interface LocationState {
  checkoutUrl?: string;
  total?: number;
  itemCount?: number;
}

const PaymentRedirect = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { clearCart } = useStoreCart();

  const state = (location.state as LocationState) || {};
  const checkoutUrl = state.checkoutUrl || searchParams.get('url') || '';

  useEffect(() => {
    scrollToTop();
    clearCart();

    if (checkoutUrl && checkoutUrl !== '') {
      // Short delay to let the page render smoothly before attempting popup
      const timer = setTimeout(() => {
        openLinkInNewTab(checkoutUrl);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleManualOpen = () => {
    if (checkoutUrl) {
      openLinkInNewTab(checkoutUrl);
    }
  };

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
            className='absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#e8e2d8] rounded-full blur-2xl opacity-60 pointer-events-none'
          />

          {/* Animated Spinner Icon */}
          <div className='relative inline-flex items-center justify-center mb-6'>
            <div className='w-20 h-20 rounded-full bg-sand/60 border border-line flex items-center justify-center text-accent shadow-soft'>
              <SyncRoundedIcon
                sx={{
                  fontSize: 44,
                  animation: 'spin 2s linear infinite',
                  '@keyframes spin': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                  },
                }}
              />
            </div>
          </div>

          <div className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand border border-line text-xs font-medium uppercase tracking-[2px] text-accent mb-3'>
            <LockOutlinedIcon sx={{ fontSize: 14 }} />
            <span>Ambiente Seguro Mercado Pago</span>
          </div>

          <h2 className='font-heading text-3xl sm:text-4xl text-ink font-medium tracking-tight mb-4'>
            Redirecionando para o pagamento
          </h2>

          <p className='text-body text-base sm:text-[17px] leading-relaxed max-w-lg mx-auto mb-6'>
            Uma nova aba segura do <strong>Mercado Pago</strong> está sendo aberta para você escolher sua
            forma de pagamento preferida (Cartão de Crédito ou Saldo em conta).
          </p>

          {/* Action Box when popup might be blocked */}
          <div className='mb-8 text-center bg-sand/40 border border-line rounded-2xl p-6'>
            <p className='text-sm text-ink font-medium mb-3'>A nova aba não abriu automaticamente?</p>
            <p className='text-xs text-muted mb-4 max-w-md mx-auto'>
              Alguns navegadores bloqueiam abas automáticas. Clique no botão abaixo para ir direto à página de
              pagamento:
            </p>

            {checkoutUrl ? (
              <button
                type='button'
                onClick={handleManualOpen}
                className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-accent hover:bg-accent-deep text-cream font-medium text-sm transition-all duration-200 shadow-soft hover:shadow-md cursor-pointer'
              >
                <span>Acessar Mercado Pago</span>
                <OpenInNewRoundedIcon sx={{ fontSize: 18 }} />
              </button>
            ) : (
              <p className='text-sm text-muted'>Nenhum link de pagamento ativo no momento.</p>
            )}
          </div>

          {/* Security details pill */}
          <div className='flex items-center justify-center gap-2 text-xs text-muted mb-8'>
            <SecurityOutlinedIcon sx={{ fontSize: 16, color: 'var(--color-accent)' }} />
            <span>Seus dados e transação são protegidos com criptografia de ponta a ponta.</span>
          </div>

          {/* Back button */}
          <div className='flex justify-center'>
            <NavLink
              to='/wedding-list'
              className='inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-sand/60 hover:bg-sand border border-line text-ink font-medium text-sm transition-all duration-200'
            >
              <CardGiftcardOutlinedIcon sx={{ fontSize: 18 }} />
              Voltar para a lista de presentes
            </NavLink>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export { PaymentRedirect };
