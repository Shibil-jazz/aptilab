import React from 'react';
import { soundFX } from '../utils/audio';

export function QuestionNavigator({ 
  questions, 
  currentIdx, 
  userAnswers, 
  flaggedQuestions, 
  onJumpToQuestion 
}) {
  return (
    <div className="cozy-card" style={{ padding: '20px' }}>
      <h4 style={{ fontSize: '1rem', marginBottom: '14px', textAlign: 'center' }}>
        Question Navigator
      </h4>

      {/* Grid of Question Buttons */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '8px',
        marginBottom: '16px'
      }}>
        {questions.map((q, idx) => {
          const isCurrent = currentIdx === idx;
          const isAnswered = userAnswers[q.id] !== undefined;
          const isFlagged = flaggedQuestions[q.id];

          let bg = '#F4EBE0';
          let borderColor = '#7C5C43';
          let textColor = '#4A3525';

          if (isAnswered) {
            bg = 'var(--color-accent-green)';
            borderColor = '#55753F';
            textColor = '#2F4221';
          }

          if (isFlagged) {
            bg = '#FFF3D6';
            borderColor = '#E5A93C';
            textColor = '#946614';
          }

          if (isCurrent) {
            borderColor = '#3A2E28';
          }

          return (
            <button
              key={q.id}
              onClick={() => {
                soundFX.playPop();
                onJumpToQuestion(idx);
              }}
              style={{
                height: '38px',
                borderRadius: '8px',
                border: isCurrent ? '3px solid #3A2E28' : `2px solid ${borderColor}`,
                background: bg,
                color: textColor,
                fontFamily: 'var(--font-game)',
                fontWeight: isCurrent ? '700' : '600',
                fontSize: '0.9rem',
                cursor: 'pointer',
                boxShadow: isCurrent ? '0 3px 0 #3A2E28' : 'none',
                transform: isCurrent ? 'scale(1.05)' : 'none',
                transition: 'all 0.15s ease'
              }}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>

      {/* Status Legend */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        fontSize: '0.8rem',
        fontWeight: '600',
        color: 'var(--color-text-sub)',
        paddingTop: '10px',
        borderTop: '1px solid #EADBCE'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: 'var(--color-accent-green)', border: '1px solid #55753F' }} />
          <span>Answered ({Object.keys(userAnswers).length})</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#F4EBE0', border: '1px solid #7C5C43' }} />
          <span>Unanswered ({questions.length - Object.keys(userAnswers).length})</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#FFF3D6', border: '1px solid #E5A93C' }} />
          <span>Flagged ({Object.keys(flaggedQuestions).filter(k => flaggedQuestions[k]).length})</span>
        </div>
      </div>
    </div>
  );
}
