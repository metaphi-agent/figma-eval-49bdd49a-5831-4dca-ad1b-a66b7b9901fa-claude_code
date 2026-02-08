import { useState } from 'react';
import { Card, Button, Badge, Avatar, Checkbox, Icons, Input } from '../components/ui';
import { PageHeader } from '../components/blocks';
import { invoices } from '../data/mockData';

const statusVariants: Record<string, 'success' | 'warning' | 'error'> = {
  Complete: 'success',
  Pending: 'warning',
  Cancel: 'error',
};

export function InvoiceList() {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const toggleRow = (id: string) => {
    setSelectedRows(prev =>
      prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (selectedRows.length === invoices.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(invoices.map(i => i.id));
    }
  };

  return (
    <div>
      <PageHeader title="Invoice List">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Input placeholder="Search" className="w-[200px] py-2" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted">
              {Icons.search}
            </span>
          </div>
          <Button icon={Icons.plus}>Add New</Button>
        </div>
      </PageHeader>

      <Card padding="none">
        <table className="w-full">
          <thead>
            <tr className="text-left text-xs text-text-muted border-b border-border">
              <th className="px-6 py-4">
                <Checkbox checked={selectedRows.length === invoices.length} onChange={toggleAll} />
              </th>
              <th className="px-4 py-4 font-medium">Invoice Id</th>
              <th className="px-4 py-4 font-medium">Name</th>
              <th className="px-4 py-4 font-medium">Email</th>
              <th className="px-4 py-4 font-medium">Date</th>
              <th className="px-4 py-4 font-medium">Status</th>
              <th className="px-4 py-4 font-medium"></th>
              <th className="px-4 py-4 font-medium">
                <span className="text-text-muted">{Icons.trash}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, index) => (
              <tr key={index} className="border-b border-border last:border-0 hover:bg-background-alt/50">
                <td className="px-6 py-4">
                  <Checkbox
                    checked={selectedRows.includes(invoice.id)}
                    onChange={() => toggleRow(invoice.id)}
                  />
                </td>
                <td className="px-4 py-4 text-sm text-text">{invoice.id}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <Avatar name={invoice.name} size="sm" />
                    <span className="text-sm font-medium text-text">{invoice.name}</span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2 text-sm text-text">
                    <span className="text-green">{Icons.email}</span>
                    {invoice.email}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2 text-sm text-text-muted">
                    <span>{Icons.calendar}</span>
                    {invoice.date}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <Badge variant={statusVariants[invoice.status]}>{invoice.status}</Badge>
                </td>
                <td className="px-4 py-4">
                  <span className={invoice.starred ? 'text-yellow' : 'text-text-muted'}>
                    {Icons.star}
                  </span>
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
  );
}
