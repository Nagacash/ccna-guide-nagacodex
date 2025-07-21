import React, { useState, useEffect, useRef } from 'react';
import { StudyDay } from '../types';
import TaskItem from './TaskItem';
import PdfModal from './PdfModal';
import NetworkSimulator from './NetworkSimulator';
import Resources from './Resources';
import { gsap } from 'gsap';

interface DayCardProps {
  dayData: StudyDay;
  completedTasks: Record<string, boolean>;
  onToggleTask: (taskId: string) => void;
  isInitiallyOpen: boolean;
}

const ChevronDownIcon: React.FC<{ className?: string, ref?: React.Ref<SVGSVGElement> }> = React.forwardRef(({ className }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
));

const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.06-1.06L10.5 14.19l-1.81-1.81a.75.75 0 0 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.06 0l4.25-4.25Z" clipRule="evenodd" />
  </svg>
);


const DayCard: React.FC<DayCardProps> = ({ dayData, completedTasks, onToggleTask, isInitiallyOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPdfPath, setSelectedPdfPath] = useState('');
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  useEffect(() => {
    console.log("DayCard: isResourcesOpen on mount:", isResourcesOpen);
  }, []);

  const openPdfModal = (pdfPath: string) => {
    setSelectedPdfPath(pdfPath);
    setIsModalOpen(true);
  };

  const closePdfModal = () => {
    setIsModalOpen(false);
    setSelectedPdfPath('');
  };

  const openSimulatorModal = () => {
    setIsSimulatorOpen(true);
  };

  const closeSimulatorModal = () => {
    setIsSimulatorOpen(false);
  };

  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  const openResourcesModal = (videoId: string) => {
    console.log("DayCard: openResourcesModal called with videoId:", videoId);
    setSelectedVideoId(videoId);
    setIsResourcesOpen(true);
  };

  const closeResourcesModal = () => {
    setIsResourcesOpen(false);
    setSelectedVideoId(null);
  };
  const dayTasks = dayData.tasks.map(t => t.id);
  const completedCount = dayTasks.filter(id => completedTasks[id]).length;
  const isDayComplete = completedCount === dayTasks.length;

  const [isExpanded, setIsExpanded] = useState(isInitiallyOpen && !isDayComplete);
  const contentRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<SVGSVGElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isDayComplete && isExpanded) {
        setIsExpanded(false);
    }
  }, [isDayComplete, isExpanded]);
  
  useEffect(() => {
    const duration = isFirstRender.current ? 0 : 0.4;
    
    gsap.to(chevronRef.current, { rotation: isExpanded ? 180 : 0, duration: duration, ease: 'power1.inOut' });
    if (isExpanded) {
        gsap.to(contentRef.current, { height: 'auto', opacity: 1, duration: duration, ease: 'power2.out' });
    } else {
        gsap.to(contentRef.current, { height: 0, opacity: 0, duration: duration, ease: 'power2.in' });
    }
    
    isFirstRender.current = false;
  }, [isExpanded]);


  return (
    <div className="bg-dark-card border border-dark-border rounded-lg overflow-hidden">
      <div
        className="p-4 sm:p-5 cursor-pointer flex justify-between items-center"
        onClick={() => setIsExpanded(!isExpanded)}
        role="button"
        aria-expanded={isExpanded}
        aria-controls={`day-content-${dayData.day}`}
      >
        <div className="flex items-center space-x-4">
           <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${isDayComplete ? 'bg-green-500/20 text-green-400' : 'bg-dark-secondary text-dark-foreground'}`}>
            {isDayComplete ? <CheckCircleIcon className="w-6 h-6"/> : dayData.day}
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-dark-foreground">{dayData.title}</h3>
            <p className="text-sm text-dark-muted-foreground">{dayData.date} &bull; {dayData.examWeight}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
           {isDayComplete && (
            <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400">
              Complete
            </span>
          )}
          <ChevronDownIcon ref={chevronRef} className={`w-5 h-5 text-dark-muted-foreground`} />
        </div>
      </div>
      
      <div 
        ref={contentRef}
        className="h-0 opacity-0 overflow-hidden"
      >
        <div id={`day-content-${dayData.day}`} className="border-t border-dark-border px-2 sm:px-6 pt-2 pb-4">
          <div className="divide-y divide-dark-border">
            {dayData.tasks.map((task) => (
              <TaskItem
                  key={task.id}
                  task={task}
                  isCompleted={!!completedTasks[task.id]}
                  onToggle={onToggleTask}
                  onViewPdf={openPdfModal}
                  onViewSimulator={openSimulatorModal}
                  onViewResources={openResourcesModal}
                />
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && <PdfModal pdfUrl={selectedPdfPath} onClose={closePdfModal} />}
      {isSimulatorOpen && <NetworkSimulator onClose={closeSimulatorModal} />}
      {isResourcesOpen && <Resources videoId={selectedVideoId} onClose={closeResourcesModal} />}
    </div>
  );
};

export default DayCard;