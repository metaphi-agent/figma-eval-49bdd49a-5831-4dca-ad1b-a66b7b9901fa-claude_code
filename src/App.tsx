import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/blocks';
import {
  Dashboard,
  InvoiceList,
  CustomerList,
  Calendar,
  Schedule,
  TaskView,
  Messages,
  Product,
  Login,
  SignUp,
  Recover,
  Confirm,
} from './pages';

// Placeholder pages for routes without dedicated pages
function Analytics() {
  return <Product />;
}

function Notifications() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold text-text mb-4">Notifications</h1>
      <p className="text-text-muted">No new notifications</p>
    </div>
  );
}

function Settings() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold text-text mb-4">Settings</h1>
      <p className="text-text-muted">Settings page coming soon</p>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      {/* Auth routes - no layout */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/recover" element={<Recover />} />
      <Route path="/confirm" element={<Confirm />} />

      {/* Dashboard routes - with layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="invoices" element={<InvoiceList />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="messages" element={<Messages />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="settings" element={<Settings />} />
        <Route path="customers" element={<CustomerList />} />
        <Route path="tasks" element={<TaskView />} />
        <Route path="board" element={<TaskView />} />
        <Route path="products" element={<Product />} />
      </Route>
    </Routes>
  );
}
