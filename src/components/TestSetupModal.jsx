import React, { useState } from 'react';
import { X, Play, Clock, HelpCircle, Flame, CheckCircle2, Sparkles } from 'lucide-react';
import { soundFX } from '../utils/audio';

export function TestSetupModal({ initialCategory = 'all', onLaunchTest, onClose }) {
  const [selectedLength, setSelectedLength] = useState('quick'); // 'quick' (15Q/12m) | 'standard' (30Q/23m) | 'full' (50Q/38m)
  const [selectedDifficulty, setSelectedDifficulty] = useState('mixed'); // 'mixed' | 'easy' | 'medium' | 'hard'

  const LENGTH_OPTIONS = [
    {
      id: 'quick',
      title: 'Quick Practice',
      questionsCount: 15,
      minutes: 12,
      badge: 'Light Workout',
      color: '#E2F0D8',
      borderColor: '#55753F',
      description: 'Ideal for a fast daily study session.'
    },
    {
      id: 'standard',
      title: 'Standard Mock',
      questionsCount: 30,
      minutes: 23,
      badge: 'Balanced Test',
      color: '#FBF0D9',
      borderColor: '#D4A340',
      description: 'Thorough evaluation across key topics.'
    },
    {
      id: 'full',
      title: 'Full Challenge',
      questionsCount: 50,
      minutes: 38,
      badge: 'Exam Simulation',
      color: '#F9ECF2',
      borderColor: '#9C4D6B',
      description: 'Full exam conditions to build endurance.'
    }
  ];

  const DIFFICULTY_OPTIONS = [
    { id: 'mixed', label: 'Mixed Difficulty', icon: '✨' },
    { id: 'easy', label: 'Easy (Foundations)', icon: '🌱' },
    { id: 'medium', label: 'Medium (Intermediate)', icon: '⚡' },
    { id: 'hard', label: 'Hard (Advanced)', icon: '🔥' }
  ];

  const handleStart = () => {
    const config = LENGTH_OPTIONS.find(l => l.id === selectedLength);
    soundFX.playSuccess();
    onLaunchTest({
      questionsCount: config.questionsCount,
      durationMinutes: config.minutes,
      difficulty: selectedDifficulty,
      category: initialCategory
    });
  };

  return (
    <div className="cozy-modal-overlay">
      <div className="cozy-modal-content" style={{ maxWidth: '640px' }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px',
          paddingBottom: '12px',
          borderBottom: '2px dashed #E5D5C5'
        }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-brand-dark)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={22} color="#55753F" /> Configure Your Practice Test
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-sub)', fontWeight: '600' }}>
              Choose your test length, timing, and question difficulty level.
            </p>
          </div>

          <button
            onClick={() => {
              soundFX.playPop();
              onClose();
            }}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-brand-dark)',
              padding: '4px'
            }}
          >
            <X size={24} />
          </button>
        </div>

        {/* 1. Test Length Selection Cards */}
        <div style={{ marginBottom: '24px' }}>
          <label style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--color-brand-dark)', display: 'block', marginBottom: '10px' }}>
            1. Select Test Length & Duration
          </label>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: '14px'
          }}>
            {LENGTH_OPTIONS.map((opt) => {
              const isSelected = selectedLength === opt.id;
              return (
                <div
                  key={opt.id}
                  onClick={() => {
                    soundFX.playSelect();
                    setSelectedLength(opt.id);
                  }}
                  style={{
                    background: isSelected ? opt.color : 'var(--bg-card)',
                    border: isSelected ? `3px solid ${opt.borderColor}` : '2px solid #E2D4C3',
                    borderRadius: '20px',
                    padding: '16px',
                    cursor: 'pointer',
                    boxShadow: isSelected ? `0 6px 0 ${opt.borderColor}` : '0 3px 0 #E2D4C3',
                    transition: 'all 0.15s ease',
                    transform: isSelected ? 'translateY(-2px)' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span className="cozy-badge" style={{ background: '#FFFDF8', fontSize: '0.7rem' }}>
                        {opt.badge}
                      </span>
                      {isSelected && <CheckCircle2 size={18} color={opt.borderColor} />}
                    </div>

                    <h4 style={{ fontSize: '1.15rem', color: 'var(--color-brand-dark)', marginBottom: '6px' }}>
                      {opt.title}
                    </h4>

                    <div style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--color-brand-dark)', marginBottom: '4px' }}>
                      {opt.questionsCount} Questions
                    </div>

                    <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-text-sub)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={14} /> {opt.minutes} Minutes
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Difficulty Selector */}
        <div style={{ marginBottom: '28px' }}>
          <label style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--color-brand-dark)', display: 'block', marginBottom: '10px' }}>
            2. Choose Difficulty Level
          </label>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '10px'
          }}>
            {DIFFICULTY_OPTIONS.map((diff) => {
              const isSelected = selectedDifficulty === diff.id;
              return (
                <button
                  key={diff.id}
                  type="button"
                  onClick={() => {
                    soundFX.playPop();
                    setSelectedDifficulty(diff.id);
                  }}
                  style={{
                    padding: '10px 14px',
                    borderRadius: '12px',
                    border: isSelected ? '3px solid #7C5C43' : '2px solid #E2D4C3',
                    background: isSelected ? '#F4EBE0' : 'var(--bg-card)',
                    color: 'var(--color-brand-dark)',
                    fontFamily: 'var(--font-game)',
                    fontWeight: isSelected ? '700' : '600',
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    boxShadow: isSelected ? '0 3px 0 #7C5C43' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <span>{diff.icon}</span>
                  <span>{diff.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Modal Launch Action */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <button 
            className="cozy-btn"
            style={{ width: '35%' }}
            onClick={onClose}
          >
            Cancel
          </button>

          <button 
            className="cozy-btn cozy-btn-primary"
            style={{ width: '65%', fontSize: '1.1rem' }}
            onClick={handleStart}
          >
            <Play size={20} fill="#2F4221" /> Begin Test Session
          </button>
        </div>
      </div>
    </div>
  );
}
