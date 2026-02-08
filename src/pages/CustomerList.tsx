import { useState } from 'react';
import { Card, Button, Badge, Avatar, Icons, Input } from '../components/ui';
import { PageHeader } from '../components/blocks';
import { customers } from '../data/mockData';

export function CustomerList() {
  const [selectedCustomer, setSelectedCustomer] = useState(customers[0]);
  const [showAddPanel, setShowAddPanel] = useState(false);

  return (
    <div className="flex gap-6">
      <div className="flex-1">
        <PageHeader title="Customer List">
          <Button icon={Icons.plus} onClick={() => setShowAddPanel(true)}>Add Customer</Button>
        </PageHeader>

        <Card padding="none">
          <table className="w-full">
            <thead>
              <tr className="text-left text-xs text-text-muted border-b border-border">
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-4 py-4 font-medium">Email</th>
                <th className="px-4 py-4 font-medium">Phone number</th>
                <th className="px-4 py-4 font-medium">Gender</th>
                <th className="px-4 py-4 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr
                  key={index}
                  className="border-b border-border last:border-0 hover:bg-background-alt/50 cursor-pointer"
                  onClick={() => setSelectedCustomer(customer)}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar name={customer.name} size="sm" />
                      <span className="text-sm font-medium text-text">{customer.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-primary">{customer.email}</td>
                  <td className="px-4 py-4 text-sm text-text">{customer.phone}</td>
                  <td className="px-4 py-4">
                    <Badge variant={customer.gender === 'Male' ? 'info' : 'error'}>
                      {customer.gender}
                    </Badge>
                  </td>
                  <td className="px-4 py-4">
                    <button className="text-text-muted hover:text-text">{Icons.more}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>

      {/* Customer Detail Panel */}
      {selectedCustomer && !showAddPanel && (
        <div className="w-[320px]">
          <Card className="text-center">
            <div className="relative inline-block mb-4">
              <Avatar name={selectedCustomer.name} size="xl" />
              <div className="absolute -right-1 -top-1 flex gap-1">
                <button className="w-6 h-6 bg-primary-bg text-primary rounded-full flex items-center justify-center text-xs">
                  {Icons.edit}
                </button>
                <button className="w-6 h-6 bg-red-light text-red rounded-full flex items-center justify-center text-xs">
                  {Icons.trash}
                </button>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-text">{selectedCustomer.name}</h3>
            <p className="text-sm text-text-muted mb-6">UI/UX Designer</p>

            <div className="text-left">
              <h4 className="text-sm font-semibold text-text mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-text-muted">{Icons.email}</span>
                  <span className="text-text">{selectedCustomer.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-text-muted">{Icons.phone}</span>
                  <span className="text-text">{selectedCustomer.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-text-muted">{Icons.location}</span>
                  <span className="text-text">2239 Hog Camp Road Schaumburg</span>
                </div>
              </div>
            </div>

            <div className="mt-6 text-left">
              <h4 className="text-sm font-semibold text-text mb-4">Performance</h4>
              <div className="h-32 flex items-end gap-2">
                {[80, 120, 60, 100, 40, 90].map((h, i) => (
                  <div key={i} className="flex-1 bg-red-light rounded-t" style={{ height: h + 'px' }} />
                ))}
              </div>
              <div className="flex gap-2 text-[10px] text-text-muted mt-2">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <div className="w-16 h-16 relative">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#FAFAFB"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#605BFF"
                    strokeWidth="3"
                    strokeDasharray="70, 100"
                  />
                </svg>
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-semibold">70%</span>
              </div>
              <div className="w-16 h-16 relative">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#FAFAFB"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#FCBE2D"
                    strokeWidth="3"
                    strokeDasharray="60, 100"
                  />
                </svg>
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-semibold">60%</span>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Add Customer Panel */}
      {showAddPanel && (
        <div className="w-[320px]">
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-text">Add Customer</h3>
              <button onClick={() => setShowAddPanel(false)} className="text-red">{Icons.close}</button>
            </div>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-background-alt rounded-full flex items-center justify-center">
                {Icons.camera}
              </div>
            </div>
            <div className="space-y-4">
              <Input label="First Name" placeholder="John" />
              <Input label="Last Name" placeholder="Deo" />
              <Input label="Email" placeholder="Example@gmail.com" />
              <Input label="Phone Number" placeholder="33757005467" />
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-text">Gender</label>
                <select className="w-full px-4 py-3 text-sm bg-background-alt border-none rounded-[var(--radius-md)] focus:outline-none">
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <Button className="w-full">Add Customer</Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
