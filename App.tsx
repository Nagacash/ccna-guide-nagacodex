
import React, { useState, useEffect, useMemo } from 'react';

import { studyPlan } from './data/studyPlan';
import DayCard from './components/DayCard';
import ProgressBar from './components/ProgressBar';

import QuickReference from './components/QuickReference';




const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.25 6.5 1.75 1.75 0 0 1 6.5 8.25zM19 19h-3v-4.75c0-1.4-.5-2.5-1.8-2.5-1.3 0-1.9.9-2.2 1.75L12 14.25V19H9v-9h3v1.5a3.1 3.1 0 0 1 3-1.5c2.2 0 4 1.4 4 4.5z"></path>
  </svg>
);


const App: React.FC = () => {
  
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('ccnaStudyProgress');
      return saved ? JSON.parse(saved) : {};
    } catch (error) {
      console.error("Could not load progress from localStorage", error);
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('ccnaStudyProgress', JSON.stringify(completedTasks));
    } catch (error) {
      console.error("Could not save progress to localStorage", error);
    }
  }, [completedTasks]);

  

  const { totalTasks, progress } = useMemo(() => {
    const allTasks = studyPlan.flatMap(day => day.tasks);
    const total = allTasks.length;
    if (total === 0) return { totalTasks: 0, progress: 0 };
    
    const completedCount = allTasks.filter(task => completedTasks[task.id]).length;
    const progressPercentage = (completedCount / total) * 100;
    
    return { totalTasks: total, progress: progressPercentage };
  }, [completedTasks]);

  const handleToggleTask = (taskId: string) => {
    setCompletedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  };

  return (
    <div 
      className="min-h-screen bg-dark-background text-dark-foreground font-sans p-4 sm:p-8"
    >
      <div className="max-w-4xl mx-auto">
        <header 
          className="text-center mb-12" 
          style={{height: '110px'}}>
            <div className="flex justify-center items-center gap-4 mb-2">
                <img src="/images/ccna-guide.png" alt="CCNA Guide Logo" className="w-11 h-11" />
                <h1 className="text-4xl sm:text-5xl font-bold text-dark-foreground tracking-tight">CCNA 7-Day Intensive Prep</h1>
            </div>
            <p className="text-lg text-dark-muted-foreground">Your personalized study hub for the CCNA 200-301 Exam</p>
        </header>

        <main className="space-y-12">
          
          <div>
            <QuickReference />
          </div>
          <div className="main-section">
            <h2 className="text-3xl font-bold text-dark-foreground mb-6 text-center">Your 7-Day Plan</h2>
            <ProgressBar progress={progress} />
            <div className="space-y-4">
              {studyPlan.map((day, index) => (
                <DayCard
                  key={day.day}
                  dayData={day}
                  completedTasks={completedTasks}
                  onToggleTask={handleToggleTask}
                  isInitiallyOpen={index === 0 && progress < 100}
                />
              ))}
            </div>
          </div>
        </main>

        <footer 
          className="text-center mt-16 text-dark-muted-foreground text-sm space-y-4">
          <p>Based on the CCNA 200-301 v1.1 exam topics. Good luck with your studies!</p>
          <div className="flex justify-center items-center gap-3">
            <img src="/images/logo.png" alt="Naga Apparel Logo" className="h-6" />
             <p>Powered by Naga Apparel</p>
             <span className="text-dark-muted-foreground/50">|</span>
             <a 
                href="https://www.linkedin.com/in/maurice-holda/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-dark-muted-foreground hover:text-dark-foreground transition-colors"
              >
                <LinkedInIcon />
                <span>Connect with Maurice Holda</span>
              </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
