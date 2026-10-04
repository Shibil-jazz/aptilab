import React, { useState } from 'react';
import { LayeredMascotSprite } from './LayeredMascotSprite';
import { getBuddyById } from '../data/buddies';
import { soundFX } from '../utils/audio';

export function MascotContainer({ 
  buddyId = 'bear',
  mode = 'study', 
  dialogue = null, 
  height = 200,
  showSpeech = true,
  interactive = true
}) {
  const [currentDialogue, setCurrentDialogue] = useState(dialogue);
  const [isTapped, setIsTapped] = useState(false);

  const buddy = getBuddyById(buddyId);

  // If dialogue was passed explicitly, use it; otherwise pick initial quote
  const activeDialogue = currentDialogue || dialogue || buddy.interactiveQuotes[0];

  const handleMascotClick = () => {
    if (!interactive) return;
    soundFX.playPop();

    // Trigger subtle 350ms micro-hop tap effect
    setIsTapped(true);
    setTimeout(() => setIsTapped(false), 350);

    // Pick a random interactive quote from the active study buddy
    const quotes = buddy.interactiveQuotes;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentDialogue(quotes[randomIndex]);
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      position: 'relative',
      flexDirection: showSpeech ? 'row' : 'column',
      justifyContent: 'center'
    }}>
      {/* Speech Bubble */}
      {showSpeech && (
        <div 
          className="animate-float"
          style={{
            background: '#FFFDF8',
            border: `2.5px solid ${buddy.borderColor || '#7C5C43'}`,
            borderRadius: '16px',
            padding: '12px 18px',
            position: 'relative',
            maxWidth: '320px',
            boxShadow: '0 4px 12px rgba(74, 53, 37, 0.08)',
            fontSize: '0.925rem',
            fontWeight: '600',
            color: 'var(--color-brand-dark)',
            fontFamily: 'var(--font-game)',
            cursor: interactive ? 'pointer' : 'default'
          }}
          onClick={handleMascotClick}
        >
          {activeDialogue}

          {/* Bubble Tail */}
          <div style={{
            position: 'absolute',
            right: '-10px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 0,
            height: 0,
            borderTop: '8px solid transparent',
            borderBottom: '8px solid transparent',
            borderLeft: `10px solid ${buddy.borderColor || '#7C5C43'}`
          }} />
          <div style={{
            position: 'absolute',
            right: '-7px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 0,
            height: 0,
            borderTop: '6px solid transparent',
            borderBottom: '6px solid transparent',
            borderLeft: '8px solid #FFFDF8'
          }} />
        </div>
      )}

      {/* Mascot Container Frame */}
      <div 
        className={isTapped ? 'animate-mascot-tap-micro' : ''}
        onClick={handleMascotClick}
        title={interactive ? "Click your study buddy to talk!" : ""}
        style={{
          width: `${height}px`,
          height: `${height}px`,
          borderRadius: '24px',
          border: `3px solid ${buddy.borderColor || '#7C5C43'}`,
          background: `radial-gradient(circle, #FFFDF8 0%, ${buddy.bgColor || '#F5EBE0'} 100%)`,
          overflow: 'hidden',
          boxShadow: '0 8px 16px rgba(74, 53, 37, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          cursor: interactive ? 'pointer' : 'default',
          transition: 'transform 0.2s ease',
          position: 'relative'
        }}
      >
        <LayeredMascotSprite 
          buddyId={buddyId}
          mode={mode}
          size={height * 0.9}
        />
      </div>
    </div>
  );
}
