import { useEffect, useMemo } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';

import { Header, Footer } from '../../components';
import { useStoreCart } from '../../store/useStoreCart';
import { scrollToTop } from '../../utils/scroll';

const formatPaymentType = (type: string | null) => {
  if (!type) return 'Não especificado';
  const map: Record<string, string> = {
    credit_card: 'Cartão de Crédito',
    debit_card: 'Cartão de Débito',
    bank_transfer: 'Pix / Transferência',
    ticket: 'Boleto Bancário',
    account_money: 'Saldo Mercado Pago',
  };
  return map[type.toLowerCase()] || type;
};

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const { clearCart } = useStoreCart();

  useEffect(() => {
    scrollToTop();
    clearCart();
  }, [clearCart]);

  const paymentDetails = useMemo(() => {
    const paymentId =
      searchParams.get('collection_id') ||
      searchParams.get('payment_id') ||
      searchParams.get('preference_id');
    const status = searchParams.get('collection_status') || searchParams.get('status') || 'approved';
    const paymentType = searchParams.get('payment_type');
    const merchantOrderId = searchParams.get('merchant_order_id');
    const externalReference = searchParams.get('external_reference');

    return {
      paymentId,
      status,
      paymentType: formatPaymentType(paymentType),
      merchantOrderId,
      externalReference,
      hasAnyInfo: Boolean(paymentId || merchantOrderId || externalReference),
    };
  }, [searchParams]);

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
            className='absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#e3eedf] rounded-full blur-2xl opacity-60 pointer-events-none'
          />

          {/* Success Icon */}
          <div className='relative inline-flex items-center justify-center mb-6'>
            <div className='absolute w-20 h-20 rounded-full bg-[#ecf5ea] animate-ping opacity-30 pointer-events-none' />
            <div className='w-20 h-20 rounded-full bg-[#f2f8f0] border border-[#cfe5cb] flex items-center justify-center text-[#477a43] shadow-soft'>
              <CheckCircleOutlineRoundedIcon sx={{ fontSize: 44 }} />
            </div>
          </div>

          <p className='font-sans text-xs font-semibold uppercase tracking-[3px] text-[#477a43] mb-2'>
            Pagamento Aprovado
          </p>

          <h2 className='font-heading text-3xl sm:text-4xl text-ink font-medium tracking-tight mb-4'>
            Muito obrigado pelo carinho!
          </h2>

          <p className='text-body text-base sm:text-[17px] leading-relaxed max-w-lg mx-auto mb-8'>
            Seu presente de casamento foi confirmado com sucesso. Sua bênção e carinho tornam o nosso
            começo ainda mais especial.
          </p>

          {/* Transaction Info Box */}
          {paymentDetails.hasAnyInfo && (
            <div className='mb-8 text-left bg-sand/40 border border-line rounded-2xl p-5 text-sm'>
              <div className='flex items-center gap-2 font-medium text-ink mb-3 pb-2 border-b border-line'>
                <ReceiptLongOutlinedIcon sx={{ fontSize: 20, color: 'var(--color-accent)' }} />
                <span>Resumo da Confirmação</span>
              </div>

              <div className='space-y-2 text-body'>
                {paymentDetails.paymentId && (
                  <div className='flex justify-between items-center gap-2'>
                    <span className='text-muted'>Código da transação:</span>
                    <span className='font-mono font-medium text-ink'>{paymentDetails.paymentId}</span>
                  </div>
                )}
                {paymentDetails.paymentType !== 'Não especificado' && (
                  <div className='flex justify-between items-center gap-2'>
                    <span className='text-muted'>Método:</span>
                    <span className='font-medium text-ink'>{paymentDetails.paymentType}</span>
                  </div>
                )}
                <div className='flex justify-between items-center gap-2'>
                  <span className='text-muted'>Status:</span>
                  <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#e6f4e4] text-[#2d6829]'>
                    Aprovado
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-3 justify-center items-center'>
            <NavLink
              to='/'
              className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent-deep text-cream font-medium text-sm transition-all duration-200 shadow-soft hover:shadow-md'
            >
              <HomeOutlinedIcon sx={{ fontSize: 18 }} />
              Voltar para o início
            </NavLink>

            <NavLink
              to='/wedding-list'
              className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sand/60 hover:bg-sand border border-line text-ink font-medium text-sm transition-all duration-200'
            >
              <CardGiftcardOutlinedIcon sx={{ fontSize: 18 }} />
              Ver lista de presentes
            </NavLink>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export { PaymentSuccess };
