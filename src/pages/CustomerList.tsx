import { useState } from 'react';
import { PageLayout } from '../components/blocks';
import { Card, Avatar, Badge, Button } from '../components/ui';
import { customers } from '../data/mockData';

const MenuDots = () => (
  <button className="p-2 hover:bg-background-alt rounded-lg transition-colors">
    <svg width="14" height="4" viewBox="0 0 14 4" fill="currentColor" className="text-text-muted">
      <circle cx="2" cy="2" r="2"/>
      <circle cx="7" cy="2" r="2"/>
      <circle cx="12" cy="2" r="2"/>
    </svg>
  </button>
);

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-muted">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-muted">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-muted">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const EditIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#605BFF" strokeWidth="2">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);

const DeleteIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D11A2A" strokeWidth="2">
    <polyline points="3 6 5 6 21 6"/>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
  </svg>
);

export default function CustomerList() {
  const [selectedCustomer, setSelectedCustomer] = useState(customers[0]);

  const actions = (
    <Button leftIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>}>
      Add Customer
    </Button>
  );

  return (
    <PageLayout title="Customer List" actions={actions}>
      <div className="grid grid-cols-3 gap-6">
        {/* Customer Table */}
        <Card padding="none" className="col-span-2">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-4 text-left text-sm font-semibold text-text-muted">
                  <div className="flex items-center gap-2">
                    Name
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M3 4.5L6 7.5L9 4.5"/>
                    </svg>
                  </div>
                </th>
                <th className="px-4 py-4 text-left text-sm font-semibold text-text-muted">
                  <div className="flex items-center gap-2">
                    Email
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M3 4.5L6 7.5L9 4.5"/>
                    </svg>
                  </div>
                </th>
                <th className="px-4 py-4 text-left text-sm font-semibold text-text-muted">
                  <div className="flex items-center gap-2">
                    Phone number
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M3 4.5L6 7.5L9 4.5"/>
                    </svg>
                  </div>
                </th>
                <th className="px-4 py-4 text-left text-sm font-semibold text-text-muted">
                  <div className="flex items-center gap-2">
                    Gender
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M3 4.5L6 7.5L9 4.5"/>
                    </svg>
                  </div>
                </th>
                <th className="px-4 py-4"></th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr
                  key={customer.id}
                  onClick={() => setSelectedCustomer(customer)}
                  className={`border-b border-border last:border-0 cursor-pointer transition-colors ${
                    selectedCustomer?.id === customer.id ? 'bg-primary-bg/30' : 'hover:bg-background-alt'
                  }`}
                >
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar src={customer.avatar} alt={customer.name} size="md" />
                      <span className="text-sm font-medium text-text">{customer.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-text">{customer.email}</td>
                  <td className="px-4 py-4 text-sm text-text">{customer.phone}</td>
                  <td className="px-4 py-4">
                    <Badge variant={customer.gender === 'Male' ? 'info' : 'danger'}>
                      {customer.gender}
                    </Badge>
                  </td>
                  <td className="px-4 py-4">
                    <MenuDots />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        {/* Customer Detail */}
        <Card>
          {selectedCustomer && (
            <div className="text-center">
              {/* Dropdown menu */}
              <div className="flex justify-end mb-4">
                <div className="bg-surface border border-border rounded-lg shadow-md p-1">
                  <button className="flex items-center gap-2 px-3 py-2 text-sm text-primary hover:bg-background-alt rounded w-full">
                    <EditIcon /> Edit
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 text-sm text-red hover:bg-background-alt rounded w-full">
                    <DeleteIcon /> Delete
                  </button>
                </div>
              </div>

              <Avatar src={selectedCustomer.avatar} alt={selectedCustomer.name} size="xl" className="mx-auto mb-4" />
              <h3 className="text-xl font-bold text-text mb-1">{selectedCustomer.name}</h3>
              <p className="text-sm text-text-muted mb-6">UI/UX Designer</p>

              <div className="text-left">
                <h4 className="text-lg font-bold text-text mb-4">Contact Info</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <EmailIcon />
                    <span className="text-sm text-text">{selectedCustomer.email.replace('@.com', '@ummoh.com')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <PhoneIcon />
                    <span className="text-sm text-text">{selectedCustomer.phone.replace('+', '')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <LocationIcon />
                    <span className="text-sm text-text">2239 Hog Camp Road<br />Schaumburg</span>
                  </div>
                </div>
              </div>

              {/* Performance */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-text">Performance</h4>
                  <MenuDots />
                </div>
                {/* Bar Chart */}
                <div className="flex items-end justify-between h-32 mb-4">
                  {[1.2, 2.33, 1.8, 1.5, 1.0, 1.6].map((h, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <div
                        className={`w-8 rounded-t-lg ${i === 1 ? 'bg-primary' : 'bg-orange-light'}`}
                        style={{ height: `${h * 40}px` }}
                      >
                        {i === 1 && (
                          <span className="text-[10px] text-white font-semibold block text-center mt-1">2.33k</span>
                        )}
                      </div>
                      <span className="text-xs text-text-muted">
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][i]}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Donut charts */}
                <div className="flex justify-center gap-6 mt-6">
                  <div className="relative w-16 h-16">
                    <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                      <circle cx="18" cy="18" r="15" fill="none" stroke="#f0f0f0" strokeWidth="3"/>
                      <circle cx="18" cy="18" r="15" fill="none" stroke="#FF9066" strokeWidth="3" strokeDasharray="66 100"/>
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">70%</span>
                  </div>
                  <div className="relative w-16 h-16">
                    <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                      <circle cx="18" cy="18" r="15" fill="none" stroke="#f0f0f0" strokeWidth="3"/>
                      <circle cx="18" cy="18" r="15" fill="none" stroke="#FCBE2D" strokeWidth="3" strokeDasharray="60 100"/>
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">60%</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </PageLayout>
  );
}
