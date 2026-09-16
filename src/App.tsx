import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home, WeddingList, PaymentSuccess, PaymentFailure, PaymentPending } from './pages';

function AppContent() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='wedding-list' element={<WeddingList />} />
        <Route path='sucesso' element={<PaymentSuccess />} />
        <Route path='falha' element={<PaymentFailure />} />
        <Route path='pendente' element={<PaymentPending />} />
        <Route path='paymentPending' element={<Navigate to='/pendente' replace />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename='/'>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
