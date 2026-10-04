import React from 'react';

export function LayeredMascotSprite({ 
  buddyId = 'bear', 
  mode = 'study', 
  size = 180 
}) {
  const isThinking = mode === 'thinking';
  const isHappy = mode === 'happy';
  const isEncouraging = mode === 'encouraging';
  const isUpload = mode === 'upload';

  // Render 2D Vector Sprites with Strict 4-Layer Z-Ordering & Hidden Joint Anchors
  const renderBuddySprite = () => {
    switch (buddyId) {
      // --- 1. BEAR (Barnaby) ---
      case 'bear':
        return (
          <svg viewBox="0 0 160 160" width={size} height={size} style={{ overflow: 'visible' }}>
            <g className="anim-breathing">
              {/* LAYER 1: BACK (Ears rendered behind head) */}
              <g className="anim-ear-twitch" style={{ transformOrigin: '46px 60px', transformBox: 'fill-box' }}>
                <circle cx="46" cy="48" r="16" fill="#8C6239" stroke="#4A3525" strokeWidth="3.5" />
                <circle cx="46" cy="48" r="9" fill="#D9A066" />
              </g>
              <g className="anim-ear-twitch" style={{ transformOrigin: '114px 60px', transformBox: 'fill-box' }}>
                <circle cx="114" cy="48" r="16" fill="#8C6239" stroke="#4A3525" strokeWidth="3.5" />
                <circle cx="114" cy="48" r="9" fill="#D9A066" />
              </g>

              {/* LAYER 2: BODY (Green Sweater) */}
              <rect x="42" y="95" width="76" height="52" rx="20" fill="#70AB69" stroke="#3F6B38" strokeWidth="3.5" />
              <path d="M60 95 L60 147 M80 95 L80 147 M100 95 L100 147" stroke="#558A4F" strokeWidth="2.5" strokeDasharray="3 3" />

              {/* LAYER 3: FRONT (Head & Snout) */}
              <circle cx="80" cy="74" r="38" fill="#A07243" stroke="#4A3525" strokeWidth="3.5" />
              <ellipse cx="80" cy="84" rx="16" ry="11" fill="#FCEBD5" stroke="#4A3525" strokeWidth="2.5" />

              {/* LAYER 4: FACE & PROPS */}
              <ellipse cx="80" cy="79" rx="6" ry="4" fill="#3A2E28" />
              {isHappy ? (
                <path d="M73 85 Q80 93 87 85" fill="#C44D4D" stroke="#3A2E28" strokeWidth="2" />
              ) : (
                <path d="M74 86 Q80 90 86 86" fill="none" stroke="#3A2E28" strokeWidth="2" strokeLinecap="round" />
              )}
              <ellipse cx="58" cy="82" rx="5" ry="3.5" fill="#F49797" opacity="0.65" />
              <ellipse cx="102" cy="82" rx="5" ry="3.5" fill="#F49797" opacity="0.65" />

              {/* Blinking Eyes */}
              <g className="anim-blink">
                {isHappy ? (
                  <>
                    <path d="M62 68 Q68 61 74 68" fill="none" stroke="#3A2E28" strokeWidth="3" strokeLinecap="round" />
                    <path d="M86 68 Q92 61 98 68" fill="none" stroke="#3A2E28" strokeWidth="3" strokeLinecap="round" />
                  </>
                ) : (
                  <>
                    <circle cx="68" cy="67" r="4.5" fill="#2F231D" />
                    <circle cx="70" cy="65" r="1.5" fill="#FFF" className="anim-pupil" />
                    <circle cx="92" cy="67" r="4.5" fill="#2F231D" />
                    <circle cx="94" cy="65" r="1.5" fill="#FFF" className="anim-pupil" />
                  </>
                )}
              </g>

              {/* Mode Accessories */}
              {isThinking && (
                <>
                  <circle cx="68" cy="67" r="10" fill="none" stroke="#3A2E28" strokeWidth="2.5" />
                  <circle cx="92" cy="67" r="10" fill="none" stroke="#3A2E28" strokeWidth="2.5" />
                  <line x1="78" y1="67" x2="82" y2="67" stroke="#3A2E28" strokeWidth="2.5" />
                  <g className="anim-pencil-scribble">
                    <rect x="106" y="98" width="8" height="24" rx="2" fill="#E5A93C" stroke="#3A2E28" strokeWidth="2" transform="rotate(-30 106 98)" />
                    <polygon points="108,124 112,124 110,130" fill="#3A2E28" transform="rotate(-30 106 98)" />
                  </g>
                </>
              )}
            </g>
          </svg>
        );

      // --- 2. CAT (Cleo) ---
      case 'cat':
        return (
          <svg viewBox="0 0 160 160" width={size} height={size} style={{ overflow: 'visible' }}>
            <g className="anim-breathing">
              {/* LAYER 1: BACK (Tail root M100 125 extends 15px BEHIND body silhouette) */}
              <path 
                d="M100 125 Q145 115 135 90" 
                fill="none" 
                stroke="#C47B95" 
                strokeWidth="9" 
                strokeLinecap="round" 
                className="anim-tail-swish" 
                style={{ transformOrigin: '100px 125px', transformBox: 'fill-box' }} 
              />
              <g className="anim-ear-twitch" style={{ transformOrigin: '46px 55px', transformBox: 'fill-box' }}>
                <polygon points="42,55 30,22 62,40" fill="#E8A0BF" stroke="#9C4D6B" strokeWidth="3" />
                <polygon points="44,50 36,28 58,40" fill="#F9ECF2" />
              </g>
              <g className="anim-ear-twitch" style={{ transformOrigin: '114px 55px', transformBox: 'fill-box' }}>
                <polygon points="118,55 130,22 98,40" fill="#E8A0BF" stroke="#9C4D6B" strokeWidth="3" />
                <polygon points="116,50 124,28 102,40" fill="#F9ECF2" />
              </g>

              {/* LAYER 2: BODY (Body covers tail root completely) */}
              <ellipse cx="80" cy="118" rx="36" ry="26" fill="#F4C2D7" stroke="#9C4D6B" strokeWidth="3.5" />

              {/* LAYER 3: FRONT (White Tummy, Head, Whiskers) */}
              <ellipse cx="80" cy="120" rx="20" ry="16" fill="#FFFDF8" />
              <ellipse cx="80" cy="72" rx="36" ry="30" fill="#F4C2D7" stroke="#9C4D6B" strokeWidth="3.5" />
              <line x1="32" y1="72" x2="52" y2="74" stroke="#9C4D6B" strokeWidth="2" strokeLinecap="round" />
              <line x1="34" y1="80" x2="52" y2="79" stroke="#9C4D6B" strokeWidth="2" strokeLinecap="round" />
              <line x1="128" y1="72" x2="108" y2="74" stroke="#9C4D6B" strokeWidth="2" strokeLinecap="round" />
              <line x1="126" y1="80" x2="108" y2="79" stroke="#9C4D6B" strokeWidth="2" strokeLinecap="round" />

              {/* LAYER 4: FACE */}
              <polygon points="77,78 83,78 80,82" fill="#9C4D6B" />
              {isHappy ? (
                <path d="M73 84 Q80 91 87 84" fill="#C44D4D" stroke="#9C4D6B" strokeWidth="2" />
              ) : (
                <path d="M74 83 Q77 86 80 83 Q83 86 86 83" fill="none" stroke="#9C4D6B" strokeWidth="2" strokeLinecap="round" />
              )}
              <g className="anim-blink">
                {isHappy ? (
                  <>
                    <path d="M62 66 Q68 58 74 66" fill="none" stroke="#5C2B3F" strokeWidth="3" strokeLinecap="round" />
                    <path d="M86 66 Q92 58 98 66" fill="none" stroke="#5C2B3F" strokeWidth="3" strokeLinecap="round" />
                  </>
                ) : (
                  <>
                    <ellipse cx="68" cy="66" rx="5" ry="6" fill="#5C2B3F" />
                    <circle cx="70" cy="64" r="2" fill="#FFF" className="anim-pupil" />
                    <ellipse cx="92" cy="66" rx="5" ry="6" fill="#5C2B3F" />
                    <circle cx="94" cy="64" r="2" fill="#FFF" className="anim-pupil" />
                  </>
                )}
              </g>
            </g>
          </svg>
        );

      // --- 3. PUPPY (Pippin) ---
      case 'puppy':
        return (
          <svg viewBox="0 0 160 160" width={size} height={size} style={{ overflow: 'visible' }}>
            <g className="anim-breathing">
              {/* LAYER 1: BACK (Tail root M95 110 extends 15px BEHIND puppy body) */}
              <path 
                d="M95 110 Q140 85 132 118 Q115 125 90 115" 
                fill="none" 
                stroke="#D4A340" 
                strokeWidth="10" 
                strokeLinecap="round" 
                className="anim-tail-wag" 
                style={{ transformOrigin: '95px 110px', transformBox: 'fill-box' }} 
              />

              {/* LAYER 2: BODY (Puppy Torso completely covers tail root) */}
              <rect x="46" y="96" width="68" height="48" rx="20" fill="#F5DAA2" stroke="#7C5C43" strokeWidth="3.5" />
              
              {/* LAYER 3: FRONT (Head & Floppy Ears) */}
              <g className="anim-head-tilt" style={{ transformOrigin: '80px 95px', transformBox: 'fill-box' }}>
                <path d="M42 55 Q20 65 30 100 Q48 95 48 68 Z" fill="#B88228" stroke="#7C5C43" strokeWidth="3" />
                <path d="M118 55 Q140 65 130 100 Q112 95 112 68 Z" fill="#B88228" stroke="#7C5C43" strokeWidth="3" />
                <circle cx="80" cy="72" r="36" fill="#F7E2B5" stroke="#7C5C43" strokeWidth="3.5" />
                <ellipse cx="80" cy="82" rx="16" ry="11" fill="#FFFDF8" stroke="#7C5C43" strokeWidth="2.5" />

                {/* LAYER 4: FACE */}
                <ellipse cx="80" cy="77" rx="7" ry="5" fill="#4A3525" />
                <path d="M74 84 Q80 94 86 84" fill="#F49797" stroke="#7C5C43" strokeWidth="2" />
                <g className="anim-blink">
                  <circle cx="66" cy="65" r="4.5" fill="#3A2E28" />
                  <circle cx="68" cy="63" r="1.5" fill="#FFF" className="anim-pupil" />
                  <circle cx="94" cy="65" r="4.5" fill="#3A2E28" />
                  <circle cx="96" cy="63" r="1.5" fill="#FFF" className="anim-pupil" />
                </g>
              </g>
            </g>
          </svg>
        );

      // --- 4. PARROT (Percy) - Redrawn Upright Bird Anatomy ---
      case 'parrot':
        return (
          <svg viewBox="0 0 160 160" width={size} height={size} style={{ overflow: 'visible' }}>
            <g className="anim-breathing">
              {/* LAYER 1: BACK (Tail Feathers & Feet behind body) */}
              <polygon points="72,135 88,135 80,152" fill="#3F6B38" stroke="#2F5C35" strokeWidth="2" />
              <ellipse cx="68" cy="136" rx="8" ry="4" fill="#FF9F1C" stroke="#2F5C35" strokeWidth="2" />
              <ellipse cx="92" cy="136" rx="8" ry="4" fill="#FF9F1C" stroke="#2F5C35" strokeWidth="2" />

              {/* LAYER 2: BODY (Rounded Upright Bird Body) */}
              <ellipse cx="80" cy="102" rx="30" ry="36" fill="#559E5E" stroke="#2F5C35" strokeWidth="3.5" />

              {/* LAYER 3: FRONT (Yellow Chest Patch, Side Wings & Head) */}
              <ellipse cx="80" cy="106" rx="16" ry="24" fill="#FFD166" />
              <path 
                d="M44 80 Q25 94 36 122 Q52 114 50 84 Z" 
                fill="#70AB69" 
                stroke="#3F6B38" 
                strokeWidth="3" 
                className="anim-wing-flap" 
                style={{ transformOrigin: '50px 84px', transformBox: 'fill-box' }} 
              />
              <path 
                d="M116 80 Q135 94 124 122 Q108 114 110 84 Z" 
                fill="#70AB69" 
                stroke="#3F6B38" 
                strokeWidth="3" 
                className="anim-wing-flap" 
                style={{ transformOrigin: '110px 84px', transformBox: 'fill-box' }} 
              />

              {/* LAYER 4: HEAD, CREST & BEAK */}
              <g className="anim-head-bob" style={{ transformOrigin: '80px 75px', transformBox: 'fill-box' }}>
                <path d="M75 30 Q80 18 85 30 Q90 18 95 32" fill="none" stroke="#FF5964" strokeWidth="4" strokeLinecap="round" />
                <circle cx="80" cy="58" r="28" fill="#559E5E" stroke="#2F5C35" strokeWidth="3.5" />
                {/* Curved Beak */}
                <path d="M80 58 Q98 62 90 78 Q80 72 80 58 Z" fill="#FF9F1C" stroke="#2F5C35" strokeWidth="2.5" />
                {/* Blinking Eyes */}
                <g className="anim-blink">
                  <circle cx="70" cy="54" r="5.5" fill="#FFF" stroke="#2F5C35" strokeWidth="1.5" />
                  <circle cx="70" cy="54" r="2.8" fill="#2F231D" />
                </g>
              </g>
            </g>
          </svg>
        );

      // --- 5. MOUSE (Milo) ---
      case 'mouse':
        return (
          <svg viewBox="0 0 160 160" width={size} height={size} style={{ overflow: 'visible' }}>
            <g className="anim-breathing">
              {/* LAYER 1: BACK (Tail root M90 120 extends 15px BEHIND mouse body silhouette) */}
              <path 
                d="M90 120 Q145 145 135 102 Q145 78 140 68" 
                fill="none" 
                stroke="#7A9E9F" 
                strokeWidth="4" 
                strokeLinecap="round" 
                className="anim-tail-curl" 
                style={{ transformOrigin: '90px 120px', transformBox: 'fill-box' }} 
              />
              <g className="anim-ear-twitch" style={{ transformOrigin: '44px 56px', transformBox: 'fill-box' }}>
                <circle cx="44" cy="46" r="20" fill="#9CB4B5" stroke="#4A7C96" strokeWidth="3.5" />
                <circle cx="44" cy="46" r="12" fill="#F4C2D7" />
              </g>
              <g className="anim-ear-twitch" style={{ transformOrigin: '116px 56px', transformBox: 'fill-box' }}>
                <circle cx="116" cy="46" r="20" fill="#9CB4B5" stroke="#4A7C96" strokeWidth="3.5" />
                <circle cx="116" cy="46" r="12" fill="#F4C2D7" />
              </g>

              {/* LAYER 2: BODY (Mouse Torso completely covers tail root) */}
              <ellipse cx="80" cy="116" rx="34" ry="26" fill="#B4C9CB" stroke="#4A7C96" strokeWidth="3.5" />

              {/* LAYER 3: FRONT (White Tummy, Head, Whiskers) */}
              <ellipse cx="80" cy="118" rx="18" ry="16" fill="#FFFDF8" />
              <circle cx="80" cy="74" r="32" fill="#B4C9CB" stroke="#4A7C96" strokeWidth="3.5" />
              <line x1="48" y1="80" x2="66" y2="82" stroke="#4A7C96" strokeWidth="1.5" />
              <line x1="46" y1="87" x2="66" y2="85" stroke="#4A7C96" strokeWidth="1.5" />
              <line x1="112" y1="80" x2="94" y2="82" stroke="#4A7C96" strokeWidth="1.5" />
              <line x1="114" y1="87" x2="94" y2="85" stroke="#4A7C96" strokeWidth="1.5" />

              {/* LAYER 4: FACE */}
              <polygon points="76,82 84,82 80,87" fill="#E899B8" />
              <g className="anim-blink">
                <circle cx="68" cy="68" r="4" fill="#2F231D" />
                <circle cx="70" cy="66" r="1.5" fill="#FFF" className="anim-pupil" />
                <circle cx="92" cy="68" r="4" fill="#2F231D" />
                <circle cx="94" cy="66" r="1.5" fill="#FFF" className="anim-pupil" />
              </g>
            </g>
          </svg>
        );

      // --- 6. PENGUIN (Pingu) ---
      case 'penguin':
        return (
          <svg viewBox="0 0 160 160" width={size} height={size} style={{ overflow: 'visible' }}>
            <g className="anim-waddle-rock" style={{ transformOrigin: '80px 130px', transformBox: 'fill-box' }}>
              {/* LAYER 1: BACK (Orange Feet) */}
              <ellipse cx="64" cy="136" rx="12" ry="5" fill="#FFB703" stroke="#1F2A3E" strokeWidth="2" />
              <ellipse cx="96" cy="136" rx="12" ry="5" fill="#FFB703" stroke="#1F2A3E" strokeWidth="2" />

              {/* LAYER 2: BODY (Chubby Penguin Body) */}
              <rect x="46" y="50" width="68" height="84" rx="34" fill="#3B4B68" stroke="#1F2A3E" strokeWidth="3.5" />

              {/* LAYER 3: FRONT (White Tummy & Side Flippers) */}
              <rect x="56" y="66" width="48" height="62" rx="24" fill="#FFFDF8" stroke="#1F2A3E" strokeWidth="2" />
              <ellipse 
                cx="38" cy="100" rx="10" ry="24" fill="#3B4B68" stroke="#1F2A3E" strokeWidth="3" 
                transform="rotate(20 38 100)" className="anim-flipper-flap" 
                style={{ transformOrigin: '38px 90px', transformBox: 'fill-box' }} 
              />
              <ellipse 
                cx="122" cy="100" rx="10" ry="24" fill="#3B4B68" stroke="#1F2A3E" strokeWidth="3" 
                transform="rotate(-20 122 100)" className="anim-flipper-flap" 
                style={{ transformOrigin: '122px 90px', transformBox: 'fill-box' }} 
              />

              {/* LAYER 4: FACE */}
              <polygon points="74,74 86,74 80,84" fill="#FFB703" stroke="#1F2A3E" strokeWidth="2" />
              <g className="anim-blink">
                <circle cx="68" cy="64" r="4.5" fill="#1F2A3E" />
                <circle cx="70" cy="62" r="1.5" fill="#FFF" className="anim-pupil" />
                <circle cx="92" cy="64" r="4.5" fill="#1F2A3E" />
                <circle cx="94" cy="62" r="1.5" fill="#FFF" className="anim-pupil" />
              </g>
            </g>
          </svg>
        );

      // --- 7. CROW (Corvus) - Redrawn Dark Bird Silhouette ---
      case 'crow':
        return (
          <svg viewBox="0 0 160 160" width={size} height={size} style={{ overflow: 'visible' }}>
            <g className="anim-breathing">
              {/* LAYER 1: BACK (Tail Feathers & Feet) */}
              <polygon points="102,110 132,124 122,134 98,120" fill="#3A3845" stroke="#1A1825" strokeWidth="2.5" />
              <ellipse cx="66" cy="132" rx="7" ry="3" fill="#FFD166" stroke="#1A1825" strokeWidth="1.5" />
              <ellipse cx="94" cy="132" rx="7" ry="3" fill="#FFD166" stroke="#1A1825" strokeWidth="1.5" />

              {/* LAYER 2: BODY (Dark Rounded Torso) */}
              <ellipse cx="80" cy="98" rx="28" ry="32" fill="#3A3845" stroke="#1A1825" strokeWidth="3.5" />

              {/* LAYER 3: FRONT (Side Wing Contour & Head/Neck Overlap) */}
              <path 
                d="M54 78 Q36 96 58 118 Q78 112 74 84 Z" 
                fill="#4C495D" stroke="#1A1825" strokeWidth="3" 
                style={{ transformOrigin: '65px 84px', transformBox: 'fill-box' }} 
              />
              <g className="anim-head-tilt" style={{ transformOrigin: '80px 72px', transformBox: 'fill-box' }}>
                <circle cx="80" cy="56" r="24" fill="#3A3845" stroke="#1A1825" strokeWidth="3.5" />

                {/* LAYER 4: FACE & BEAK */}
                <polygon points="80,52 104,60 80,64" fill="#FFD166" stroke="#1A1825" strokeWidth="2.5" />
                <g className="anim-blink">
                  <circle cx="72" cy="52" r="4.5" fill="#FFF" stroke="#1A1825" strokeWidth="1.5" />
                  <circle cx="72" cy="52" r="2.2" fill="#1A1825" />
                </g>
              </g>
            </g>
          </svg>
        );

      // --- 8. LAMB (Pip) ---
      case 'lamb':
      default:
        return (
          <svg viewBox="0 0 160 160" width={size} height={size} style={{ overflow: 'visible' }}>
            <g className="anim-breathing">
              {/* LAYER 1: BACK (Ears behind head) */}
              <g className="anim-ear-twitch" style={{ transformOrigin: '52px 62px', transformBox: 'fill-box' }}>
                <ellipse cx="38" cy="62" rx="18" ry="10" fill="#E8C3C3" stroke="#A86B6B" strokeWidth="3" transform="rotate(-15 38 62)" />
              </g>
              <g className="anim-ear-twitch" style={{ transformOrigin: '108px 62px', transformBox: 'fill-box' }}>
                <ellipse cx="122" cy="62" rx="18" ry="10" fill="#E8C3C3" stroke="#A86B6B" strokeWidth="3" transform="rotate(15 122 62)" />
              </g>

              {/* LAYER 2: BODY (Woolly Body) */}
              <circle cx="55" cy="115" r="18" fill="#FFFDF8" stroke="#D0C2B2" strokeWidth="2" />
              <circle cx="105" cy="115" r="18" fill="#FFFDF8" stroke="#D0C2B2" strokeWidth="2" />
              <rect x="48" y="96" width="64" height="42" rx="20" fill="#FFFDF8" stroke="#BDB0A0" strokeWidth="3.5" />

              {/* LAYER 3: FRONT (Woolly Head Clusters & Pink Face) */}
              <circle cx="60" cy="50" r="14" fill="#FFFDF8" stroke="#D0C2B2" strokeWidth="2" />
              <circle cx="100" cy="50" r="14" fill="#FFFDF8" stroke="#D0C2B2" strokeWidth="2" />
              <circle cx="80" cy="42" r="16" fill="#FFFDF8" stroke="#D0C2B2" strokeWidth="2" />
              <ellipse cx="80" cy="72" rx="26" ry="22" fill="#F5DBDB" stroke="#A86B6B" strokeWidth="3.5" />

              {/* LAYER 4: FACE */}
              <ellipse cx="80" cy="78" rx="5" ry="3" fill="#A86B6B" />
              <path d="M75 82 Q80 87 85 82" fill="none" stroke="#A86B6B" strokeWidth="2" strokeLinecap="round" />
              <g className="anim-blink">
                <circle cx="68" cy="66" r="4" fill="#3A2E28" />
                <circle cx="70" cy="64" r="1.5" fill="#FFF" className="anim-pupil" />
                <circle cx="92" cy="66" r="4" fill="#3A2E28" />
                <circle cx="94" cy="64" r="1.5" fill="#FFF" className="anim-pupil" />
              </g>
            </g>
          </svg>
        );
    }
  };

  return (
    <div style={{
      width: `${size}px`,
      height: `${size}px`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      userSelect: 'none'
    }}>
      {renderBuddySprite()}
    </div>
  );
}
