import React, { useState } from 'react';
import { UploadCloud, FileCheck, Sparkles } from 'lucide-react';
import { MascotContainer } from '../components/MascotContainer';
import { getBuddyById } from '../data/buddies';
import { soundFX } from '../utils/audio';

export function UploadView({ onOpenTestSetup, selectedBuddyId }) {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const buddy = getBuddyById(selectedBuddyId);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = (file) => {
    soundFX.playPop();
    setIsProcessing(true);
    setTimeout(() => {
      setUploadedFile({
        name: file.name,
        size: (file.size / 1024).toFixed(1) + ' KB',
        type: file.type || 'Question Paper PDF',
        detectedQuestions: 15
      });
      setIsProcessing(false);
      soundFX.playSuccess();
    }, 800);
  };

  return (
    <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Upload Header Hero */}
      <div className="cozy-card" style={{
        padding: '36px',
        background: `linear-gradient(135deg, #FFFDF7 0%, ${buddy.bgColor || '#F5EBE0'} 100%)`,
        border: '3px solid var(--color-brand-dark)'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '28px',
          alignItems: 'center'
        }}>
          <div>
            <div className="cozy-badge" style={{ marginBottom: '12px', background: 'var(--color-accent-rose)' }}>
              📄 Custom Paper Parser
            </div>

            <h1 style={{ fontSize: '2.2rem', color: 'var(--color-brand-dark)', marginBottom: '10px' }}>
              Upload Your Question Papers
            </h1>

            <p style={{ fontSize: '1rem', color: 'var(--color-text-sub)', marginBottom: '20px', fontWeight: '600' }}>
              Drop your exam PDFs or handwritten test images here! {buddy.name} will scan and organize them into an interactive mock test session.
            </p>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span className="cozy-badge" style={{ background: '#E2F0D8' }}>✓ PDF Supported</span>
              <span className="cozy-badge" style={{ background: '#E2F0D8' }}>✓ PNG & JPG Images</span>
              <span className="cozy-badge" style={{ background: '#E2F0D8' }}>✓ Smart Question Extraction</span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <MascotContainer 
              buddyId={selectedBuddyId}
              mode="upload"
              dialogue={`${buddy.name} says: Hold your papers right here! I'll scan the questions for our next session!`}
              height={220}
              showSpeech={true}
              interactive={true}
            />
          </div>
        </div>
      </div>

      {/* Drag and Drop Zone */}
      <div className="cozy-card" style={{ padding: '32px' }}>
        <form
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
          style={{
            border: dragActive ? '3px dashed #55753F' : '3px dashed #C8B9A6',
            borderRadius: '24px',
            padding: '48px 24px',
            textAlign: 'center',
            background: dragActive ? '#F0F9EB' : 'var(--bg-card-alt)',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onClick={() => document.getElementById('file-upload-input').click()}
        >
          <input 
            type="file" 
            id="file-upload-input" 
            accept=".pdf,.png,.jpg,.jpeg" 
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />

          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '20px',
            background: 'var(--color-accent-rose)',
            border: '2.5px solid #9C4D6B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px'
          }}>
            <UploadCloud size={32} color="#5C2B3F" />
          </div>

          <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', color: 'var(--color-brand-dark)' }}>
            {dragActive ? 'Drop your question paper here!' : 'Click or Drag & Drop Question Paper'}
          </h3>

          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-sub)', fontWeight: '600', marginBottom: '16px' }}>
            Supports PDF, PNG, JPG (Maximum size 25MB)
          </p>

          <button 
            type="button"
            className="cozy-btn cozy-btn-rose"
            style={{ pointerEvents: 'none' }}
          >
            Browse Files from Computer
          </button>
        </form>

        {/* Processing State */}
        {isProcessing && (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div className="animate-float" style={{ fontSize: '2rem', marginBottom: '8px' }}>
              {buddy.emoji}🔎
            </div>
            <div style={{ fontWeight: '700', color: 'var(--color-brand-dark)' }}>
              {buddy.name} is reading your paper...
            </div>
          </div>
        )}

        {/* Uploaded File Confirmation Card */}
        {uploadedFile && !isProcessing && (
          <div className="animate-slide-up" style={{
            marginTop: '24px',
            background: '#F0F9EB',
            border: '2.5px solid #55753F',
            borderRadius: '20px',
            padding: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: 'var(--color-accent-green)',
                border: '2px solid #55753F',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <FileCheck size={24} color="#2F4221" />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', color: '#2F4221' }}>
                  {uploadedFile.name}
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#55753F', fontWeight: '600' }}>
                  Size: {uploadedFile.size} • Found <b>{uploadedFile.detectedQuestions}</b> aptitude questions
                </p>
              </div>
            </div>

            <button 
              className="cozy-btn cozy-btn-primary"
              style={{ fontSize: '1rem', padding: '12px 24px' }}
              onClick={() => {
                soundFX.playPop();
                onOpenTestSetup('all');
              }}
            >
              Start Practice Session <Sparkles size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
