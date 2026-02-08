import { useState } from 'react';
import { Card, Button, Avatar, Input, Icons } from '../components/ui';
import { PageHeader } from '../components/blocks';
import { calendarEvents, calendarPeople } from '../data/mockData';

const views = ['Day', 'Week', 'Month', 'Year'];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export function Calendar() {
  const [activeView, setActiveView] = useState('Month');
  const [currentDate] = useState(new Date(2021, 11, 2));

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const prevMonthDays = getDaysInMonth(year, month - 1);
  const calendarDays: { day: number; currentMonth: boolean }[] = [];

  for (let i = firstDay - 1; i >= 0; i--) {
    calendarDays.push({ day: prevMonthDays - i, currentMonth: false });
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push({ day: i, currentMonth: true });
  }
  const remaining = 42 - calendarDays.length;
  for (let i = 1; i <= remaining; i++) {
    calendarDays.push({ day: i, currentMonth: false });
  }

  const getEventsForDay = (day: number) => {
    const found = calendarEvents.find(e => e.date === day);
    return found ? found.events : [];
  };

  const eventColors: Record<string, string> = {
    green: 'bg-green',
    red: 'bg-red',
    blue: 'bg-blue',
    orange: 'bg-orange',
  };

  return (
    <div className="flex gap-6">
      {/* Left Sidebar */}
      <div className="w-[280px] space-y-6">
        <Card>
          <Button icon={Icons.plus} className="w-full">Create Schedule</Button>
        </Card>

        {/* Mini Calendar */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-text">December 2, 2021</span>
            <div className="flex gap-1">
              <button className="p-1 text-text-muted hover:text-text">{Icons.arrowLeft}</button>
              <button className="p-1 text-text-muted hover:text-text">{Icons.arrowRight}</button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-xs">
            {['S', 'S', 'M', 'T', 'W', 'T', 'F'].map((d, i) => (
              <div key={i} className="py-1 text-text-muted">{d}</div>
            ))}
            {calendarDays.slice(0, 35).map((d, i) => {
              const isSelected = d.day === 3 && d.currentMonth;
              return (
                <div
                  key={i}
                  className={[
                    'py-1 rounded',
                    d.currentMonth ? 'text-text' : 'text-text-muted',
                    isSelected ? 'bg-primary text-white' : '',
                  ].join(' ')}
                >
                  {d.day}
                </div>
              );
            })}
          </div>
        </Card>

        {/* People */}
        <Card>
          <h3 className="text-sm font-semibold text-text mb-4">People</h3>
          <div className="relative mb-4">
            <Input placeholder="Search for People" className="text-xs py-2" />
          </div>
          <div className="space-y-3">
            {calendarPeople.map((person, i) => (
              <div key={i} className="flex items-center gap-3">
                <Avatar name={person.name} size="sm" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-text truncate">{person.name}</p>
                  <p className="text-xs text-text-muted truncate">{person.email}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <Button variant="outline" className="w-full text-primary border-primary">My Schedule</Button>
        </Card>
      </div>

      {/* Main Calendar */}
      <div className="flex-1">
        <PageHeader title="Calendar">
          <div className="flex items-center gap-2">
            {views.map((view) => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                className={[
                  'px-4 py-2 text-sm font-medium rounded-[var(--radius-md)] transition-colors',
                  activeView === view ? 'bg-primary text-white' : 'bg-white text-text hover:bg-background-alt',
                ].join(' ')}
              >
                {view}
              </button>
            ))}
          </div>
        </PageHeader>

        <Card padding="none">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <span className="font-semibold text-text">December 2, 2021</span>
            <div className="flex gap-1">
              <button className="p-2 text-text-muted hover:text-text">{Icons.arrowLeft}</button>
              <button className="p-2 text-text-muted hover:text-text">{Icons.arrowRight}</button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7">
            {days.map((day, i) => (
              <div key={i} className={['py-3 text-center text-sm font-medium', i === 3 ? 'text-red bg-red-light/50' : 'text-text-muted'].join(' ')}>
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 border-t border-border">
            {calendarDays.map((d, i) => {
              const events = d.currentMonth ? getEventsForDay(d.day) : [];
              const isToday = d.day === 2 && d.currentMonth;
              const isWednesday = i % 7 === 3;
              const dayLabel = d.day < 10 ? '0' + d.day : String(d.day);

              return (
                <div
                  key={i}
                  className={[
                    'min-h-[120px] p-2 border-b border-r border-border',
                    d.currentMonth ? '' : 'bg-background-alt/30',
                    isWednesday ? 'bg-red-light/20' : '',
                  ].join(' ')}
                >
                  <span className={[
                    'text-sm',
                    d.currentMonth ? (isToday ? 'text-red font-semibold' : 'text-text') : 'text-text-muted',
                  ].join(' ')}>
                    {dayLabel}
                  </span>
                  <div className="mt-2 space-y-1">
                    {events.slice(0, 2).map((event, j) => (
                      <div
                        key={j}
                        className={['text-[10px] px-2 py-1 rounded text-white truncate', eventColors[event.color] || 'bg-primary'].join(' ')}
                      >
                        {event.title}
                      </div>
                    ))}
                    {events.length > 2 && (
                      <button className="text-[10px] text-text-muted hover:text-text">More</button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
}
