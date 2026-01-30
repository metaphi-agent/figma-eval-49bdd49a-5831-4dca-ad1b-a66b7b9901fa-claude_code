import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Badge, Avatar } from '../components/ui';

export const InvoiceList: React.FC = () => {
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]);

  const invoices = [
    { id: '#876364', name: 'Arrora gaur', email: 'arroragaur@gmail.com', date: '12 Dec, 2020', status: 'complete' as const, starred: true },
    { id: '#876123', name: 'James Mullican', email: 'jamesmullican@gmail.com', date: '10 Dec, 2020', status: 'pending' as const, starred: true },
    { id: '#876213', name: 'Robert Bacins', email: 'robertbacins@gmail.com', date: '09 Dec, 2020', status: 'complete' as const, starred: false },
    { id: '#876987', name: 'Bethany Jackson', email: 'bethanyjackson@gmail.com', date: '09 Dec, 2020', status: 'cancel' as const, starred: false },
    { id: '#871345', name: 'Anne Jacob', email: 'annejacob@gmail.com', date: '10 Dec, 2020', status: 'complete' as const, starred: false },
    { id: '#872345', name: 'Bethany jackson', email: 'bethanyjackson@gmail.com', date: '10 Dec, 2020', status: 'pending' as const, starred: true },
    { id: '#872346', name: 'James Mullican', email: 'jamesmullican@gmail.com', date: '10 Dec, 2020', status: 'complete' as const, starred: false },
    { id: '#873245', name: 'Jhon Deo', email: 'jhondeo32@gmail.com', date: '08 Dec, 2020', status: 'complete' as const, starred: true },
    { id: '#876364', name: 'Bethany jackson', email: 'bethanyjackson@gmail.com', date: '02 Dec, 2020', status: 'cancel' as const, starred: true },
    { id: '#878769', name: 'James Mullican', email: 'jamesmullican@gmail.com', date: '01 Dec, 2020', status: 'pending' as const, starred: false }
  ];

  const toggleInvoice = (id: string) => {
    setSelectedInvoices(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (selectedInvoices.length === invoices.length) {
      setSelectedInvoices([]);
    } else {
      setSelectedInvoices(invoices.map(inv => inv.id));
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-[#202224]">Invoice List</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 bg-white border border-[#E8EAED] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#5B5FFF]"
            />
            <svg className="w-5 h-5 text-[#8B8D97] absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <Link to="/invoices/create">
            <Button variant="primary" icon={<span>+</span>} iconPosition="left">
              Add New
            </Button>
          </Link>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-[#E8EAED] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#F7F8FA] text-left text-sm text-[#8B8D97]">
                <th className="p-4 w-12">
                  <Checkbox
                    checked={selectedInvoices.length === invoices.length}
                    onChange={toggleAll}
                  />
                </th>
                <th className="p-4 font-medium">Invoice Id</th>
                <th className="p-4 font-medium">Name</th>
                <th className="p-4 font-medium">Email</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 w-12"></th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice, index) => (
                <tr key={`${invoice.id}-${index}`} className="border-t border-[#E8EAED] hover:bg-[#F7F8FA] transition-colors">
                  <td className="p-4">
                    <Checkbox
                      checked={selectedInvoices.includes(invoice.id)}
                      onChange={() => toggleInvoice(invoice.id)}
                    />
                  </td>
                  <td className="p-4 text-[#202224] font-medium">{invoice.id}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <Avatar src={`https://i.pravatar.cc/40?img=${index + 10}`} alt={invoice.name} size="sm" />
                      <span className="text-[#202224] font-medium">{invoice.name}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#00C48C]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span className="text-sm text-[#202224]">{invoice.email}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#5B5FFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm text-[#202224]">{invoice.date}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <Badge variant={invoice.status}>
                      {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button className={`${invoice.starred ? 'text-[#FFA043]' : 'text-[#D1D3D8]'} hover:text-[#FFA043] transition-colors`}>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </button>
                      <button className="text-[#8B8D97] hover:text-[#202224] transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
