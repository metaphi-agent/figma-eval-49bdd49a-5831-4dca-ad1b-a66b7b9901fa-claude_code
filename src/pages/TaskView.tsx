import { useState } from 'react';
import { Card, Button, Badge, Avatar, Checkbox, Icons, Input } from '../components/ui';
import { PageHeader } from '../components/blocks';
import { tasks, boardTasks } from '../data/mockData';

const priorityColors: Record<string, string> = {
  Low: 'bg-orange-light text-orange',
  Medium: 'bg-yellow-light text-yellow',
  High: 'bg-red-light text-red',
  Mediun: 'bg-yellow-light text-yellow',
};

const progressColors: Record<string, string> = {
  'On Track': 'bg-green-light text-green',
  'At risk': 'bg-red-light text-red',
};

const statusColors: Record<string, 'warning' | 'info' | 'success'> = {
  Pending: 'warning',
  Running: 'info',
  Done: 'success',
};

type ViewType = 'List' | 'Board' | 'Timeline';

export function TaskView() {
  const [activeView, setActiveView] = useState<ViewType>('List');

  return (
    <div>
      <PageHeader title="Task Preview">
        <Button icon={Icons.plus}>Add Task</Button>
      </PageHeader>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          {(['List', 'Board', 'Timeline'] as ViewType[]).map((view) => (
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
        <div className="relative">
          <Input placeholder="Search" className="w-[200px] py-2" />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted">
            {Icons.search}
          </span>
        </div>
      </div>

      {activeView === 'List' && (
        <div className="space-y-6">
          {/* To Do Section */}
          <Card padding="none">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-semibold text-text">To Do</h3>
              <button className="text-sm text-primary">See More</button>
            </div>
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs text-text-muted border-b border-border">
                  <th className="px-4 py-3 font-medium">Check Box</th>
                  <th className="px-4 py-3 font-medium">Task Name</th>
                  <th className="px-4 py-3 font-medium">Start Date</th>
                  <th className="px-4 py-3 font-medium">End Date</th>
                  <th className="px-4 py-3 font-medium">Member</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.todo.map((task) => (
                  <tr key={task.id} className="border-b border-border last:border-0">
                    <td className="px-4 py-3"><Checkbox /></td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="text-primary">{Icons.figma}</span>
                        <span className="text-sm text-primary">{task.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-text">{task.startDate}</td>
                    <td className="px-4 py-3 text-sm text-red">{task.endDate}</td>
                    <td className="px-4 py-3 text-sm text-text">{task.members} Member</td>
                    <td className="px-4 py-3"><Badge variant={statusColors[task.status]}>{task.status}</Badge></td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button className="p-1 text-primary hover:bg-primary-bg rounded">{Icons.edit}</button>
                        <button className="p-1 text-red hover:bg-red-light rounded">{Icons.trash}</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>

          {/* Doing Section */}
          <Card padding="none">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-semibold text-text">Doing</h3>
              <button className="text-sm text-primary">See More</button>
            </div>
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs text-text-muted border-b border-border">
                  <th className="px-4 py-3 font-medium">Check Box</th>
                  <th className="px-4 py-3 font-medium">Task Name</th>
                  <th className="px-4 py-3 font-medium">Start Date</th>
                  <th className="px-4 py-3 font-medium">End Date</th>
                  <th className="px-4 py-3 font-medium">Member</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.doing.map((task) => (
                  <tr key={task.id} className="border-b border-border last:border-0">
                    <td className="px-4 py-3"><Checkbox defaultChecked /></td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="text-primary">{Icons.figma}</span>
                        <span className="text-sm text-primary">{task.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-text">{task.startDate}</td>
                    <td className="px-4 py-3 text-sm text-red">{task.endDate}</td>
                    <td className="px-4 py-3 text-sm text-text">{task.members} Member</td>
                    <td className="px-4 py-3"><Badge variant={statusColors[task.status]}>{task.status}</Badge></td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button className="p-1 text-primary hover:bg-primary-bg rounded">{Icons.edit}</button>
                        <button className="p-1 text-red hover:bg-red-light rounded">{Icons.trash}</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>

          {/* Done Section */}
          <Card padding="none">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-semibold text-text">Done</h3>
              <button className="text-sm text-primary">See More</button>
            </div>
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs text-text-muted border-b border-border">
                  <th className="px-4 py-3 font-medium">Check Box</th>
                  <th className="px-4 py-3 font-medium">Task Name</th>
                  <th className="px-4 py-3 font-medium">Start Date</th>
                  <th className="px-4 py-3 font-medium">End Date</th>
                  <th className="px-4 py-3 font-medium">Member</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.done.map((task) => (
                  <tr key={task.id} className="border-b border-border last:border-0">
                    <td className="px-4 py-3"><Checkbox defaultChecked /></td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="text-primary">{Icons.figma}</span>
                        <span className="text-sm text-primary">{task.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-text">{task.startDate}</td>
                    <td className="px-4 py-3 text-sm text-green">{task.endDate}</td>
                    <td className="px-4 py-3 text-sm text-text">{task.members} Member</td>
                    <td className="px-4 py-3"><Badge variant={statusColors[task.status]}>{task.status}</Badge></td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button className="p-1 text-primary hover:bg-primary-bg rounded">{Icons.edit}</button>
                        <button className="p-1 text-red hover:bg-red-light rounded">{Icons.trash}</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      )}

      {activeView === 'Board' && (
        <div className="grid grid-cols-4 gap-4">
          {Object.entries({ ToDo: boardTasks.todo, 'In Progress': boardTasks.inProgress, 'In Review': boardTasks.inReview, Done: boardTasks.done }).map(([title, tasks]) => (
            <div key={title} className="space-y-4">
              <h3 className="font-semibold text-text">{title}</h3>
              {tasks.map((task) => (
                <Card key={task.id} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Checkbox />
                    <span className="font-medium text-sm text-text">{task.title}</span>
                    <button className="text-text-muted">{Icons.more}</button>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {task.priority && (
                      <span className={['px-2 py-0.5 text-[10px] font-semibold rounded', priorityColors[task.priority] || ''].join(' ')}>
                        {task.priority}
                      </span>
                    )}
                    {task.progress && (
                      <span className={['px-2 py-0.5 text-[10px] font-semibold rounded', progressColors[task.progress] || ''].join(' ')}>
                        {task.progress}
                      </span>
                    )}
                  </div>
                  {task.description && <p className="text-xs text-text-muted">{task.description}</p>}
                  {task.images && task.images.length > 0 && (
                    <div className="flex gap-2">
                      {task.images.map((img, i) => (
                        <div key={i} className="w-20 h-16 bg-background-alt rounded-[var(--radius-sm)]" />
                      ))}
                    </div>
                  )}
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <div className="flex -space-x-2">
                      {task.assignees.slice(0, 3).map((_, i) => (
                        <Avatar key={i} name={String(i)} size="xs" />
                      ))}
                      {task.assignees.length > 3 && (
                        <div className="w-6 h-6 bg-green rounded-full flex items-center justify-center text-white text-[10px]">
                          +{task.assignees.length - 3}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-text-muted">
                      <span className="flex items-center gap-1">{Icons.messages} {task.comments}</span>
                      <span className="flex items-center gap-1">{Icons.star} {task.likes}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
