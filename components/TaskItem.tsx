import React from 'react';
import { StudyTask } from '../types';

interface TaskItemProps {
  task: StudyTask;
  isCompleted: boolean;
  onToggle: (taskId: string) => void;
  onViewPdf?: (pdfPath: string) => void;
  onViewSimulator?: () => void;
  onViewResources?: (videoId: string) => void;
  onViewExternalLink?: (link: string) => void;
}

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
);


const TaskItem: React.FC<TaskItemProps> = ({ task, isCompleted, onToggle, onViewPdf, onViewSimulator, onViewResources }) => {
  console.log("TaskItem: task.id", task.id, "task.resources", task.resources, "task.videoId", task.videoId);
  return (
    <div className="flex items-start space-x-4 py-5 px-2">
      <div className="flex items-center h-6">
        <input
            id={task.id}
            type="checkbox"
            checked={isCompleted}
            onChange={() => onToggle(task.id)}
            className="peer h-4 w-4 shrink-0 rounded-sm border border-dark-primary ring-offset-dark-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-dark-primary data-[state=checked]:text-dark-primary-foreground sr-only"
        />
        <label
            htmlFor={task.id}
            className={`flex h-5 w-5 items-center justify-center rounded-md border-2 transition-colors cursor-pointer ${isCompleted ? 'bg-cyan-500 border-cyan-500' : 'bg-transparent border-dark-muted-foreground/50'}`}
        >
          {isCompleted && <CheckIcon className="h-4 w-4 text-dark-background" />}
        </label>
      </div>

      <div className="flex-grow">
         <label htmlFor={task.id} className="cursor-pointer">
            <span className={`font-semibold text-base ${isCompleted ? 'line-through text-dark-muted-foreground' : 'text-dark-foreground'}`}>
              {task.title}
            </span>
          </label>
          <div 
            className={`text-sm mt-2 prose prose-invert prose-p:my-1 prose-ul:my-1 max-w-none prose-p:text-dark-muted-foreground prose-li:text-dark-muted-foreground prose-strong:text-dark-foreground/90 ${isCompleted ? 'opacity-50' : ''}`}
            dangerouslySetInnerHTML={{ __html: task.details }}
          />
          {task.pdfPath && (
            <button
              onClick={() => onViewPdf && onViewPdf(task.pdfPath!)}
              className="mt-3 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-dark-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-dark-secondary text-dark-secondary-foreground hover:bg-dark-secondary/80 h-9 px-3"
            >
              View PDF
            </button>
          )}
          {task.simulator && (
            <button
              onClick={() => onViewSimulator && onViewSimulator()}
              className="mt-3 ml-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-dark-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-9 px-3"
            >
              Open Simulator
            </button>
          )}
          {task.resources && (
            <button
              onClick={() => onViewResources && task.videoId && onViewResources(task.videoId)}
              className="mt-3 ml-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-dark-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-purple-600 text-white hover:bg-purple-700 h-9 px-3"
            >
              View Resources
            </button>
          )}
          {task.externalLink && (
            <button
              onClick={() => window.open(task.externalLink, '_blank')}
              className="mt-3 ml-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-dark-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-yellow-600 text-white hover:bg-yellow-700 h-9 px-3"
            >
              Go to Practice Exam
            </button>
          )}
      </div>
    </div>
  );
};

export default TaskItem;