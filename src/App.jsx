import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomeView } from './views/HomeView';
import { TestView } from './views/TestView';
import { ResultsView } from './views/ResultsView';
import { UploadView } from './views/UploadView';
import { TestSetupModal } from './components/TestSetupModal';
import { MascotSelectorModal } from './components/MascotSelectorModal';
import { APTITUDE_QUESTIONS } from './data/questions';
import { getBuddyById } from './data/buddies';
import { loadStats, saveStats, loadSelectedBuddy, saveSelectedBuddy } from './utils/storage';

export function App() {
  const [activeView, setActiveView] = useState('home'); // 'home' | 'test' | 'results' | 'upload'
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Persistent User Statistics (Starts at 0 for fresh user!)
  const [stats, setStats] = useState(loadStats);

  // Persistent Selected Study Buddy (Default to Bear)
  const [selectedBuddyId, setSelectedBuddyId] = useState(loadSelectedBuddy);

  // Modals state
  const [showTestSetupModal, setShowTestSetupModal] = useState(false);
  const [showBuddySelectorModal, setShowBuddySelectorModal] = useState(false);
  const [setupCategory, setSetupCategory] = useState('all');

  // Active Session State
  const [activeQuestionPool, setActiveQuestionPool] = useState([]);
  const [activeDurationMinutes, setActiveDurationMinutes] = useState(15);
  const [activeTestCategoryTitle, setActiveTestCategoryTitle] = useState('Full Aptitude Mock Test');
  const [lastTestResults, setLastTestResults] = useState(null);

  // Persist stats updates to localStorage
  useEffect(() => {
    saveStats(stats);
  }, [stats]);

  // Persist buddy updates to localStorage
  const handleSelectBuddy = (buddyId) => {
    setSelectedBuddyId(buddyId);
    saveSelectedBuddy(buddyId);
  };

  const handleOpenTestSetup = (category = 'all') => {
    setSetupCategory(category);
    setShowTestSetupModal(true);
  };

  // Launch Test Session with Randomized Question Pool
  const handleLaunchTestSession = ({ questionsCount, durationMinutes, difficulty, category }) => {
    let pool = [...APTITUDE_QUESTIONS];

    // Filter by Category if specific category selected
    if (category !== 'all') {
      pool = pool.filter(q => q.category === category);
    }

    // Filter by Difficulty if specific difficulty selected
    if (difficulty !== 'mixed') {
      const filteredByDiff = pool.filter(q => q.difficulty === difficulty);
      // Fallback if not enough questions in difficulty pool
      if (filteredByDiff.length >= 5) {
        pool = filteredByDiff;
      }
    }

    // Shuffle questions pool using Fisher-Yates algorithm
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    // If pool is smaller than requested count, repeat pool elements seamlessly
    let finalQuestions = [];
    while (finalQuestions.length < questionsCount) {
      finalQuestions = finalQuestions.concat(pool);
    }
    finalQuestions = finalQuestions.slice(0, questionsCount);

    // Assign unique session IDs to questions
    const sessionQuestions = finalQuestions.map((q, idx) => ({
      ...q,
      id: `session_q_${idx}_${q.id}`
    }));

    setActiveQuestionPool(sessionQuestions);
    setActiveDurationMinutes(durationMinutes);
    setActiveTestCategoryTitle(category === 'all' ? 'Full Aptitude Mock Test' : category);
    
    setShowTestSetupModal(false);
    setActiveView('test');
  };

  // Complete Test & Update Stats
  const handleCompleteTest = (results) => {
    setLastTestResults(results);

    // Calculate score
    const correctCount = results.questions.reduce((acc, q) => {
      return results.userAnswers[q.id] === q.correctAnswer ? acc + 1 : acc;
    }, 0);

    const testPct = Math.round((correctCount / results.questions.length) * 100);

    setStats((prev) => {
      const newCompleted = prev.testsCompleted + 1;
      const newSolved = prev.questionsSolved + results.questions.length;
      // Weighted average calculation
      const newAvg = prev.testsCompleted === 0 
        ? testPct 
        : Math.round(((prev.avgAccuracy * prev.testsCompleted) + testPct) / newCompleted);

      const updated = {
        testsCompleted: newCompleted,
        questionsSolved: newSolved,
        avgAccuracy: newAvg
      };
      saveStats(updated);
      return updated;
    });

    setActiveView('results');
  };

  const activeBuddy = getBuddyById(selectedBuddyId);

  return (
    <div className="app-container">
      {/* Navigation Header */}
      <Header 
        activeView={activeView}
        setActiveView={setActiveView}
        stats={stats}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        selectedBuddyId={selectedBuddyId}
        onOpenBuddySelector={() => setShowBuddySelectorModal(true)}
      />

      {/* Main View Router */}
      <main>
        {activeView === 'home' && (
          <HomeView 
            onOpenTestSetup={handleOpenTestSetup}
            onOpenUpload={() => setActiveView('upload')}
            onOpenBuddySelector={() => setShowBuddySelectorModal(true)}
            stats={stats}
            selectedBuddyId={selectedBuddyId}
          />
        )}

        {activeView === 'test' && (
          <TestView 
            questions={activeQuestionPool}
            durationMinutes={activeDurationMinutes}
            categoryTitle={activeTestCategoryTitle}
            selectedBuddyId={selectedBuddyId}
            onCompleteTest={handleCompleteTest}
            onCancelTest={() => setActiveView('home')}
          />
        )}

        {activeView === 'results' && lastTestResults && (
          <ResultsView 
            results={lastTestResults}
            selectedBuddyId={selectedBuddyId}
            onRetakeTest={() => handleOpenTestSetup(setupCategory)}
            onGoHome={() => setActiveView('home')}
          />
        )}

        {activeView === 'upload' && (
          <UploadView 
            onOpenTestSetup={handleOpenTestSetup}
            selectedBuddyId={selectedBuddyId}
            onGoHome={() => setActiveView('home')}
          />
        )}
      </main>

      {/* Modals */}
      {showTestSetupModal && (
        <TestSetupModal 
          initialCategory={setupCategory}
          onLaunchTest={handleLaunchTestSession}
          onClose={() => setShowTestSetupModal(false)}
        />
      )}

      {showBuddySelectorModal && (
        <MascotSelectorModal 
          selectedBuddyId={selectedBuddyId}
          onSelectBuddy={handleSelectBuddy}
          onClose={() => setShowBuddySelectorModal(false)}
        />
      )}

      {/* Cozy Footer */}
      <footer style={{
        marginTop: '60px',
        paddingTop: '20px',
        borderTop: '2px dashed #E5D5C5',
        textAlign: 'center',
        fontSize: '0.875rem',
        color: 'var(--color-text-sub)',
        fontWeight: '600'
      }}>
        <p>
          {activeBuddy.emoji} <b>AptiLab</b> — Studying with {activeBuddy.name} the {activeBuddy.species} • Built with React & Vite
        </p>
      </footer>
    </div>
  );
}

export default App;
