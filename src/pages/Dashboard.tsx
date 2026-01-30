import { PageLayout, StatsCard } from '../components/blocks';
import { Card, Avatar, Badge } from '../components/ui';
import { recentOrders, topSellingProducts } from '../data/mockData';

// Icons for stats cards
const SaveIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="#5EC3FF"/>
  </svg>
);

const StockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 8H17V4H3C1.9 4 1 4.9 1 6V17H3C3 18.66 4.34 20 6 20C7.66 20 9 18.66 9 17H15C15 18.66 16.34 20 18 20C19.66 20 21 18.66 21 17H23V12L20 8ZM6 18.5C5.17 18.5 4.5 17.83 4.5 17C4.5 16.17 5.17 15.5 6 15.5C6.83 15.5 7.5 16.17 7.5 17C7.5 17.83 6.83 18.5 6 18.5ZM19.5 9.5L21.46 12H17V9.5H19.5ZM18 18.5C17.17 18.5 16.5 17.83 16.5 17C16.5 16.17 17.17 15.5 18 15.5C18.83 15.5 19.5 16.17 19.5 17C19.5 17.83 18.83 18.5 18 18.5Z" fill="#FCBE2D"/>
  </svg>
);

const SalesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 6H17C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6H5C3.9 6 3.01 6.9 3.01 8L3 20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V8C21 6.9 20.1 6 19 6ZM12 3C13.66 3 15 4.34 15 6H9C9 4.34 10.34 3 12 3ZM12 13C9.24 13 7 10.76 7 8H9C9 9.66 10.34 11 12 11C13.66 11 15 9.66 15 8H17C17 10.76 14.76 13 12 13Z" fill="#FF9066"/>
  </svg>
);

const JobIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM10 4H14V6H10V4ZM20 19H4V8H20V19Z" fill="#605BFF"/>
  </svg>
);

const MenuDots = () => (
  <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-30">
    <circle cx="2" cy="2" r="2" fill="currentColor"/>
    <circle cx="7" cy="2" r="2" fill="currentColor"/>
    <circle cx="12" cy="2" r="2" fill="currentColor"/>
  </svg>
);

const StarIcon = ({ filled }: { filled?: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "#FCBE2D" : "none"} stroke="#FCBE2D" strokeWidth="2">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
  </svg>
);

