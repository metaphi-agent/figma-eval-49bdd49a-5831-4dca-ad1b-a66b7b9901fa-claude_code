import { useState } from 'react';
import { PageLayout, StatsCard } from '../components/blocks';
import { Card, Badge, Button } from '../components/ui';
import { products } from '../data/mockData';

const ProductIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5EC3FF" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <line x1="3" y1="9" x2="21" y2="9"/>
    <line x1="9" y1="21" x2="9" y2="9"/>
  </svg>
);

const SalesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FCBE2D" strokeWidth="2">
    <line x1="12" y1="1" x2="12" y2="23"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

const MenuDots = () => (
  <svg width="14" height="4" viewBox="0 0 14 4" fill="currentColor" className="opacity-30">
    <circle cx="2" cy="2" r="2"/>
    <circle cx="7" cy="2" r="2"/>
    <circle cx="12" cy="2" r="2"/>
  </svg>
);

const TrendIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary-light">
    <path d="M3 17L9 11L13 15L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const monthlyData = [
  { month: 'Jan', value: 23400, color: 'bg-orange' },
  { month: 'Feb', value: 15000, color: 'bg-blue' },
  { month: 'Mar', value: 30000, color: 'bg-orange' },
  { month: 'Apr', value: 22000, color: 'bg-green' },
  { month: 'May', value: 10000, color: 'bg-blue' },
  { month: 'Jun', value: 23400, color: 'bg-yellow' },
  { month: 'Jul', value: 5000, color: 'bg-blue' },
];

export default function ProductAnalytics() {
  const [activeTab, setActiveTab] = useState<'Product' | 'Customer'>('Product');

  const dateActions = (
    <div className="flex items-center gap-4">
      <button className="flex items-center gap-2 px-4 py-2 bg-surface rounded-[10px] text-sm text-text-muted">
        10-06-2021
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
          <path d="M3 4.5L6 7.5L9 4.5"/>
        </svg>
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-surface rounded-[10px] text-sm text-text-muted">
        10-10-2021
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
          <path d="M3 4.5L6 7.5L9 4.5"/>
        </svg>
      </button>
      <Button leftIcon={
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
      }>
        Add Product
      </Button>
    </div>
  );

  return (
    <PageLayout title="Product Analytics" actions={dateActions}>
      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {(['Product', 'Customer'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 text-sm font-semibold rounded-full transition-colors ${
              activeTab === tab
                ? 'bg-primary text-white'
                : 'bg-surface text-text-muted hover:bg-background-alt'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Total Product Card */}
        <Card className="col-span-1">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-blue-light rounded-full flex items-center justify-center">
              <ProductIcon />
            </div>
            <div>
              <p className="text-sm text-text-muted">Total Product</p>
              <p className="text-3xl font-bold text-text">5,00,874</p>
              <p className="text-sm text-green">+1400 New Added</p>
            </div>
          </div>
          {/* Mini chart */}
          <div className="mt-4 h-20">
            <svg className="w-full h-full" viewBox="0 0 300 80" preserveAspectRatio="none">
              <path
                d="M0 60 Q50 40 100 50 Q150 60 200 30 Q250 20 300 40"
                fill="none"
                stroke="#5EC3FF"
                strokeWidth="2"
              />
              <path
                d="M0 60 Q50 40 100 50 Q150 60 200 30 Q250 20 300 40 L300 80 L0 80 Z"
                fill="url(#blueGradient)"
              />
              <defs>
                <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5EC3FF" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#5EC3FF" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </Card>

        {/* Total Sales Card */}
        <Card className="col-span-1">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-yellow-light rounded-full flex items-center justify-center">
              <SalesIcon />
            </div>
            <div>
              <p className="text-sm text-text-muted">Total Sales</p>
              <p className="text-3xl font-bold text-text">2,34,888</p>
              <p className="text-sm text-green">+1000 Sales Today</p>
            </div>
          </div>
          {/* Mini chart */}
          <div className="mt-4 h-20">
            <svg className="w-full h-full" viewBox="0 0 300 80" preserveAspectRatio="none">
              <path
                d="M0 50 Q50 60 100 40 Q150 30 200 50 Q250 60 300 30"
                fill="none"
                stroke="#FCBE2D"
                strokeWidth="2"
              />
              <path
                d="M0 50 Q50 60 100 40 Q150 30 200 50 Q250 60 300 30 L300 80 L0 80 Z"
                fill="url(#yellowGradient)"
              />
              <defs>
                <linearGradient id="yellowGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FCBE2D" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#FCBE2D" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </Card>

        {/* Product Add by Month */}
        <Card className="col-span-1 row-span-2">
          <h3 className="text-lg font-bold text-text mb-6">Product Add by Month</h3>
          <div className="space-y-3">
            {monthlyData.map((item) => (
              <div key={item.month} className="flex items-center gap-3">
                <span className="w-8 text-sm text-text-muted">{item.month}</span>
                <div className="flex-1 h-4 bg-background-alt rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full`}
                    style={{ width: `${(item.value / 30000) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-semibold text-text w-16 text-right">
                  {item.value.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Top Selling Products Table */}
        <Card padding="none" className="col-span-2">
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h3 className="text-lg font-bold text-text">Top Selling Products</h3>
            <button className="text-sm text-primary hover:underline">See More</button>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-4 text-left text-sm font-semibold text-text-muted">SN</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text-muted">Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text-muted">Price</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text-muted">Total Order</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text-muted">Total Sales</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id} className="border-b border-border last:border-0 hover:bg-background-alt">
                  <td className="px-6 py-4">
                    {product.rank === 'top' ? (
                      <span className="w-6 h-6 flex items-center justify-center text-yellow">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                          <circle cx="12" cy="10" r="3" fill="white"/>
                        </svg>
                      </span>
                    ) : (
                      <span className="text-sm text-text">{product.rank}</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={product.image} alt={product.name} className="w-10 h-10 rounded-lg object-cover bg-background-alt" loading="lazy" />
                      <span className="text-sm font-medium text-primary">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-text">${product.price}</td>
                  <td className="px-6 py-4 text-sm text-text">{product.orders.toLocaleString()} Piece</td>
                  <td className="px-6 py-4 text-sm text-green">${product.sales.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>

      {/* Product Sales Analytics */}
      <Card>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-text">Product Sales Analytics</h3>
          <MenuDots />
        </div>
        <div className="flex items-center gap-12">
          {/* Donut Chart */}
          <div className="relative w-48 h-48">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#f0f0f0" strokeWidth="20"/>
              <circle cx="50" cy="50" r="40" fill="none" stroke="#5EC3FF" strokeWidth="20"
                strokeDasharray="150 251" strokeDashoffset="0" strokeLinecap="round"/>
              <circle cx="50" cy="50" r="40" fill="none" stroke="#FCBE2D" strokeWidth="20"
                strokeDasharray="70 251" strokeDashoffset="-150"/>
              <circle cx="50" cy="50" r="40" fill="none" stroke="#FF9066" strokeWidth="20"
                strokeDasharray="31 251" strokeDashoffset="-220"/>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <TrendIcon />
            </div>
          </div>
          {/* Legend */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue" />
              <span className="text-sm text-text-muted">Total Sales</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-yellow" />
              <span className="text-sm text-text-muted">Total Order</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-orange" />
              <span className="text-sm text-text-muted">Order Cancel</span>
            </div>
          </div>
        </div>
      </Card>
    </PageLayout>
  );
}
