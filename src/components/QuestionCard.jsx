import React from 'react';
import { Bookmark, CheckCircle2 } from 'lucide-react';
import { soundFX } from '../utils/audio';

export function QuestionCard({ 
  question, 
  questionNumber, 
  totalQuestions, 
  selectedOption, 
  onSelectOption, 
  isFlagged, 
  onToggleFlag 
}) {
  const optionLetters = ['A', 'B', 'C', 'D'];

  return (
    <div className="cozy-card animate-slide-up" style={{ padding: '30px' }}>
      {/* Top Meta Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px',
        paddingBottom: '12px',
        borderBottom: '2px dashed #EADBD0'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="cozy-badge" style={{ background: 'var(--color-accent-green)', borderColor: '#55753F', color: '#2F4221' }}>
            Question {questionNumber} of {totalQuestions}
          </span>
          <span className="cozy-badge">
            {question.category} • {question.topic}
          </span>
        </div>

        <button
          onClick={() => {
            soundFX.playPop();
            onToggleFlag();
          }}
          style={{
            background: isFlagged ? '#FFF3D6' : 'none',
            border: isFlagged ? '1.5px solid #E5A93C' : 'none',
            borderRadius: '8px',
            padding: '4px 10px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: isFlagged ? '#D4A340' : 'var(--color-text-sub)',
            fontFamily: 'var(--font-game)',
            fontSize: '0.85rem',
            fontWeight: '600'
          }}
        >
          <Bookmark size={16} fill={isFlagged ? '#D4A340' : 'none'} color={isFlagged ? '#D4A340' : '#8C7A6D'} />
          {isFlagged ? 'Flagged' : 'Flag Question'}
        </button>
      </div>

      {/* Readable Question Stem */}
      <div style={{
        fontSize: '1.15rem',
        fontWeight: '700',
        color: 'var(--color-brand-dark)',
        marginBottom: '24px',
        lineHeight: '1.6',
        fontFamily: 'var(--font-body)',
        whiteSpace: 'pre-line'
      }}>
        {question.questionText}
      </div>

      {/* 4 Option Selectors */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {question.options.map((option, idx) => {
          const isSelected = selectedOption === idx;
          return (
            <div
              key={idx}
              onClick={() => {
                soundFX.playSelect();
                onSelectOption(idx);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '14px 18px',
                borderRadius: '16px',
                border: isSelected ? '3px solid #55753F' : '2px solid #E2D4C3',
                background: isSelected ? '#F0F9EB' : 'var(--bg-card)',
                boxShadow: isSelected ? '0 4px 0 #55753F' : '0 2px 4px rgba(0,0,0,0.03)',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                transform: isSelected ? 'translateY(-2px)' : 'none'
              }}
            >
              {/* Option Letter Tag */}
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                border: isSelected ? '2px solid #55753F' : '2px solid #8C7A6D',
                background: isSelected ? 'var(--color-accent-green)' : '#F5EBE0',
                color: isSelected ? '#2F4221' : 'var(--color-brand-dark)',
                fontFamily: 'var(--font-game)',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.95rem',
                flexShrink: 0
              }}>
                {optionLetters[idx]}
              </div>

              {/* Option Text */}
              <div style={{
                flexGrow: 1,
                fontSize: '1rem',
                fontWeight: isSelected ? '700' : '600',
                color: isSelected ? '#2F4221' : 'var(--color-text-main)',
                fontFamily: 'var(--font-body)'
              }}>
                {option}
              </div>

              {/* Selection Check Indicator */}
              {isSelected && (
                <CheckCircle2 size={20} color="#55753F" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
