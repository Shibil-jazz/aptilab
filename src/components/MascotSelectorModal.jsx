import React from 'react';
import { X, CheckCircle2, Sparkles } from 'lucide-react';
import { LayeredMascotSprite } from './LayeredMascotSprite';
import { STUDY_BUDDIES } from '../data/buddies';
import { soundFX } from '../utils/audio';

export function MascotSelectorModal({ selectedBuddyId, onSelectBuddy, onClose }) {
  return (
    <div className="cozy-modal-overlay">
      <div className="cozy-modal-content" style={{ maxWidth: '720px' }}>
        {/* Modal Header */}
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
              <Sparkles size={22} color="#D4A340" /> Choose Your Study Buddy
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-sub)', fontWeight: '600' }}>
              Select an animated 2D companion to study alongside you on your aptitude journey!
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

        {/* 8 Buddies Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px',
          marginBottom: '24px'
        }}>
          {STUDY_BUDDIES.map((buddy) => {
            const isSelected = selectedBuddyId === buddy.id;

            return (
              <div
                key={buddy.id}
                onClick={() => {
                  soundFX.playSuccess();
                  onSelectBuddy(buddy.id);
                }}
                style={{
                  background: isSelected ? '#F0F9EB' : 'var(--bg-card)',
                  border: isSelected ? '3px solid #55753F' : '2px solid #E2D4C3',
                  borderRadius: '20px',
                  padding: '14px 16px',
                  cursor: 'pointer',
                  boxShadow: isSelected ? '0 6px 0 #55753F' : '0 3px 0 #E2D4C3',
                  transition: 'all 0.15s ease',
                  transform: isSelected ? 'translateY(-2px)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  position: 'relative'
                }}
              >
                {/* Buddy 2D Animated Sprite Avatar Box */}
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '18px',
                  background: buddy.bgColor,
                  border: `2px solid ${buddy.borderColor}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 4px 8px rgba(0,0,0,0.06)',
                  overflow: 'hidden'
                }}>
                  <LayeredMascotSprite 
                    buddyId={buddy.id}
                    mode="study"
                    size={56}
                  />
                </div>

                {/* Buddy Info */}
                <div style={{ flexGrow: 1 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--color-brand-dark)', marginBottom: '2px' }}>
                      {buddy.name} the {buddy.species}
                    </h4>
                    {isSelected && <CheckCircle2 size={18} color="#55753F" />}
                  </div>

                  <p style={{ fontSize: '0.8rem', color: buddy.borderColor, fontWeight: '700', marginBottom: '4px' }}>
                    {buddy.tagline}
                  </p>
                  
                  <span className="cozy-badge" style={{ fontSize: '0.725rem', padding: '2px 8px' }}>
                    Fav: {buddy.favoriteSubject}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div style={{ textAlign: 'center' }}>
          <button 
            className="cozy-btn cozy-btn-primary"
            style={{ width: '100%', padding: '12px' }}
            onClick={() => {
              soundFX.playPop();
              onClose();
            }}
          >
            Confirm & Save Buddy
          </button>
        </div>
      </div>
    </div>
  );
}
