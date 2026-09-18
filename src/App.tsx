import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {
  Home,
  WeddingList,
  PaymentSuccess,
  PaymentFailure,
  PaymentPending,
  PaymentRedirect,
  Checkout,
} from './pages';

function AppContent() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='wedding-list' element={<WeddingList />} />
        <Route path='wedding-list/checkout' element={<Checkout />} />
        <Route path='wedding-list/redirect' element={<PaymentRedirect />} />
        <Route path='wedding-list/success' element={<PaymentSuccess />} />
        <Route path='wedding-list/failure' element={<PaymentFailure />} />
        <Route path='wedding-list/pending' element={<PaymentPending />} />
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
