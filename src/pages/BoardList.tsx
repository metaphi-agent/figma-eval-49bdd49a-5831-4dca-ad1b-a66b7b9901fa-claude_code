import { PageLayout } from '../components/blocks';
import { Card, Avatar, Badge, Button } from '../components/ui';
import { boardTasks } from '../data/mockData';

interface Task {
  id: number;
  title: string;
  priority: string;
  status?: string;
  description: string;
  assignees: string[];
  comments: number;
  likes: number;
  done?: boolean;
  image?: string;
}

const MenuDots = () => (
  <button className="p-1 hover:bg-background-alt rounded transition-colors opacity-50 hover:opacity-100">
    <svg width="14" height="4" viewBox="0 0 14 4" fill="currentColor" className="text-text">
      <circle cx="2" cy="2" r="2"/>
      <circle cx="7" cy="2" r="2"/>
      <circle cx="12" cy="2" r="2"/>
    </svg>
  </button>
);

const CommentIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-muted">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-muted">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const priorityColors: Record<string, string> = {
  Low: 'bg-orange text-white',
  Mediun: 'bg-orange text-white',
  Medium: 'bg-yellow text-text',
  High: 'bg-blue text-white',
};

const statusColors: Record<string, string> = {
  'On Track': 'bg-surface text-text border border-border-medium',
  'At risk': 'bg-red text-white',
};

function TaskCard({ task }: { task: Task }) {
  return (
    <Card className="mb-3 cursor-pointer hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${task.done ? 'bg-green' : 'border-2 border-border-medium'}`}>
            {task.done && <CheckIcon />}
          </div>
          <h4 className="font-semibold text-text">{task.title}</h4>
        </div>
        <MenuDots />
      </div>

      <div className="flex items-center gap-2 mb-3">
        {task.priority && (
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${priorityColors[task.priority] || 'bg-yellow text-text'}`}>
            {task.priority}
          </span>
        )}
        {task.status && (
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[task.status] || 'bg-surface text-text border border-border-medium'}`}>
            {task.status}
          </span>
        )}
      </div>

      <p className="text-sm text-text-muted mb-3">{task.description}</p>

      {task.image && (
        <img src={task.image} alt="" className="w-full h-24 object-cover rounded-lg mb-3" loading="lazy" />
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center -space-x-2">
          {task.assignees.slice(0, 3).map((avatar, i) => (
            <Avatar key={i} src={avatar} alt="" size="sm" className="border-2 border-surface" />
          ))}
          {task.assignees.length > 3 && (
            <div className="w-8 h-8 rounded-full bg-green text-white text-xs font-semibold flex items-center justify-center border-2 border-surface">
              +
            </div>
          )}
        </div>
        <div className="flex items-center gap-4 text-xs text-text-muted">
          <span className="flex items-center gap-1">
            <CommentIcon /> {task.comments}
          </span>
          <span className="flex items-center gap-1">
            <HeartIcon /> {task.likes >= 1000 ? `${(task.likes / 1000).toFixed(1)}k` : task.likes}
          </span>
        </div>
      </div>
    </Card>
  );
}

function TaskColumn({ title, tasks, count }: { title: string; tasks: Task[]; count?: number }) {
  return (
    <div className="flex-1 min-w-[300px]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-text">{title}</h3>
        {count !== undefined && (
          <span className="text-sm text-text-muted">{count}</span>
        )}
      </div>
      <div className="space-y-0">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default function BoardList() {
  const actions = (
    <div className="flex items-center gap-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-48 h-10 px-4 pr-10 bg-surface rounded-[10px] text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
        <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
        </svg>
      </div>
      <Button variant="primary" leftIcon={
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
        </svg>
      }>
        Filter
      </Button>
    </div>
  );

  return (
    <PageLayout
      title="Task Preview"
      actions={actions}
    >
      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button className="px-6 py-2 text-sm font-semibold text-text-muted bg-surface rounded-full hover:bg-background-alt transition-colors">
          List
        </button>
        <button className="px-6 py-2 text-sm font-semibold text-white bg-primary rounded-full">
          Board
        </button>
        <button className="px-6 py-2 text-sm font-semibold text-text-muted bg-surface rounded-full hover:bg-background-alt transition-colors">
          Timeline
        </button>
      </div>

      {/* Board Columns */}
      <div className="flex gap-6 overflow-x-auto pb-4">
        <TaskColumn title="ToDo" tasks={boardTasks.todo} />
        <TaskColumn title="In Progress" tasks={boardTasks.inProgress} />
        <TaskColumn title="In Review" tasks={boardTasks.inReview} />
        <TaskColumn title="Done" tasks={boardTasks.done} />
      </div>
    </PageLayout>
  );
}
