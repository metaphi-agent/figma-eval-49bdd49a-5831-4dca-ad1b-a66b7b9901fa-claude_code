import { Card, Button, Avatar, Icons } from '../components/ui';
import { PageHeader } from '../components/blocks';
import { scheduleEvents } from '../data/mockData';

const timeSlots = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];

export function Schedule() {
  return (
    <div>
      <PageHeader title="Schedule">
        <div className="flex items-center gap-3">
          <Button variant="outline" icon={Icons.filter}>Filter</Button>
          <Button icon={Icons.plus}>Add Event</Button>
        </div>
      </PageHeader>

      <div className="flex gap-6">
        {/* Timeline */}
        <Card className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-text">December 2, 2021</h3>
            <div className="flex gap-1">
              <button className="p-2 text-text-muted hover:text-text">{Icons.arrowLeft}</button>
              <button className="p-2 text-text-muted hover:text-text">{Icons.arrowRight}</button>
            </div>
          </div>

          <div className="relative">
            {timeSlots.map((time, i) => (
              <div key={i} className="flex items-start py-6 border-b border-border last:border-0">
                <span className="w-16 text-sm text-text-muted shrink-0">{time}</span>
                <div className="flex-1 pl-4 border-l border-border">
                  {i === 0 && (
                    <div className="bg-primary-bg border-l-4 border-primary rounded-r-[var(--radius-md)] p-4">
                      <h4 className="font-semibold text-text mb-1">Design Review</h4>
                      <p className="text-xs text-text-muted mb-3">9:00 AM - 10:00 AM</p>
                      <div className="flex -space-x-2">
                        <Avatar name="A B" size="xs" />
                        <Avatar name="C D" size="xs" />
                        <Avatar name="E F" size="xs" />
                      </div>
                    </div>
                  )}
                  {i === 1 && (
                    <div className="bg-green-light border-l-4 border-green rounded-r-[var(--radius-md)] p-4">
                      <h4 className="font-semibold text-text mb-1">Client Meeting</h4>
                      <p className="text-xs text-text-muted mb-3">10:30 AM - 11:30 AM</p>
                      <div className="flex -space-x-2">
                        <Avatar name="G H" size="xs" />
                        <Avatar name="I J" size="xs" />
                      </div>
                    </div>
                  )}
                  {i === 5 && (
                    <div className="bg-orange-light border-l-4 border-orange rounded-r-[var(--radius-md)] p-4">
                      <h4 className="font-semibold text-text mb-1">Team Sync</h4>
                      <p className="text-xs text-text-muted mb-3">2:00 PM - 3:00 PM</p>
                      <div className="flex -space-x-2">
                        <Avatar name="K L" size="xs" />
                        <Avatar name="M N" size="xs" />
                        <Avatar name="O P" size="xs" />
                        <Avatar name="Q R" size="xs" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Upcoming Events */}
        <div className="w-[300px]">
          <Card>
            <h3 className="text-lg font-semibold text-text mb-4">Upcoming Events</h3>
            <div className="space-y-4">
              {scheduleEvents.map((event) => {
                const colorClass = event.color === 'primary' ? 'bg-primary' : event.color === 'green' ? 'bg-green' : 'bg-orange';
                return (
                  <div key={event.id} className="flex gap-3">
                    <div className={['w-1 rounded-full', colorClass].join(' ')} />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-text">{event.title}</h4>
                      <p className="text-xs text-text-muted">{event.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
