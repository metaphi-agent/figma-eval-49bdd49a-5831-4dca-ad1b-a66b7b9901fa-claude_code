import { useState } from 'react';
import { PageLayout } from '../components/blocks';
import { Card, Avatar, Button, Badge, Checkbox } from '../components/ui';
import { scheduleList, calendarPeople } from '../data/mockData';

const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6"/>
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

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-muted">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const EditIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#605BFF" strokeWidth="2">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);

const DeleteIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D11A2A" strokeWidth="2">
    <polyline points="3 6 5 6 21 6"/>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
  </svg>
);

const locationColors: Record<string, string> = {
  purple: 'bg-primary-bg text-primary',
  green: 'bg-green-light text-green',
  blue: 'bg-blue-light text-blue',
  orange: 'bg-orange-light text-orange',
};

export default function ScheduleList() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const actions = (
    <Button leftIcon={
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
      </svg>
    }>
      Add New
    </Button>
  );

  return (
    <PageLayout title="Schedule List" actions={actions}>
      <div className="grid grid-cols-3 gap-6">
        {/* Sidebar */}
        <div className="space-y-6">
          <Button className="w-full" leftIcon={
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          }>
            Create Schedule
          </Button>

          {/* Mini Calendar */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold text-text">December 2, 2021</span>
              <div className="flex gap-1">
                <button className="p-1 hover:bg-background-alt rounded"><ChevronLeft /></button>
                <button className="p-1 hover:bg-background-alt rounded"><ChevronRight /></button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs">
              {['S', 'S', 'M', 'T', 'W', 'T', 'F'].map((d, i) => (
                <span key={i} className="text-text-muted py-1">{d}</span>
              ))}
              {[29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2].map((day, i) => (
                <button
                  key={i}
                  className={`py-1 rounded-full text-sm ${
                    day === 3 && i > 2 ? 'bg-primary text-white' :
                    (i < 2 || i > 32) ? 'text-text-muted' : 'text-text hover:bg-background-alt'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </Card>

          {/* People */}
          <Card>
            <h3 className="font-bold text-text mb-4">People</h3>
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search for People"
                className="w-full h-10 px-4 bg-background-alt rounded-[10px] text-sm"
              />
            </div>
            <div className="space-y-3">
              {calendarPeople.map((person) => (
                <div key={person.id} className="flex items-center gap-3">
                  <Avatar src={person.avatar} alt={person.name} size="md" />
                  <div>
                    <p className="text-sm font-semibold text-text">{person.name}</p>
                    <p className="text-xs text-text-muted">{person.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <button className="w-full py-3 text-primary text-sm font-semibold border border-primary-light rounded-[10px] hover:bg-primary-bg transition-colors">
            My Schedule
          </button>
        </div>

        {/* Schedule Table */}
        <Card padding="none" className="col-span-2">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="w-12 px-4 py-4">
                  <Checkbox checked={selectedIds.length === scheduleList.length} onChange={() => {
                    if (selectedIds.length === scheduleList.length) {
                      setSelectedIds([]);
                    } else {
                      setSelectedIds(scheduleList.map(s => s.id));
                    }
                  }} />
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
                    Time
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M3 4.5L6 7.5L9 4.5"/>
                    </svg>
                  </div>
                </th>
                <th className="px-4 py-4 text-left text-sm font-semibold text-text-muted">
                  <div className="flex items-center gap-2">
                    Location
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M3 4.5L6 7.5L9 4.5"/>
                    </svg>
                  </div>
                </th>
                <th className="px-4 py-4"></th>
              </tr>
            </thead>
            <tbody>
              {scheduleList.map((schedule) => (
                <tr key={schedule.id} className="border-b border-border last:border-0 hover:bg-background-alt transition-colors">
                  <td className="w-12 px-4 py-4">
                    <Checkbox
                      checked={selectedIds.includes(schedule.id)}
                      onChange={() => {
                        if (selectedIds.includes(schedule.id)) {
                          setSelectedIds(selectedIds.filter(id => id !== schedule.id));
                        } else {
                          setSelectedIds([...selectedIds, schedule.id]);
                        }
                      }}
                    />
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <CalendarIcon />
                      <span className="text-sm text-text">{schedule.date}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <ClockIcon />
                      <span className="text-sm text-text">{schedule.time}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${locationColors[schedule.locationColor] || 'bg-primary-bg text-primary'}`}>
                      <LocationIcon />
                      {schedule.location}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-background rounded-lg transition-colors">
                        <EditIcon />
                      </button>
                      <button className="p-2 hover:bg-background rounded-lg transition-colors">
                        <DeleteIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </PageLayout>
  );
}