export default function Dashboard() {
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
    </div>
  );

  return (
    <PageLayout title="Dashboard" actions={dateActions}>
      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <StatsCard title="Save Products" value="178+" icon={<SaveIcon />} iconBg="bg-blue-light" />
        <StatsCard title="Stock Products" value="20+" icon={<StockIcon />} iconBg="bg-yellow-light" />
        <StatsCard title="Sales Products" value="190+" icon={<SalesIcon />} iconBg="bg-orange-light" />
        <StatsCard title="Job Application" value="12+" icon={<JobIcon />} iconBg="bg-primary-bg" />
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Reports Chart */}
        <Card className="col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-text-light">Reports</h3>
            <MenuDots />
          </div>
          <div className="h-[280px] relative">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-text-muted">
              <span>100</span>
              <span>80</span>
              <span>60</span>
              <span>40</span>
              <span>20</span>
              <span>0</span>
            </div>
            {/* Chart area */}
            <div className="ml-8 h-full relative">
              {/* Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="border-t border-border h-0" />
                ))}
              </div>
              {/* Chart SVG */}
              <svg className="w-full h-[calc(100%-32px)]" viewBox="0 0 640 220" preserveAspectRatio="none">
                {/* Gradient definitions */}
                <defs>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#5EC3FF"/>
                    <stop offset="100%" stopColor="#FD5C9F"/>
                  </linearGradient>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#5EC3FF" stopOpacity="0.04"/>
                    <stop offset="100%" stopColor="#FD5C9F" stopOpacity="0.04"/>
                  </linearGradient>
                </defs>
                {/* Area fill */}
                <path
                  d="M0 160 Q32 140 64 120 Q96 130 128 160 Q160 140 192 110 Q224 90 256 100 Q288 75 320 55 Q352 85 384 95 Q416 130 448 145 Q480 120 512 100 Q544 80 576 70 Q608 50 640 40 L640 220 L0 220 Z"
                  fill="url(#areaGradient)"
                />
                {/* Main line */}
                <path
                  d="M0 160 Q32 140 64 120 Q96 130 128 160 Q160 140 192 110 Q224 90 256 100 Q288 75 320 55 Q352 85 384 95 Q416 130 448 145 Q480 120 512 100 Q544 80 576 70 Q608 50 640 40"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                {/* Data points */}
                {[
                  [64, 120], [128, 160], [192, 110], [256, 100], [320, 55],
                  [384, 95], [448, 145], [512, 100], [576, 70], [640, 40]
                ].map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="5" fill="white" stroke="#5EC3FF" strokeWidth="2"/>
                ))}
              </svg>
              {/* X-axis labels */}
              <div className="flex justify-between text-xs text-text-muted mt-2">
                {['10am', '11am', '12am', '01am', '02am', '03am', '04am', '05am', '06am', '07am'].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              {/* Tooltip */}
              <div className="absolute left-[280px] top-[30px] bg-primary text-white px-3 py-2 rounded-lg text-sm shadow-lg">
                <div className="text-xs opacity-80">Sales</div>
                <div className="font-bold">2,678</div>
                <div className="absolute left-1/2 -bottom-1.5 w-3 h-3 bg-primary rotate-45 transform -translate-x-1/2" />
              </div>
            </div>
          </div>
        </Card>

        {/* Analytics Donut */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-text-light">Analytics</h3>
            <MenuDots />
          </div>
          <div className="flex flex-col items-center">
            {/* Donut Chart */}
            <div className="relative w-48 h-48">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                {/* Background circle */}
                <circle cx="50" cy="50" r="40" fill="none" stroke="#f0f0f0" strokeWidth="20"/>
                {/* Blue segment - 80% */}
                <circle cx="50" cy="50" r="40" fill="none" stroke="#5EC3FF" strokeWidth="20"
                  strokeDasharray="201 251" strokeDashoffset="0" strokeLinecap="round"/>
                {/* Yellow segment - 12% */}
                <circle cx="50" cy="50" r="40" fill="none" stroke="#FCBE2D" strokeWidth="20"
                  strokeDasharray="30 251" strokeDashoffset="-201"/>
                {/* Orange segment - 8% */}
                <circle cx="50" cy="50" r="40" fill="none" stroke="#FF9066" strokeWidth="20"
                  strokeDasharray="20 251" strokeDashoffset="-231"/>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-text">80%</span>
                <span className="text-sm text-primary">Transactions</span>
              </div>
            </div>
            {/* Legend */}
            <div className="flex items-center justify-center gap-6 mt-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue" />
                <span className="text-sm text-text-muted">Sale</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-yellow" />
                <span className="text-sm text-text-muted">Distribute</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-orange" />
                <span className="text-sm text-text-muted">Return</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Recent Orders */}
        <Card className="col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-text-light">Recent Orders</h3>
            <MenuDots />
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-sm font-semibold text-text-muted pb-3">Tracking no</th>
                <th className="text-left text-sm font-semibold text-text-muted pb-3">Product Name</th>
                <th className="text-left text-sm font-semibold text-text-muted pb-3">Price</th>
                <th className="text-left text-sm font-semibold text-text-muted pb-3">Total Order</th>
                <th className="text-right text-sm font-semibold text-text-muted pb-3">Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b border-border last:border-0">
                  <td className="py-3 text-sm text-text">#{order.id}</td>
                  <td className="py-3">
                    <div className="flex items-center gap-3">
                      <img src={order.image} alt={order.name} className="w-8 h-8 rounded-lg object-cover" />
                      <span className="text-sm text-text">{order.name}</span>
                    </div>
                  </td>
                  <td className="py-3 text-sm text-text">${order.price}</td>
                  <td className="py-3">
                    <Badge variant="success">{order.quantity}</Badge>
                  </td>
                  <td className="py-3 text-sm text-text text-right">${order.total.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        {/* Top Selling Products */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-text-light">Top Selling Products</h3>
            <MenuDots />
          </div>
          <div className="space-y-4">
            {topSellingProducts.map((product) => (
              <div key={product.id} className="flex items-center gap-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 rounded-lg object-cover bg-blue-light"
                />
                <div>
                  <h4 className="text-sm font-semibold text-text mb-1">{product.name}</h4>
                  <div className="flex items-center gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} filled={i < Math.floor(product.rating)} />
                    ))}
                  </div>
                  <p className="text-base font-bold text-text">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </PageLayout>
  );
}
