import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Badge, Avatar, Card } from '../components/ui';

export const CustomerList: React.FC = () => {
  const customers = [
    { name: 'John Deo', email: 'johndoe2211@gmail.com', phone: '+33757005467', gender: 'male' as const },
    { name: 'Shelby Goode', email: 'shelbygoode481@gmail.com', phone: '+33757005467', gender: 'female' as const },
    { name: 'Robert Bacins', email: 'robertbacins4182@.com', phone: '+33757005467', gender: 'male' as const },
    { name: 'John Carilo', email: 'john carilo182@.com', phone: '+33757805467', gender: 'male' as const },
    { name: 'Adriene Watson', email: 'adrienewatson82@.com', phone: '+83757305467', gender: 'female' as const },
    { name: 'Jhon Deo', email: 'jhondeo24823@.com', phone: '+63457700546', gender: 'male' as const },
    { name: 'Mark Ruffalo', email: 'markruffalo3735@.com', phone: '+33757005467', gender: 'male' as const },
    { name: 'Bethany Jackson', email: 'bethanyjackson5@.com', phone: '+33757005467', gender: 'female' as const },
    { name: 'Christine Huston', email: 'christinehuston4@.com', phone: '+33757005467', gender: 'male' as const }
  ];

  return (
    <div className="flex gap-6">
      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-[#202224]">Customer List</h1>
          <Link to="/customers/add">
            <Button variant="primary" icon={<span>+</span>} iconPosition="left">
              Add Customer
            </Button>
          </Link>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-[#E8EAED] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#F7F8FA] text-left text-sm text-[#8B8D97]">
                  <th className="p-4 font-medium">Name</th>
                  <th className="p-4 font-medium">Email</th>
                  <th className="p-4 font-medium">Phone number</th>
                  <th className="p-4 font-medium">Gender</th>
                  <th className="p-4 w-12"></th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer, index) => (
                  <tr key={index} className="border-t border-[#E8EAED] hover:bg-[#F7F8FA] transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <Avatar src={`https://i.pravatar.cc/40?img=${index + 20}`} alt={customer.name} size="sm" />
                        <span className="text-[#202224] font-medium">{customer.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-[#202224]">{customer.email}</td>
                    <td className="p-4 text-[#202224]">{customer.phone}</td>
                    <td className="p-4">
                      <Badge variant={customer.gender}>
                        {customer.gender.charAt(0).toUpperCase() + customer.gender.slice(1)}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <button className="text-[#8B8D97] hover:text-[#202224] transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 space-y-6">
        {/* Customer Details */}
        <Card>
          <div className="text-center mb-6">
            <Avatar src="https://i.pravatar.cc/80?img=20" alt="John Deo" size="xl" className="mx-auto mb-3" />
            <h3 className="text-xl font-bold text-[#202224]">John Deo</h3>
            <p className="text-sm text-[#8B8D97]">UI/UX Designer</p>
          </div>

          <div className="flex justify-center gap-3 mb-6">
            <button className="px-4 py-2 text-sm text-[#5B5FFF] bg-[#F0F1FF] rounded-lg hover:bg-[#E5E7FF] transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Edit
            </button>
            <button className="px-4 py-2 text-sm text-[#FF5B5B] bg-[#FFE5E5] rounded-lg hover:bg-[#FFD5D5] transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Delete
            </button>
          </div>

          <div className="space-y-4 border-t border-[#E8EAED] pt-6">
            <h4 className="font-semibold text-[#202224]">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <svg className="w-5 h-5 text-[#8B8D97]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-[#202224]">kajope5182@ummoh.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <svg className="w-5 h-5 text-[#8B8D97]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-[#202224]">33757005467</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <svg className="w-5 h-5 text-[#8B8D97]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[#202224]">2239 Hog Camp Road Schaumburg</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Performance Card */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-[#202224]">Performance</h4>
            <button className="text-[#8B8D97] hover:text-[#202224]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>

          {/* Bar Chart */}
          <div className="h-32 flex items-end justify-between gap-2 mb-6">
            {[60, 80, 70, 90, 75, 85].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-[#FF9F7C] rounded-t-lg relative" style={{ height: `${height}%` }}>
                  {i === 1 && (
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-[#202224] bg-[#FF9F7C] px-2 py-1 rounded">
                      2.25k
                    </span>
                  )}
                </div>
                <span className="text-xs text-[#8B8D97]">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][i]}
                </span>
              </div>
            ))}
          </div>

          {/* Circular Progress */}
          <div className="flex items-center justify-around">
            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-2">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#E8EAED" strokeWidth="8" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#FFC043" strokeWidth="8" strokeDasharray="176 251" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-[#202224]">70%</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-2">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#E8EAED" strokeWidth="8" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#5B5FFF" strokeWidth="8" strokeDasharray="151 251" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-[#202224]">60%</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
