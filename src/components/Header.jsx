import React from 'react';
import { Home, Upload, Volume2, VolumeX, Trophy, Award, Users } from 'lucide-react';
import { getBuddyById } from '../data/buddies';
import { soundFX } from '../utils/audio';

export function Header({ 
  activeView, 
  setActiveView, 
  stats, 
  soundEnabled, 
  setSoundEnabled,
  selectedBuddyId,
  onOpenBuddySelector
}) {
  const buddy = getBuddyById(selectedBuddyId);

  const toggleSound = () => {
    soundFX.enabled = !soundEnabled;
    setSoundEnabled(!soundEnabled);
    if (!soundEnabled) soundFX.playPop();
  };

  return (
    <header style={{
      padding: '20px 0',
      marginBottom: '24px',
      borderBottom: '2px dashed #E5D5C5',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        {/* Brand Logo */}
        <div 
          onClick={() => {
            soundFX.playPop();
            setActiveView('home');
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer'
          }}
        >
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: buddy.bgColor || 'var(--color-accent-green)',
            border: `2.5px solid ${buddy.borderColor || 'var(--color-brand-dark)'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 4px 0 ${buddy.borderColor || '#55753F'}`,
            fontSize: '1.4rem'
          }}>
            {buddy.emoji}
          </div>
          <div>
            <div style={{
              fontSize: '1.6rem',
              fontWeight: '700',
              fontFamily: 'var(--font-game)',
              color: 'var(--color-brand-dark)',
              lineHeight: 1.1,
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              AptiLab <span className="font-pixel-accent" style={{ fontSize: '0.75rem', background: '#F4E0E8', border: '1px solid #C47B95', padding: '2px 6px', borderRadius: '6px', color: '#5C2B3F' }}>STUDY GAME</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-sub)', fontWeight: '600' }}>
              Study with {buddy.name} the {buddy.species}
            </p>
          </div>
        </div>

        {/* Quick Stats Badges & Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          {/* Buddy Selector Button */}
          <button 
            className="cozy-btn cozy-btn-sm"
            style={{ background: buddy.bgColor, borderColor: buddy.borderColor }}
            onClick={() => {
              soundFX.playPop();
              onOpenBuddySelector();
            }}
          >
            <Users size={16} color={buddy.borderColor} /> 
            <span>{buddy.emoji} Buddy: <b>{buddy.name}</b></span>
          </button>

          {/* User Stats Badges */}
          <div className="cozy-badge" style={{ background: '#FFF7E6', borderColor: '#E5A93C' }}>
            <Trophy size={15} color="#D4A340" />
            <span>{stats.testsCompleted} Tests</span>
          </div>

          <div className="cozy-badge" style={{ background: '#EAF7EE', borderColor: '#70AB69' }}>
            <Award size={15} color="#55753F" />
            <span>Accuracy: {stats.avgAccuracy}%</span>
          </div>

          {/* Navigation Items */}
          {activeView !== 'home' && (
            <button 
              className="cozy-btn cozy-btn-sm"
              onClick={() => {
                soundFX.playPop();
                setActiveView('home');
              }}
            >
              <Home size={16} /> Home
            </button>
          )}

          <button 
            className="cozy-btn cozy-btn-sm cozy-btn-rose"
            onClick={() => {
              soundFX.playPop();
              setActiveView('upload');
            }}
          >
            <Upload size={16} /> Upload Paper
          </button>

          {/* Mute/Sound Toggle */}
          <button
            onClick={toggleSound}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '6px',
              color: 'var(--color-brand-dark)',
              display: 'flex',
              alignItems: 'center'
            }}
            title={soundEnabled ? "Mute SFX" : "Enable SFX"}
          >
            {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} color="#A39386" />}
          </button>
        </div>
      </div>
    </header>
  );
}
