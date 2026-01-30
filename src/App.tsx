import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/blocks/Layout';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { InvoiceList } from './pages/InvoiceList';
import { CustomerList } from './pages/CustomerList';
import { BoardList } from './pages/BoardList';
import { Placeholder } from './pages/Placeholder';

function App() {
  return (
    <Routes>
        {/* Auth Routes (no layout) */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/recover" element={<Placeholder title="Recover Password" description="Enter your email to recover your password" />} />
        <Route path="/confirm" element={<Placeholder title="Confirm Email" description="Check your email for confirmation" />} />

        {/* Dashboard Routes (with sidebar layout) */}
        <Route path="/" element={<Layout><Dashboard /></Layout>} />
        <Route path="/analytics" element={<Layout><Placeholder title="Analytics" /></Layout>} />
        <Route path="/invoices" element={<Layout><InvoiceList /></Layout>} />
        <Route path="/invoices/create" element={<Layout><Placeholder title="Create Invoice" /></Layout>} />
        <Route path="/schedule" element={<Layout><Placeholder title="Schedule List" /></Layout>} />
        <Route path="/calendar/month" element={<Layout><Placeholder title="Calendar - Month View" /></Layout>} />
        <Route path="/calendar/day" element={<Layout><Placeholder title="Calendar - Day View" /></Layout>} />
        <Route path="/calendar/year" element={<Layout><Placeholder title="Calendar - Year View" /></Layout>} />
        <Route path="/calendar/create" element={<Layout><Placeholder title="Create Event" /></Layout>} />
        <Route path="/board" element={<Layout><BoardList /></Layout>} />
        <Route path="/tasks" element={<Layout><Placeholder title="Task View" /></Layout>} />
        <Route path="/tasks/preview" element={<Layout><Placeholder title="Task Preview" /></Layout>} />
        <Route path="/customers" element={<Layout><CustomerList /></Layout>} />
        <Route path="/customers/add" element={<Layout><Placeholder title="Add Customer" /></Layout>} />
        <Route path="/products" element={<Layout><Placeholder title="Products" /></Layout>} />
        <Route path="/products/add" element={<Layout><Placeholder title="Add Product" /></Layout>} />
        <Route path="/chat" element={<Layout><Placeholder title="Chat" /></Layout>} />
        <Route path="/notification" element={<Layout><Placeholder title="Notifications" /></Layout>} />
        <Route path="/settings" element={<Layout><Placeholder title="Settings" /></Layout>} />

        {/* Catch all - redirect to dashboard */}
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
