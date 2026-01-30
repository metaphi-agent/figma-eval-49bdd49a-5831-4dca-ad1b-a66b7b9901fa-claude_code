import React from 'react';
import { Card, StatCard } from '../components/ui';

export const Dashboard: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-[#202224]">Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#E8EAED]">
            <svg className="w-5 h-5 text-[#8B8D97]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm text-[#8B8D97]">10-06-2021</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#E8EAED]">
            <svg className="w-5 h-5 text-[#8B8D97]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm text-[#8B8D97]">10-10-2021</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={<svg className="w-6 h-6 text-[#5B5FFF]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>}
          value="178+"
          label="Save Products"
          iconBgColor="#E5E7FF"
        />
        <StatCard
          icon={<svg className="w-6 h-6 text-[#FFA043]" fill="currentColor" viewBox="0 0 24 24"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/></svg>}
          value="20+"
          label="Stock Products"
          iconBgColor="#FFF5E5"
        />
        <StatCard
          icon={<svg className="w-6 h-6 text-[#FF5B5B]" fill="currentColor" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>}
          value="190+"
          label="Sales Products"
          iconBgColor="#FFE5E5"
        />
        <StatCard
          icon={<svg className="w-6 h-6 text-[#5B5FFF]" fill="currentColor" viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>}
          value="12+"
          label="Job Application"
          iconBgColor="#E5E7FF"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Reports Chart */}
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[#202224]">Reports</h2>
            <button className="text-[#8B8D97] hover:text-[#202224]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
            </button>
          </div>
          <div className="h-64 flex items-end justify-between gap-4">
            {/* Placeholder for line chart */}
            <div className="flex-1 h-full relative">
              <svg className="w-full h-full" viewBox="0 0 400 200">
                <defs>
                  <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#5B5FFF', stopOpacity: 0.3 }} />
                    <stop offset="100%" style={{ stopColor: '#5B5FFF', stopOpacity: 0 }} />
                  </linearGradient>
                </defs>
                {/* Line chart path */}
                <path d="M 20 120 Q 60 80, 100 100 T 180 60 T 260 100 T 340 40"
                      stroke="#5B5FFF" strokeWidth="3" fill="none" />
                <path d="M 20 120 Q 60 80, 100 100 T 180 60 T 260 100 T 340 40 L 340 200 L 20 200 Z"
                      fill="url(#lineGrad1)" />
              </svg>
            </div>
          </div>
        </Card>

        {/* Analytics Donut Chart */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[#202224]">Analytics</h2>
            <button className="text-[#8B8D97] hover:text-[#202224]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
            </button>
          </div>
          <div className="flex items-center justify-center h-64">
            <div className="relative w-48 h-48">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#5B5FFF" strokeWidth="15" strokeDasharray="180 251" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#FFA043" strokeWidth="15" strokeDasharray="50 251" strokeDashoffset="-180" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#FF5B5B" strokeWidth="15" strokeDasharray="21 251" strokeDashoffset="-230" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-3xl font-bold text-[#202224]">80%</div>
                <div className="text-sm text-[#8B8D97]">Transactions</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#5B5FFF]"></div>
              <span className="text-sm text-[#8B8D97]">Sale</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FFA043]"></div>
              <span className="text-sm text-[#8B8D97]">Distribute</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5B5B]"></div>
              <span className="text-sm text-[#8B8D97]">Return</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[#202224]">Recent Orders</h2>
            <button className="text-[#8B8D97] hover:text-[#202224]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-[#8B8D97] border-b border-[#E8EAED]">
                  <th className="pb-3 font-medium">Tracking no</th>
                  <th className="pb-3 font-medium">Product Name</th>
                  <th className="pb-3 font-medium">Price</th>
                  <th className="pb-3 font-medium">Total Order</th>
                  <th className="pb-3 font-medium">Total Amount</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { id: '#876364', name: 'Camera Lens', price: '$178', orders: '325', amount: '$1,46,660', icon: '📷' },
                  { id: '#876368', name: 'Black Sleep Dress', price: '$14', orders: '53', amount: '$46,660', icon: '👗' },
                  { id: '#876412', name: 'Argan Oil', price: '$21', orders: '78', amount: '$3,46,676', icon: '🧴' },
                  { id: '#876621', name: 'EAU DE Parfum', price: '$32', orders: '98', amount: '$3,46,981', icon: '💐' }
                ].map((order) => (
                  <tr key={order.id} className="border-b border-[#E8EAED] last:border-0">
                    <td className="py-4 text-[#202224]">{order.id}</td>
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-[#F7F8FA] flex items-center justify-center">
                          {order.icon}
                        </div>
                        <span className="text-[#202224]">{order.name}</span>
                      </div>
                    </td>
                    <td className="py-4 text-[#202224]">{order.price}</td>
                    <td className="py-4">
                      <span className="px-3 py-1 bg-[#E0F5FF] text-[#00C4DB] rounded-full text-xs font-medium">
                        {order.orders}
                      </span>
                    </td>
                    <td className="py-4 text-[#202224] font-medium">{order.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Top Selling Products */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[#202224]">Top Selling Products</h2>
            <button className="text-[#8B8D97] hover:text-[#202224]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
            </button>
          </div>
          <div className="space-y-4">
            {[
              { name: 'NIKE Shoes Black Pattern', price: '$87', rating: 4, image: '👟' },
              { name: 'iPhone 12', price: '$987', rating: 4, image: '📱' }
            ].map((product, index) => (
              <div key={index} className="flex items-center gap-4 p-3 bg-[#F7F8FA] rounded-lg">
                <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center text-2xl flex-shrink-0">
                  {product.image}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-[#202224] truncate">{product.name}</h4>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < product.rating ? 'text-[#FFA043]' : 'text-[#D1D3D8]'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-base font-bold text-[#202224] mt-1">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
