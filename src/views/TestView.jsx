import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckSquare } from 'lucide-react';
import { QuestionCard } from '../components/QuestionCard';
import { QuestionNavigator } from '../components/QuestionNavigator';
import { TimerBadge } from '../components/TimerBadge';
import { MascotContainer } from '../components/MascotContainer';
import { getBuddyById } from '../data/buddies';
import { soundFX } from '../utils/audio';

export function TestView({ 
  questions, 
  durationMinutes = 15,
  categoryTitle,
  selectedBuddyId,
  onCompleteTest, 
  onCancelTest 
}) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [flaggedQuestions, setFlaggedQuestions] = useState({});
  const [secondsLeft, setSecondsLeft] = useState(durationMinutes * 60);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const buddy = getBuddyById(selectedBuddyId);
  const currentQuestion = questions[currentIdx];

  const handleSelectOption = (optionIndex) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionIndex
    }));
  };

  const handleToggleFlag = () => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id]
    }));
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      soundFX.playPop();
      setCurrentIdx((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      soundFX.playPop();
      setCurrentIdx((prev) => prev - 1);
    }
  };

  const handleSubmitTest = () => {
    soundFX.playSuccess();
    onCompleteTest({
      questions,
      userAnswers,
      timeTakenSeconds: (durationMinutes * 60) - secondsLeft
    });
  };

  const answeredCount = Object.keys(userAnswers).length;

  return (
    <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Test Bar Header */}
      <div className="cozy-card" style={{
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button 
            className="cozy-btn cozy-btn-sm"
            onClick={() => {
              soundFX.playPop();
              if (window.confirm("Exit test session? Progress will be lost.")) {
                onCancelTest();
              }
            }}
          >
            <ArrowLeft size={16} /> Exit Test
          </button>
          <h3 style={{ fontSize: '1.2rem', color: 'var(--color-brand-dark)' }}>
            {categoryTitle} ({questions.length} Questions)
          </h3>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <TimerBadge 
            secondsLeft={secondsLeft}
            setSecondsLeft={setSecondsLeft}
            onTimeUp={handleSubmitTest}
            isActive={true}
          />

          <button 
            className="cozy-btn cozy-btn-primary"
            onClick={() => {
              soundFX.playPop();
              setShowConfirmModal(true);
            }}
          >
            <CheckSquare size={18} /> Submit Test
          </button>
        </div>
      </div>

      {/* Main Grid: Left Question Card + Right Mascot & Grid Navigator */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 300px',
        gap: '24px',
        alignItems: 'start'
      }}>
        {/* Left Column: Active Question Card & Nav Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <QuestionCard 
            question={currentQuestion}
            questionNumber={currentIdx + 1}
            totalQuestions={questions.length}
            selectedOption={userAnswers[currentQuestion.id]}
            onSelectOption={handleSelectOption}
            isFlagged={!!flaggedQuestions[currentQuestion.id]}
            onToggleFlag={handleToggleFlag}
          />

          {/* Bottom Nav Buttons */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'var(--bg-card)',
            padding: '16px 24px',
            borderRadius: '16px',
            border: '2px solid #E3D5C5'
          }}>
            <button 
              className="cozy-btn"
              disabled={currentIdx === 0}
              onClick={handlePrev}
              style={{ opacity: currentIdx === 0 ? 0.5 : 1 }}
            >
              <ArrowLeft size={16} /> Previous
            </button>

            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-text-sub)' }}>
              {answeredCount} of {questions.length} Answered
            </span>

            {currentIdx < questions.length - 1 ? (
              <button 
                className="cozy-btn cozy-btn-primary"
                onClick={handleNext}
              >
                Next <ArrowRight size={16} />
              </button>
            ) : (
              <button 
                className="cozy-btn cozy-btn-rose"
                onClick={() => {
                  soundFX.playPop();
                  setShowConfirmModal(true);
                }}
              >
                Finish & Submit
              </button>
            )}
          </div>
        </div>

        {/* Right Column: Thinking Mascot & Question Navigator */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Active Mascot in Thinking Mode */}
          <div className="cozy-card" style={{ padding: '20px', textAlign: 'center' }}>
            <MascotContainer 
              buddyId={selectedBuddyId}
              mode="thinking"
              dialogue={
                userAnswers[currentQuestion.id] !== undefined
                  ? `${buddy.name} says: Great choice! Take a moment to review before moving forward.`
                  : `${buddy.name} says: Read carefully! Flag tricky questions to return to later.`
              }
              height={140}
              showSpeech={true}
              interactive={false}
            />
          </div>

          {/* Grid Navigator */}
          <QuestionNavigator 
            questions={questions}
            currentIdx={currentIdx}
            userAnswers={userAnswers}
            flaggedQuestions={flaggedQuestions}
            onJumpToQuestion={(idx) => setCurrentIdx(idx)}
          />
        </div>
      </div>

      {/* Confirmation Submit Modal */}
      {showConfirmModal && (
        <div className="cozy-modal-overlay">
          <div className="cozy-modal-content" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '12px' }}>
              {buddy.emoji}📝
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', color: 'var(--color-brand-dark)' }}>
              Ready to Submit Your Test?
            </h3>

            <p style={{ color: 'var(--color-text-sub)', marginBottom: '20px', fontWeight: '600' }}>
              You have answered <b>{answeredCount}</b> out of <b>{questions.length}</b> questions.
              {questions.length - answeredCount > 0 && (
                <span style={{ display: 'block', color: 'var(--color-warning)', marginTop: '8px', fontWeight: '700' }}>
                  ⚠️ You still have {questions.length - answeredCount} unanswered questions!
                </span>
              )}
            </p>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button 
                className="cozy-btn"
                onClick={() => setShowConfirmModal(false)}
              >
                Keep Practicing
              </button>
              <button 
                className="cozy-btn cozy-btn-primary"
                onClick={handleSubmitTest}
              >
                Yes, Submit Now!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
