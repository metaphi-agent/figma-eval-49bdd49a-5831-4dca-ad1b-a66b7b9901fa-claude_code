import React from 'react';
import { Badge } from '../components/ui';

export const BoardList: React.FC = () => {
  const tasks = [
    { title: 'Dashboard Design', priority: 'low' as const, status: 'onTrack' as const, stage: 'todo' },
    { title: 'Landing page Design', priority: 'medium' as const, status: 'atRisk' as const, stage: 'todo' },
    { title: 'E-Shop Mobile App', priority: 'high' as const, status: null, stage: 'todo' },
    { title: 'Dashboard Design', priority: 'high' as const, status: 'onTrack' as const, stage: 'inprogress' },
    { title: 'Landing page Design', priority: 'low' as const, status: null, stage: 'inprogress' },
    { title: 'E-Shop Mobile App', priority: 'low' as const, status: 'onTrack' as const, stage: 'inprogress' }
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-[#202224]">Task Preview</h1>
        <button className="px-6 py-2.5 bg-[#5B5FFF] text-white rounded-lg hover:bg-[#4B4FEF] transition-colors flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
          Filter
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-4 mb-6">
        <button className="px-4 py-2 text-sm text-[#8B8D97] hover:text-[#202224] transition-colors">
          List
        </button>
        <button className="px-4 py-2 text-sm bg-[#5B5FFF] text-white rounded-lg">
          Board
        </button>
        <button className="px-4 py-2 text-sm text-[#8B8D97] hover:text-[#202224] transition-colors">
          Timeline
        </button>
        <div className="flex-1"></div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 bg-white border border-[#E8EAED] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#5B5FFF]"
          />
          <svg className="w-5 h-5 text-[#8B8D97] absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {['ToDo', 'In Progress', 'In Review', 'Done'].map((column) => (
          <div key={column} className="bg-[#F7F8FA] rounded-xl p-4">
            <h3 className="text-lg font-bold text-[#202224] mb-4">{column}</h3>
            <div className="space-y-4">
              {tasks.filter(() => Math.random() > 0.5).map((task, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-[#E8EAED]">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4 rounded border-[#D1D3D8] text-[#5B5FFF]" />
                      <h4 className="font-semibold text-[#202224] text-sm">{task.title}</h4>
                    </div>
                    <button className="text-[#8B8D97]">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant={task.priority} size="sm">{task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}</Badge>
                    {task.status && <Badge variant={task.status} size="sm">On Track</Badge>}
                  </div>

                  <p className="text-xs text-[#8B8D97] mb-3">
                    Discussion for management dashboard ui design
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-[#E8EAED] overflow-hidden">
                          <img src={`https://i.pravatar.cc/24?img=${i + 30}`} alt="" className="w-full h-full object-cover" />
                        </div>
                      ))}
                      <div className="w-6 h-6 rounded-full border-2 border-white bg-[#5B5FFF] flex items-center justify-center text-white text-xs">
                        +
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-[#8B8D97]">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        112
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                        1.2k
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
