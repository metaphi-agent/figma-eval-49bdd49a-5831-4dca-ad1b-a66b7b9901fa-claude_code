import { useState } from 'react';
import { PageLayout } from '../components/blocks';
import { Card, Avatar, Button } from '../components/ui';
import { calendarEvents, calendarPeople } from '../data/mockData';

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

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-muted">
    <circle cx="11" cy="11" r="8"/>
    <path d="M21 21l-4.35-4.35"/>
  </svg>
);

const eventColors: Record<string, string> = {
  green: 'bg-green text-white',
  pink: 'bg-pink text-white',
  blue: 'bg-blue text-white',
  orange: 'bg-orange text-white',
};

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export default function Calendar() {
  const [currentDate] = useState(new Date(2021, 11, 2)); // December 2, 2021
  const [view, setView] = useState<'Day' | 'Week' | 'Month' | 'Year'>('Month');

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const daysInPrevMonth = getDaysInMonth(year, month - 1);

  // Generate calendar days
  const calendarDays: { day: number; currentMonth: boolean; date: string }[] = [];

  // Previous month days
  for (let i = firstDay - 1; i >= 0; i--) {
    calendarDays.push({
      day: daysInPrevMonth - i,
      currentMonth: false,
      date: `${year}-${String(month).padStart(2, '0')}-${String(daysInPrevMonth - i).padStart(2, '0')}`,
    });
  }

  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push({
      day: i,
      currentMonth: true,
      date: `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`,
    });
  }

  // Next month days
  const remainingDays = 42 - calendarDays.length;
  for (let i = 1; i <= remainingDays; i++) {
    calendarDays.push({
      day: i,
      currentMonth: false,
      date: `${year}-${String(month + 2).padStart(2, '0')}-${String(i).padStart(2, '0')}`,
    });
  }

  const getEventsForDate = (date: string) => {
    return calendarEvents.filter((e) => e.date === date);
  };

  const actions = (
    <div className="flex items-center gap-2">
      {(['Day', 'Week', 'Month', 'Year'] as const).map((v) => (
        <button
          key={v}
          onClick={() => setView(v)}
          className={`px-6 py-2 text-sm font-semibold rounded-full transition-colors ${
            view === v ? 'bg-primary text-white' : 'bg-surface text-text-muted hover:bg-background-alt'
          }`}
        >
          {v}
        </button>
      ))}
    </div>
  );

  return (
    <PageLayout title="Calendar" actions={actions}>
      <div className="grid grid-cols-4 gap-6">
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
              <span className="font-semibold text-text">{months[month]} {currentDate.getDate()}, {year}</span>
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
                className="w-full h-10 px-4 pr-10 bg-background-alt rounded-[10px] text-sm"
              />
              <SearchIcon />
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

        {/* Main Calendar */}
        <Card className="col-span-3">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-text">{months[month]} {currentDate.getDate()}, {year}</h3>
            <div className="flex gap-1">
              <button className="p-2 hover:bg-background-alt rounded"><ChevronLeft /></button>
              <button className="p-2 hover:bg-background-alt rounded"><ChevronRight /></button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-px bg-border rounded-lg overflow-hidden">
            {/* Header */}
            {daysOfWeek.map((day) => (
              <div key={day} className="bg-surface py-3 text-center text-sm font-semibold text-text-muted">
                {day}
              </div>
            ))}

            {/* Days */}
            {calendarDays.map((dayData, i) => {
              const events = getEventsForDate(dayData.date);
              const isToday = dayData.day === 2 && dayData.currentMonth;

              return (
                <div
                  key={i}
                  className={`bg-surface min-h-[100px] p-2 ${
                    !dayData.currentMonth ? 'opacity-40' : ''
                  } ${isToday ? 'bg-primary-bg/10' : ''}`}
                >
                  <span className={`text-sm ${
                    isToday ? 'text-primary font-bold' : dayData.currentMonth ? 'text-text' : 'text-text-muted'
                  }`}>
                    {dayData.day.toString().padStart(2, '0')}
                  </span>
                  <div className="mt-1 space-y-1">
                    {events.slice(0, 2).map((event) => (
                      <div
                        key={event.id}
                        className={`px-2 py-1 rounded text-xs font-medium truncate ${eventColors[event.color] || 'bg-primary text-white'}`}
                      >
                        {event.title}
                      </div>
                    ))}
                    {events.length > 2 && (
                      <button className="text-xs text-text-muted hover:text-text">
                        More
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </PageLayout>
  );
}
