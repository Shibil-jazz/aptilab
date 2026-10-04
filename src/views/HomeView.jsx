import React from 'react';
import { Play, Upload, Sparkles, BookOpen, Calculator, Brain, ArrowRight, Users, Compass } from 'lucide-react';
import { MascotContainer } from '../components/MascotContainer';
import { CATEGORIES } from '../data/questions';
import { getBuddyById } from '../data/buddies';
import { soundFX } from '../utils/audio';

export function HomeView({ 
  onOpenTestSetup, 
  onOpenUpload, 
  onOpenBuddySelector,
  stats,
  selectedBuddyId
}) {
  const buddy = getBuddyById(selectedBuddyId);

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Calculator': return <Calculator size={22} color="#55753F" />;
      case 'Brain': return <Brain size={22} color="#9C4D6B" />;
      case 'BookOpen': return <BookOpen size={22} color="#D4A340" />;
      default: return <Sparkles size={22} color="#7C5C43" />;
    }
  };

  const isZeroState = stats.testsCompleted === 0;

  return (
    <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* 0-State Friendly Journey Banner */}
      {isZeroState && (
        <div style={{
          background: '#F0F9EB',
          border: '2.5px solid #55753F',
          borderRadius: '20px',
          padding: '18px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          boxShadow: '0 4px 12px rgba(85, 117, 63, 0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ fontSize: '1.8rem' }}>🌱</div>
            <div>
              <h4 style={{ fontSize: '1.15rem', color: '#2F4221', marginBottom: '2px' }}>
                Your study journey starts here!
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#55753F', fontWeight: '600' }}>
                Complete your first practice test with <b>{buddy.name}</b> to unlock your aptitude progress stats!
              </p>
            </div>
          </div>

          <button 
            className="cozy-btn cozy-btn-primary"
            onClick={() => {
              soundFX.playPop();
              onOpenTestSetup('all');
            }}
          >
            Start First Test <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* Cozy Mascot Study Room Hero Card */}
      <div className="cozy-card" style={{
        background: `linear-gradient(135deg, #FFFDF7 0%, ${buddy.bgColor || '#F5EBE0'} 100%)`,
        padding: '36px',
        border: '3px solid var(--color-brand-dark)',
        overflow: 'hidden'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '24px',
          alignItems: 'center'
        }}>
          {/* Welcome Text & Actions */}
          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
              <span className="cozy-badge" style={{ background: 'var(--color-accent-green)' }}>
                ✨ Study Companion: {buddy.name}
              </span>
              <button 
                onClick={onOpenBuddySelector}
                style={{
                  background: '#FFFDF8',
                  border: '1.5px solid #7C5C43',
                  borderRadius: '8px',
                  padding: '2px 8px',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  color: 'var(--color-brand-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <Users size={12} /> Switch Buddy
              </button>
            </div>

            <h1 style={{
              fontSize: '2.4rem',
              fontWeight: '700',
              lineHeight: '1.2',
              color: 'var(--color-brand-dark)',
              marginBottom: '12px'
            }}>
              Warm & Cozy Aptitude Practice
            </h1>

            <p style={{
              fontSize: '1.05rem',
              color: 'var(--color-text-sub)',
              marginBottom: '24px',
              fontWeight: '600'
            }}>
              Study alongside <b>{buddy.name} the {buddy.species}</b> in a peaceful study room. Click {buddy.name} to chat or start a practice test!
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button 
                className="cozy-btn cozy-btn-primary"
                style={{ fontSize: '1.1rem', padding: '14px 28px' }}
                onClick={() => {
                  soundFX.playPop();
                  onOpenTestSetup('all');
                }}
              >
                <Play size={20} fill="#2F4221" /> Start Practice Test
              </button>

              <button 
                className="cozy-btn cozy-btn-rose"
                style={{ fontSize: '1rem', padding: '14px 24px' }}
                onClick={() => {
                  soundFX.playPop();
                  onOpenUpload();
                }}
              >
                <Upload size={18} /> Upload Question Paper
              </button>
            </div>
          </div>

          {/* Interactive Study Buddy Mascot Container */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <MascotContainer 
              buddyId={selectedBuddyId}
              mode="study"
              height={230}
              showSpeech={true}
              interactive={true}
            />
          </div>
        </div>
      </div>

      {/* Real Persistent Statistics Summary Bar */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px'
      }}>
        <div className="cozy-card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '14px',
            background: 'var(--color-accent-green)',
            border: '2px solid #55753F',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.4rem'
          }}>
            📝
          </div>
          <div>
            <div className="font-pixel-accent" style={{ fontSize: '1.6rem', fontWeight: '700', color: 'var(--color-brand-dark)' }}>
              {stats.testsCompleted}
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-sub)', fontWeight: '600' }}>
              Tests Completed
            </div>
          </div>
        </div>

        <div className="cozy-card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '14px',
            background: 'var(--color-accent-yellow)',
            border: '2px solid #D4A340',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.4rem'
          }}>
            🎯
          </div>
          <div>
            <div className="font-pixel-accent" style={{ fontSize: '1.6rem', fontWeight: '700', color: 'var(--color-brand-dark)' }}>
              {stats.questionsSolved}
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-sub)', fontWeight: '600' }}>
              Questions Answered
            </div>
          </div>
        </div>

        <div className="cozy-card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '14px',
            background: 'var(--color-accent-rose)',
            border: '2px solid #C47B95',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.4rem'
          }}>
            ⭐
          </div>
          <div>
            <div className="font-pixel-accent" style={{ fontSize: '1.6rem', fontWeight: '700', color: 'var(--color-brand-dark)' }}>
              {stats.avgAccuracy}%
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-sub)', fontWeight: '600' }}>
              Average Accuracy
            </div>
          </div>
        </div>
      </div>

      {/* Practice Categories Section */}
      <div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px'
        }}>
          <div>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--color-brand-dark)' }}>
              Practice by Aptitude Category
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-sub)', fontWeight: '600' }}>
              Choose a specific domain to launch a customized test session.
            </p>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {CATEGORIES.filter(c => c.id !== 'all').map((category) => (
            <div 
              key={category.id}
              className="cozy-card cozy-card-hover"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '16px'
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '12px'
                }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: category.color,
                    border: '2px solid var(--color-brand-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {getCategoryIcon(category.icon)}
                  </div>
                  <span className="cozy-badge">
                    {category.count} Questions Pool
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '6px', color: 'var(--color-brand-dark)' }}>
                  {category.name}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-sub)', fontWeight: '600' }}>
                  {category.description}
                </p>
              </div>

              <button 
                className="cozy-btn cozy-btn-sm"
                style={{ width: '100%', marginTop: '8px' }}
                onClick={() => {
                  soundFX.playPop();
                  onOpenTestSetup(category.id);
                }}
              >
                Configure Practice Test <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
