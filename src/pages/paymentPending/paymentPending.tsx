import { useEffect, useState, useMemo } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';

import { Header, Footer } from '../../components';
import { scrollToTop } from '../../utils/scroll';

const PaymentPending = () => {
  const [searchParams] = useSearchParams();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshedMessage, setRefreshedMessage] = useState<string | null>(null);

  useEffect(() => {
    scrollToTop();
  }, []);

  const paymentDetails = useMemo(() => {
    const paymentId =
      searchParams.get('collection_id') ||
      searchParams.get('payment_id') ||
      searchParams.get('preference_id');
    const merchantOrderId = searchParams.get('merchant_order_id');

    return {
      paymentId,
      merchantOrderId,
      hasAnyInfo: Boolean(paymentId || merchantOrderId),
    };
  }, [searchParams]);

  const handleRefreshStatus = () => {
    setIsRefreshing(true);
    setRefreshedMessage(null);

    setTimeout(() => {
      setIsRefreshing(false);
      setRefreshedMessage('O pagamento ainda está sendo processado pela instituição financeira.');
    }, 1200);
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
            className='absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#fef3c7] rounded-full blur-2xl opacity-60 pointer-events-none'
          />

          {/* Pending Icon */}
          <div className='relative inline-flex items-center justify-center mb-6'>
            <div className='w-20 h-20 rounded-full bg-[#fef9c3] border border-[#fef08a] flex items-center justify-center text-[#b45309] shadow-soft'>
              <AccessTimeRoundedIcon sx={{ fontSize: 44 }} />
            </div>
          </div>

          <p className='font-sans text-xs font-semibold uppercase tracking-[3px] text-[#b45309] mb-2'>
            Pagamento em Análise
          </p>

          <h2 className='font-heading text-3xl sm:text-4xl text-ink font-medium tracking-tight mb-4'>
            Quase lá! Seu pagamento está pendente
          </h2>

          <p className='text-body text-base sm:text-[17px] leading-relaxed max-w-lg mx-auto mb-8'>
            Estamos aguardando a confirmação da instituição financeira. Assim que for compensado, o status será atualizado automaticamente.
          </p>

          {/* Transaction Info Box if available */}
          {paymentDetails.hasAnyInfo && (
            <div className='mb-6 text-left bg-sand/40 border border-line rounded-2xl p-5 text-sm'>
              <div className='flex items-center gap-2 font-medium text-ink mb-3 pb-2 border-b border-line'>
                <ReceiptLongOutlinedIcon sx={{ fontSize: 20, color: 'var(--color-accent)' }} />
                <span>Identificação do Pedido</span>
              </div>

              <div className='space-y-2 text-body'>
                {paymentDetails.paymentId && (
                  <div className='flex justify-between items-center gap-2'>
                    <span className='text-muted'>Código de referência:</span>
                    <span className='font-mono font-medium text-ink'>{paymentDetails.paymentId}</span>
                  </div>
                )}
                <div className='flex justify-between items-center gap-2'>
                  <span className='text-muted'>Status:</span>
                  <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#fef3c7] text-[#92400e]'>
                    Pendente / Em análise
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Info Box */}
          <div className='mb-8 text-left bg-sand/40 border border-line rounded-2xl p-5 text-sm'>
            <div className='flex items-center gap-2 font-medium text-ink mb-3 pb-2 border-b border-line'>
              <MarkEmailReadOutlinedIcon sx={{ fontSize: 20, color: 'var(--color-accent)' }} />
              <span>Prazos de compensação</span>
            </div>

            <ul className='space-y-2 text-body list-disc list-inside'>
              <li><strong>Pix:</strong> confirmação geralmente em poucos minutos.</li>
              <li><strong>Boleto bancário:</strong> compensação em até 1 a 2 dias úteis.</li>
              <li>Você receberá atualizações e recibo no e-mail informado no pagamento.</li>
            </ul>
          </div>

          {refreshedMessage && (
            <div className='mb-6 p-3 rounded-xl bg-sand/70 border border-line text-xs sm:text-sm text-body animate-fade-in'>
              {refreshedMessage}
            </div>
          )}

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-3 justify-center items-center'>
            <button
              onClick={handleRefreshStatus}
              disabled={isRefreshing}
              className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent-deep text-cream font-medium text-sm transition-all duration-200 shadow-soft hover:shadow-md cursor-pointer disabled:opacity-75'
            >
              <RefreshRoundedIcon
                sx={{
                  fontSize: 18,
                  animation: isRefreshing ? 'spin 1s linear infinite' : 'none',
                  '@keyframes spin': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                  },
                }}
              />
              {isRefreshing ? 'Consultando...' : 'Verificar status'}
            </button>

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

export { PaymentPending };
