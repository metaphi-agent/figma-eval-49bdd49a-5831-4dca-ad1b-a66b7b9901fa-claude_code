import { useState } from 'react';
import { Card, Button, Badge, Icons, Input } from '../components/ui';
import { PageHeader } from '../components/blocks';
import { products, productAddByMonth } from '../data/mockData';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

type Tab = 'Product' | 'Customer';

const productIcons: Record<string, string> = {
  bluetooth: '🎧',
  airdot: '🎵',
  shoes: '👟',
  tshirt: '👕',
  watch: '⌚',
  top: '👚',
};

const barColors = ['#D11A2A', '#5EC3FF', '#FF9066', '#00B69B', '#5EC3FF', '#FCBE2D', '#605BFF'];

export function Product() {
  const [activeTab, setActiveTab] = useState<Tab>('Product');

  const totalProductData = [
    { x: 1, y: 20 }, { x: 2, y: 35 }, { x: 3, y: 25 }, { x: 4, y: 45 }, { x: 5, y: 30 },
    { x: 6, y: 55 }, { x: 7, y: 40 }, { x: 8, y: 50 }, { x: 9, y: 45 }, { x: 10, y: 60 },
  ];

  const salesAnalyticsData = [
    { name: 'Total Sales', value: 45, color: '#605BFF' },
    { name: 'Total Order', value: 35, color: '#FCBE2D' },
    { name: 'Order Cancel', value: 20, color: '#FF9066' },
  ];

  return (
    <div>
      <PageHeader title="Product Analytics">
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-[var(--radius-md)] text-sm text-text border border-border">
            10-06-2021
            {Icons.chevronDown}
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-[var(--radius-md)] text-sm text-text border border-border">
            10-10-2021
            {Icons.chevronDown}
          </button>
          <Button icon={Icons.plus}>Add Product</Button>
        </div>
      </PageHeader>

      <div className="flex items-center gap-2 mb-6">
        {(['Product', 'Customer'] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={[
              'px-4 py-2 text-sm font-medium rounded-[var(--radius-md)] transition-colors',
              activeTab === tab ? 'bg-primary text-white' : 'bg-white text-text hover:bg-background-alt',
            ].join(' ')}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Total Product */}
        <Card className="col-span-1">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-green-light rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="#00B69B" strokeWidth="2"/>
                <path d="M9 12L11 14L15 10" stroke="#00B69B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="text-sm text-text-muted">Total Product</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-text">5,00,874</span>
                <span className="text-xs text-green">+1400 New Added</span>
              </div>
            </div>
          </div>
          <div className="h-16">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={totalProductData}>
                <Line type="monotone" dataKey="y" stroke="#00B69B" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Total Sales */}
        <Card className="col-span-1">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-orange-light rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#FF9066" strokeWidth="2"/>
                <path d="M2 17L12 22L22 17" stroke="#FF9066" strokeWidth="2"/>
                <path d="M2 12L12 17L22 12" stroke="#FF9066" strokeWidth="2"/>
              </svg>
            </div>
            <div>
              <p className="text-sm text-text-muted">Total Sales</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-text">2,34,888</span>
                <span className="text-xs text-green">+1000 Sales Today</span>
              </div>
            </div>
          </div>
          <div className="h-16">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={totalProductData}>
                <Line type="monotone" dataKey="y" stroke="#FF9066" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Product Add by Month */}
        <Card>
          <h3 className="font-semibold text-text mb-4">Product Add by Month</h3>
          <div className="space-y-2">
            {productAddByMonth.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-8 text-xs text-text-muted">{item.month}</span>
                <div className="flex-1 h-4 bg-background-alt rounded overflow-hidden">
                  <div
                    className="h-full rounded"
                    style={{
                      width: (item.value / 30000) * 100 + '%',
                      backgroundColor: barColors[i],
                    }}
                  />
                </div>
                <span className="w-16 text-xs text-text text-right">{item.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Top Selling Products */}
        <Card className="col-span-2" padding="none">
          <div className="flex items-center justify-between p-6 pb-4">
            <h3 className="font-semibold text-text">Top Selling Products</h3>
            <button className="text-sm text-primary">See More</button>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-left text-xs text-text-muted border-b border-border">
                <th className="px-6 py-3 font-medium">SN</th>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Price</th>
                <th className="px-4 py-3 font-medium">Total Order</th>
                <th className="px-4 py-3 font-medium">Total Sales</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.sn} className="border-b border-border last:border-0">
                  <td className="px-6 py-4">
                    <Badge variant="warning" size="sm">{product.sn}</Badge>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-background-alt rounded flex items-center justify-center">
                        {productIcons[product.icon] || '📦'}
                      </span>
                      <span className="text-sm text-primary">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-text">{product.price}</td>
                  <td className="px-4 py-4 text-sm text-text">{product.orders}</td>
                  <td className="px-4 py-4 text-sm text-primary">{product.sales}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        {/* Product Sales Analytics */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-text">Product Sales Analytics</h3>
            <button className="text-text-muted">{Icons.more}</button>
          </div>
          <div className="h-48 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={salesAnalyticsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  dataKey="value"
                >
                  {salesAnalyticsData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <svg className="w-6 h-6 mx-auto text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2"/>
                <path d="M7 14L11 10L15 14L21 8" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            {salesAnalyticsData.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-xs text-text-muted">{item.name}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
