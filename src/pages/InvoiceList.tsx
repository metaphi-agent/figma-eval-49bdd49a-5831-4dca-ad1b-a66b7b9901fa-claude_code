import { useState } from 'react';
import { PageLayout } from '../components/blocks';
import { Card, Avatar, Badge, Button, Checkbox } from '../components/ui';
import { invoices } from '../data/mockData';

const StarIcon = ({ filled }: { filled?: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill={filled ? "#FCBE2D" : "none"} stroke="#FCBE2D" strokeWidth="2" className="cursor-pointer hover:scale-110 transition-transform">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00B69B" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#605BFF" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const MenuDots = () => (
  <button className="p-2 hover:bg-background-alt rounded-lg transition-colors">
    <svg width="14" height="4" viewBox="0 0 14 4" fill="currentColor" className="text-text-muted">
      <circle cx="2" cy="2" r="2"/>
      <circle cx="7" cy="2" r="2"/>
      <circle cx="12" cy="2" r="2"/>
    </svg>
  </button>
);

const TrashIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-muted">
    <polyline points="3 6 5 6 21 6"/>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
  </svg>
);

const statusVariants: Record<string, 'success' | 'warning' | 'danger'> = {
  Complete: 'success',
  Pending: 'warning',
  Cancel: 'danger',
};

export default function InvoiceList() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSelectAll = () => {
    if (selectedIds.length === invoices.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(invoices.map((inv) => inv.id));
    }
  };

  const handleSelectRow = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((i) => i !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const filteredInvoices = invoices.filter(
    (inv) =>
      inv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inv.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const actions = (
    <div className="flex items-center gap-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-48 h-10 px-4 pr-10 bg-surface rounded-[10px] text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
        <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
        </svg>
      </div>
      <Button leftIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>}>
        Add New
      </Button>
    </div>
  );

  return (
    <PageLayout title="Invoice List" actions={actions}>
      <Card padding="none">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="w-12 px-4 py-4">
                <Checkbox
                  checked={selectedIds.length === invoices.length && invoices.length > 0}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="px-4 py-4 text-left text-sm font-semibold text-text-muted">
                <div className="flex items-center gap-2">
                  Invoice Id
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M3 4.5L6 7.5L9 4.5"/>
                  </svg>
                </div>
              </th>
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
                  Date
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M3 4.5L6 7.5L9 4.5"/>
                  </svg>
                </div>
              </th>
              <th className="px-4 py-4 text-left text-sm font-semibold text-text-muted">
                <div className="flex items-center gap-2">
                  Status
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M3 4.5L6 7.5L9 4.5"/>
                  </svg>
                </div>
              </th>
              <th className="px-4 py-4 text-right">
                <TrashIcon />
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredInvoices.map((invoice) => (
              <tr
                key={invoice.id}
                className={`border-b border-border last:border-0 hover:bg-background-alt transition-colors ${
                  selectedIds.includes(invoice.id) ? 'bg-primary-bg/30' : ''
                }`}
              >
                <td className="w-12 px-4 py-4">
                  <Checkbox
                    checked={selectedIds.includes(invoice.id)}
                    onChange={() => handleSelectRow(invoice.id)}
                  />
                </td>
                <td className="px-4 py-4 text-sm font-medium text-text">#{invoice.id}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <Avatar src={invoice.avatar} alt={invoice.name} size="md" />
                    <span className="text-sm font-medium text-text">{invoice.name}</span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <EmailIcon />
                    <span className="text-sm text-text">{invoice.email}</span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <CalendarIcon />
                    <span className="text-sm text-text">{invoice.date}</span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <Badge variant={statusVariants[invoice.status]}>{invoice.status}</Badge>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <StarIcon filled={invoice.starred} />
                    <MenuDots />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </PageLayout>
  );
}
