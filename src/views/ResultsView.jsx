import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { RotateCcw, Home, Eye, CheckCircle2, XCircle, HelpCircle, BookOpen } from 'lucide-react';
import { MascotContainer } from '../components/MascotContainer';
import { getBuddyById } from '../data/buddies';
import { soundFX } from '../utils/audio';

export function ResultsView({ results, selectedBuddyId, onRetakeTest, onGoHome }) {
  const [showReview, setShowReview] = useState(false);

  const buddy = getBuddyById(selectedBuddyId);
  const { questions, userAnswers, timeTakenSeconds } = results;

  let correctCount = 0;
  let wrongCount = 0;
  let skippedCount = 0;

  const categoryBreakdown = {};

  questions.forEach((q) => {
    if (!categoryBreakdown[q.category]) {
      categoryBreakdown[q.category] = { total: 0, correct: 0 };
    }
    categoryBreakdown[q.category].total += 1;

    const userAns = userAnswers[q.id];
    if (userAns === undefined) {
      skippedCount += 1;
    } else if (userAns === q.correctAnswer) {
      correctCount += 1;
      categoryBreakdown[q.category].correct += 1;
    } else {
      wrongCount += 1;
    }
  });

  const percentage = Math.round((correctCount / questions.length) * 100);

  // Score Tiers & Supportive Reactions
  let performanceTier = 'low'; // 'high' | 'med' | 'low'
  let mascotDialogue = buddy.scoreReactions.low;
  let headerTitle = "That's okay. Let's practice the tricky ones together!";

  if (percentage >= 75) {
    performanceTier = 'high';
    mascotDialogue = buddy.scoreReactions.high;
    headerTitle = "Amazing! You crushed that test!";
  } else if (percentage >= 50) {
    performanceTier = 'med';
    mascotDialogue = buddy.scoreReactions.med;
    headerTitle = "Nice work! We're getting better.";
  } else {
    performanceTier = 'low';
    mascotDialogue = buddy.scoreReactions.low;
    headerTitle = "That's okay. Let's practice the tricky ones together!";
  }

  useEffect(() => {
    if (performanceTier === 'high') {
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    }
  }, [performanceTier]);

  return (
    <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Top Hero Score Card */}
      <div className="cozy-card" style={{
        padding: '36px',
        background: performanceTier === 'high'
          ? 'linear-gradient(135deg, #FFFDF7 0%, #E2F0D8 100%)'
          : performanceTier === 'med'
          ? 'linear-gradient(135deg, #FFFDF7 0%, #FBF0D9 100%)'
          : 'linear-gradient(135deg, #FFFDF7 0%, #F9ECF2 100%)',
        border: '3px solid var(--color-brand-dark)'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '32px',
          alignItems: 'center'
        }}>
          {/* Bear/Buddy Mascot Reaction */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <MascotContainer 
              buddyId={selectedBuddyId}
              mode={performanceTier === 'high' ? 'happy' : 'encouraging'}
              dialogue={mascotDialogue}
              height={220}
              showSpeech={true}
              interactive={true}
            />
          </div>

          {/* Performance Summary Stats */}
          <div>
            <div className="cozy-badge" style={{ marginBottom: '12px', background: 'var(--bg-card)' }}>
              🎓 Test Result Breakdown
            </div>

            <h1 className="font-pixel-accent" style={{
              fontSize: '3.4rem',
              color: 'var(--color-brand-dark)',
              lineHeight: 1,
              marginBottom: '10px'
            }}>
              {percentage}%
            </h1>

            <p style={{
              fontSize: '1.15rem',
              fontWeight: '700',
              color: performanceTier === 'high' ? '#55753F' : performanceTier === 'med' ? '#D4A340' : '#9C4D6B',
              marginBottom: '24px'
            }}>
              {headerTitle}
            </p>

            {/* Quick Metrics Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px',
              marginBottom: '24px'
            }}>
              <div style={{
                background: '#F0F9EB',
                border: '2px solid #55753F',
                borderRadius: '14px',
                padding: '12px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '1.4rem', fontWeight: '700', color: '#2F4221' }}>
                  {correctCount}
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: '600', color: '#55753F' }}>
                  Correct
                </div>
              </div>

              <div style={{
                background: '#FDE8E8',
                border: '2px solid #D9534F',
                borderRadius: '14px',
                padding: '12px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '1.4rem', fontWeight: '700', color: '#A94442' }}>
                  {wrongCount}
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: '600', color: '#D9534F' }}>
                  Wrong
                </div>
              </div>

              <div style={{
                background: '#FFF7E6',
                border: '2px solid #E5A93C',
                borderRadius: '14px',
                padding: '12px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '1.4rem', fontWeight: '700', color: '#946614' }}>
                  {skippedCount}
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: '600', color: '#E5A93C' }}>
                  Skipped
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button 
                className="cozy-btn cozy-btn-primary"
                onClick={() => {
                  soundFX.playPop();
                  setShowReview(!showReview);
                }}
              >
                <Eye size={18} /> {showReview ? 'Hide Answer Review' : 'Review All Answers'}
              </button>

              <button 
                className="cozy-btn"
                onClick={() => {
                  soundFX.playPop();
                  onRetakeTest();
                }}
              >
                <RotateCcw size={16} /> Retake Test
              </button>

              <button 
                className="cozy-btn"
                onClick={() => {
                  soundFX.playPop();
                  onGoHome();
                }}
              >
                <Home size={16} /> Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Accuracy Breakdown Cards */}
      <div className="cozy-card" style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '1.3rem', marginBottom: '16px', color: 'var(--color-brand-dark)' }}>
          Category Accuracy Breakdown
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px'
        }}>
          {Object.keys(categoryBreakdown).map((catName) => {
            const data = categoryBreakdown[catName];
            const catPct = Math.round((data.correct / data.total) * 100) || 0;

            return (
              <div 
                key={catName}
                style={{
                  background: 'var(--bg-card-alt)',
                  border: '2px solid #E3D5C5',
                  borderRadius: '14px',
                  padding: '16px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--color-brand-dark)' }}>
                    {catName}
                  </span>
                  <span className="font-pixel-accent" style={{ fontWeight: '700', color: '#55753F' }}>
                    {catPct}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div style={{
                  height: '10px',
                  borderRadius: '5px',
                  background: '#E0D2C2',
                  overflow: 'hidden',
                  border: '1px solid #7C5C43'
                }}>
                  <div style={{
                    height: '100%',
                    width: `${catPct}%`,
                    background: 'var(--color-accent-green-dark)',
                    transition: 'width 0.8s ease'
                  }} />
                </div>

                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-sub)', marginTop: '6px', fontWeight: '600' }}>
                  {data.correct} of {data.total} correct
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Answer Review Section */}
      {showReview && (
        <div className="cozy-card animate-slide-up" style={{ padding: '28px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
            paddingBottom: '12px',
            borderBottom: '2px dashed #E3D5C5'
          }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-brand-dark)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <BookOpen size={22} /> Detailed Question & Answer Explanations
            </h3>
            <span className="cozy-badge">
              {questions.length} Questions
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {questions.map((q, idx) => {
              const userAns = userAnswers[q.id];
              const isCorrect = userAns === q.correctAnswer;
              const isSkipped = userAns === undefined;

              return (
                <div 
                  key={q.id}
                  style={{
                    background: isCorrect ? '#F5FBF2' : isSkipped ? '#FFFDF0' : '#FDF4F4',
                    border: isCorrect ? '2px solid #55753F' : isSkipped ? '2px solid #E5A93C' : '2px solid #D9534F',
                    borderRadius: '16px',
                    padding: '20px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {isCorrect ? (
                        <CheckCircle2 size={20} color="#55753F" />
                      ) : isSkipped ? (
                        <HelpCircle size={20} color="#D4A340" />
                      ) : (
                        <XCircle size={20} color="#D9534F" />
                      )}
                      <span style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--color-brand-dark)' }}>
                        Q{idx + 1}. {q.topic} ({q.category})
                      </span>
                    </div>

                    <span className="cozy-badge" style={{
                      background: isCorrect ? '#E2F0D8' : isSkipped ? '#FFF7E6' : '#FDE8E8',
                      borderColor: isCorrect ? '#55753F' : isSkipped ? '#E5A93C' : '#D9534F'
                    }}>
                      {isCorrect ? 'Correct (+1)' : isSkipped ? 'Skipped (0)' : 'Incorrect (0)'}
                    </span>
                  </div>

                  {/* Question Stem */}
                  <div style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '14px', color: 'var(--color-text-main)' }}>
                    {q.questionText}
                  </div>

                  {/* Options Comparison */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px', marginBottom: '14px' }}>
                    {q.options.map((opt, optIdx) => {
                      const isUserChoice = userAns === optIdx;
                      const isRightChoice = q.correctAnswer === optIdx;

                      let optBg = '#FFF';
                      let optBorder = '#E0D2C2';
                      let optColor = '#4A3525';

                      if (isRightChoice) {
                        optBg = '#E2F0D8';
                        optBorder = '#55753F';
                        optColor = '#2F4221';
                      } else if (isUserChoice && !isCorrect) {
                        optBg = '#FDE8E8';
                        optBorder = '#D9534F';
                        optColor = '#A94442';
                      }

                      return (
                        <div 
                          key={optIdx}
                          style={{
                            padding: '10px 14px',
                            borderRadius: '10px',
                            background: optBg,
                            border: `2px solid ${optBorder}`,
                            color: optColor,
                            fontSize: '0.9rem',
                            fontWeight: isRightChoice || isUserChoice ? '700' : '500'
                          }}
                        >
                          <span style={{ fontWeight: '700', marginRight: '6px' }}>
                            {['A', 'B', 'C', 'D'][optIdx]}.
                          </span>
                          {opt}
                          {isUserChoice && <span style={{ fontSize: '0.8rem', marginLeft: '6px' }}>(Your Choice)</span>}
                          {isRightChoice && <span style={{ fontSize: '0.8rem', marginLeft: '6px' }}>✓ (Correct)</span>}
                        </div>
                      );
                    })}
                  </div>

                  {/* Detailed Explanation */}
                  <div style={{
                    background: '#FFFDF8',
                    border: '1.5px solid #E5D5C5',
                    borderRadius: '12px',
                    padding: '14px 16px',
                    fontSize: '0.9rem',
                    color: 'var(--color-brand-dark)',
                    lineHeight: '1.5'
                  }}>
                    <strong style={{ color: '#55753F' }}>💡 Explanation: </strong>
                    {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
