import React, { useState, useMemo, useEffect } from 'react';
import { qnaData } from '../data/qnaData';

const shuffleArray = <T,>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
};

const QnaTrainer = () => {
    const [questions, setQuestions] = useState(() => shuffleArray(qnaData));
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [showFeedback, setShowFeedback] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];
    const isQuizFinished = currentQuestionIndex >= questions.length;

    const handleAnswerSelect = (selectedIndex: number) => {
        if (showFeedback) return;

        setSelectedAnswer(selectedIndex);
        setShowFeedback(true);

        if (selectedIndex === currentQuestion.correctAnswerIndex) {
            setScore(prev => prev + 1);
        }
    };

    const handleNextQuestion = () => {
        setShowFeedback(false);
        setSelectedAnswer(null);
        setCurrentQuestionIndex(prev => prev + 1);
    };

    const handleRestart = () => {
        setQuestions(shuffleArray(qnaData));
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setScore(0);
        setShowFeedback(false);
    };

    const getButtonClass = (index: number) => {
        if (!showFeedback) {
            return 'bg-dark-secondary hover:bg-dark-secondary/80 border-dark-border';
        }

        const isCorrect = index === currentQuestion.correctAnswerIndex;
        const isSelected = index === selectedAnswer;

        if (isCorrect) {
            return 'bg-green-500/10 border-green-500/50 text-green-300';
        }
        if (isSelected && !isCorrect) {
            return 'bg-red-500/10 border-red-500/50 text-red-300';
        }

        return 'bg-dark-secondary border-dark-border opacity-60';
    };

    if (isQuizFinished) {
        const percentage = Math.round((score / questions.length) * 100);
        return (
            <div className="text-center bg-dark-secondary/50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-dark-foreground mb-4">Quiz Complete!</h2>
                <p className="text-lg text-dark-muted-foreground mb-2">You scored</p>
                <p className="text-5xl font-bold text-cyan-400 mb-6">{score} / {questions.length} ({percentage}%)</p>
                <button 
                    onClick={handleRestart}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-dark-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-ring focus-visible:ring-offset-2 bg-cyan-600 text-white hover:bg-cyan-600/90 h-10 px-4 py-2"
                >
                    Restart Quiz
                </button>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-dark-foreground">Question {currentQuestionIndex + 1} of {questions.length}</h3>
                <span className="text-sm font-medium text-dark-muted-foreground">Score: {score}</span>
            </div>

            <div className="bg-dark-secondary/50 p-6 rounded-lg border border-dark-border">
                <p className="text-base font-semibold text-dark-foreground leading-relaxed">{currentQuestion.question}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentQuestion.options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={showFeedback}
                        className={`p-4 rounded-lg border text-left transition-all duration-200 ${getButtonClass(index)} disabled:cursor-not-allowed`}
                    >
                        <span className="font-mono text-sm mr-3 py-1 px-2 bg-dark-background/50 rounded-md">{String.fromCharCode(65 + index)}</span>
                        <span>{option}</span>
                    </button>
                ))}
            </div>

            {showFeedback && (
                <div className="space-y-4 pt-4">
                    <div className="p-4 rounded-lg bg-dark-background/70 border border-dark-border">
                        <h4 className="font-bold text-base text-yellow-300 mb-2">Explanation:</h4>
                        <p className="text-sm text-dark-muted-foreground leading-relaxed">{currentQuestion.explanation}</p>
                    </div>
                    <button
                        onClick={handleNextQuestion}
                        className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-dark-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-ring focus-visible:ring-offset-2 bg-cyan-600 text-white hover:bg-cyan-600/90 h-10 px-4 py-2"
                    >
                        Next Question
                    </button>
                </div>
            )}
        </div>
    );
};

export default QnaTrainer;
