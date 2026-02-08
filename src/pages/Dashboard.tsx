import { Card, Badge, Avatar, Icons } from '../components/ui';
import { PageHeader } from '../components/blocks';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { reportsData, analyticsData, recentOrders, topProducts } from '../data/mockData';

const stats = [
  { label: 'Save Products', value: '178+', bgColor: 'bg-primary-bg', iconColor: 'text-primary', icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor"/>
    </svg>
  )},
  { label: 'Stock Products', value: '20+', bgColor: 'bg-orange-light', iconColor: 'text-orange', icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" fill="currentColor"/>
    </svg>
  )},
  { label: 'Sales Products', value: '190+', bgColor: 'bg-red-light', iconColor: 'text-red', icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  )},
  { label: 'Job Application', value: '12+', bgColor: 'bg-blue-light', iconColor: 'text-blue', icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )},
];

const COLORS = ['#605BFF', '#FCBE2D', '#FF9066'];

export function Dashboard() {
  return (
    <div>
      <PageHeader title="Dashboard">
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-[var(--radius-md)] text-sm text-text border border-border">
            10-06-2021
            {Icons.chevronDown}
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-[var(--radius-md)] text-sm text-text border border-border">
            10-10-2021
            {Icons.chevronDown}
          </button>
        </div>
      </PageHeader>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <Card key={index} className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.bgColor} ${stat.iconColor}`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-2xl font-bold text-text">{stat.value}</p>
              <p className="text-sm text-text-muted">{stat.label}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Reports Chart */}
        <Card className="col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-text">Reports</h3>
            <button className="text-text-muted hover:text-text">{Icons.more}</button>
          </div>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={reportsData}>
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: '#03022980', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#03022980', fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ background: '#fff', border: 'none', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  labelStyle={{ color: '#030229' }}
                />
                <Line type="monotone" dataKey="sales" stroke="#605BFF" strokeWidth={2} dot={{ r: 4, fill: '#fff', stroke: '#605BFF', strokeWidth: 2 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="revenue" stroke="#FD5C9F" strokeWidth={2} dot={{ r: 4, fill: '#fff', stroke: '#FD5C9F', strokeWidth: 2 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Analytics Donut Chart */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-text">Analytics</h3>
            <button className="text-text-muted hover:text-text">{Icons.more}</button>
          </div>
          <div className="h-[200px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={analyticsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                >
                  {analyticsData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="text-2xl font-bold text-text">80%</p>
              <p className="text-xs text-text-muted">Transactions</p>
            </div>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            {analyticsData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                <span className="text-xs text-text-muted">{item.name}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-3 gap-6">
        {/* Recent Orders Table */}
        <Card className="col-span-2" padding="none">
          <div className="flex items-center justify-between p-6 pb-4">
            <h3 className="text-lg font-semibold text-text">Recent Orders</h3>
            <button className="text-text-muted hover:text-text">{Icons.more}</button>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-left text-xs text-text-muted border-b border-border">
                <th className="px-6 py-3 font-medium">Tracking no</th>
                <th className="px-6 py-3 font-medium">Product Name</th>
                <th className="px-6 py-3 font-medium">Price</th>
                <th className="px-6 py-3 font-medium">Total Order</th>
                <th className="px-6 py-3 font-medium">Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => (
                <tr key={index} className="border-b border-border last:border-0">
                  <td className="px-6 py-4 text-sm text-text">{order.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-background-alt flex items-center justify-center text-xs">
                        {order.image[0].toUpperCase()}
                      </div>
                      <span className="text-sm text-text">{order.product}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-text">{order.price}</td>
                  <td className="px-6 py-4">
                    <Badge variant="success">{order.orders}</Badge>
                  </td>
                  <td className="px-6 py-4 text-sm text-text">{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        {/* Top Selling Products */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-text">Top Selling Products</h3>
            <button className="text-text-muted hover:text-text">{Icons.more}</button>
          </div>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-20 h-20 rounded-[var(--radius-md)] bg-background-alt flex items-center justify-center">
                  <span className="text-2xl">{product.image === 'shoes' ? '👟' : '📱'}</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-text mb-1">{product.name}</p>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < product.rating ? 'text-yellow' : 'text-border-medium'}>
                        {Icons.star}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm font-bold text-text">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
