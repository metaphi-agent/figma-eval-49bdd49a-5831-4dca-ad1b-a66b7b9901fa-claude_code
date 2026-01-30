import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Lazy load pages for better performance
const Dashboard = lazy(() => import('./pages/Dashboard'));
const InvoiceList = lazy(() => import('./pages/InvoiceList'));
const CustomerList = lazy(() => import('./pages/CustomerList'));
const BoardList = lazy(() => import('./pages/BoardList'));
const Calendar = lazy(() => import('./pages/Calendar'));
const Messages = lazy(() => import('./pages/Messages'));
const ScheduleList = lazy(() => import('./pages/ScheduleList'));
const ProductAnalytics = lazy(() => import('./pages/ProductAnalytics'));
const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/SignUp'));
const Recover = lazy(() => import('./pages/Recover'));
const Confirm = lazy(() => import('./pages/Confirm'));

// Loading fallback
function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/recover" element={<Recover />} />
          <Route path="/confirm" element={<Confirm />} />

          {/* Dashboard Routes */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/analytics" element={<ProductAnalytics />} />
          <Route path="/invoices" element={<InvoiceList />} />
          <Route path="/schedule" element={<ScheduleList />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/notifications" element={<Dashboard />} />
          <Route path="/settings" element={<Dashboard />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/board" element={<BoardList />} />
          <Route path="/products" element={<ProductAnalytics />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
