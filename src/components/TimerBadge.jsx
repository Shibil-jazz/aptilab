import React, { useEffect } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';

export function TimerBadge({ secondsLeft, setSecondsLeft, onTimeUp, isActive }) {
  useEffect(() => {
    if (!isActive) return;
    if (secondsLeft <= 0) {
      onTimeUp();
      return;
    }

    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, secondsLeft, setSecondsLeft, onTimeUp]);

  const minutes = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;
  const isLowTime = secondsLeft < 120; // less than 2 minutes

  const formatTime = (num) => String(num).padStart(2, '0');

  return (
    <div 
      className="cozy-badge"
      style={{
        padding: '8px 16px',
        fontSize: '1rem',
        borderRadius: '12px',
        background: isLowTime ? '#FDE8E8' : 'var(--bg-card)',
        borderColor: isLowTime ? 'var(--color-danger)' : 'var(--color-brand-dark)',
        color: isLowTime ? 'var(--color-danger)' : 'var(--color-brand-dark)',
        boxShadow: isLowTime ? '0 3px 0 #D9534F' : '0 3px 0 #7C5C43',
        animation: isLowTime ? 'pulseGlow 1.2s infinite' : 'none'
      }}
    >
      {isLowTime ? (
        <AlertTriangle size={18} color="var(--color-danger)" />
      ) : (
        <Clock size={18} color="var(--color-brand-dark)" />
      )}
      <span className="font-pixel-accent" style={{ fontWeight: '700', fontSize: '1.1rem' }}>
        {formatTime(minutes)}:{formatTime(secs)}
      </span>
    </div>
  );
}
