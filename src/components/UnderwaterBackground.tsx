import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface Bubble {
  x: number;
  y: number;
  radius: number;
  speed: number;
  drift: number;
  driftSpeed: number;
  opacity: number;
  pulse: number;
}

export const UnderwaterBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Synthesized deep underwater ambient sound via Web Audio API
  const toggleAudio = () => {
    try {
      if (!audioContextRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioContextRef.current = ctx;

        // Master Gain
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.08, ctx.currentTime);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Deep sea drone (Low frequency oscillator)
        const osc1 = ctx.createOscillator();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(48, ctx.currentTime);

        const osc2 = ctx.createOscillator();
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(54, ctx.currentTime);

        // Lowpass filter for muffled underwater sensation
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(140, ctx.currentTime);

        // Brown noise simulation for ocean waves
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let lastOut = 0.0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          output[i] = (lastOut + 0.02 * white) / 1.02;
          lastOut = output[i];
          output[i] *= 3.5;
        }

        const noiseNode = ctx.createBufferSource();
        noiseNode.buffer = noiseBuffer;
        noiseNode.loop = true;

        const noiseFilter = ctx.createBiquadFilter();
        noiseFilter.type = 'lowpass';
        noiseFilter.frequency.setValueAtTime(220, ctx.currentTime);

        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0.05, ctx.currentTime);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(masterGain);

        noiseNode.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(masterGain);

        osc1.start();
        osc2.start();
        noiseNode.start();
      }

      if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }

      if (isAudioPlaying) {
        if (gainNodeRef.current && audioContextRef.current) {
          gainNodeRef.current.gain.setTargetAtTime(0, audioContextRef.current.currentTime, 0.2);
        }
        setIsAudioPlaying(false);
      } else {
        if (gainNodeRef.current && audioContextRef.current) {
          gainNodeRef.current.gain.setTargetAtTime(0.07, audioContextRef.current.currentTime, 0.2);
        }
        setIsAudioPlaying(true);
      }
    } catch {
      // Audio autoplay policy fallback
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate bubbles
    const bubbleCount = Math.min(Math.floor(width / 22), 65);
    const bubbles: Bubble[] = [];

    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 5.5 + 1.8,
        speed: Math.random() * 0.7 + 0.35,
        drift: Math.random() * Math.PI * 2,
        driftSpeed: Math.random() * 0.02 + 0.008,
        opacity: Math.random() * 0.4 + 0.15,
        pulse: Math.random() * Math.PI,
      });
    }

    // Light caustics beam calculation
    let step = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      step += 0.015;

      // Draw subtle light caustics from the top
      const beamCount = 5;
      for (let b = 0; b < beamCount; b++) {
        const xOffset = (b / beamCount) * width + Math.sin(step + b) * 40;
        const gradient = ctx.createLinearGradient(xOffset, 0, xOffset + 120, height * 0.75);
        gradient.addColorStop(0, 'rgba(34, 211, 238, 0.06)');
        gradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.02)');
        gradient.addColorStop(1, 'rgba(2, 7, 18, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(xOffset - 40, 0);
        ctx.lineTo(xOffset + 140, 0);
        ctx.lineTo(xOffset + 280, height * 0.85);
        ctx.lineTo(xOffset - 10, height * 0.85);
        ctx.closePath();
        ctx.fill();
      }

      // Draw and update bubbles
      bubbles.forEach((b) => {
        b.y -= b.speed;
        b.drift += b.driftSpeed;
        b.pulse += 0.03;
        const currentX = b.x + Math.sin(b.drift) * 15;

        // Reset when reaching top
        if (b.y + b.radius < 0) {
          b.y = height + b.radius + Math.random() * 40;
          b.x = Math.random() * width;
        }

        // Draw bubble body with glass highlight
        const currentOpacity = b.opacity + Math.sin(b.pulse) * 0.05;
        ctx.beginPath();
        ctx.arc(currentX, b.y, b.radius, 0, Math.PI * 2);

        // Fill with subtle cyan gradient
        const radial = ctx.createRadialGradient(
          currentX - b.radius * 0.3,
          b.y - b.radius * 0.3,
          b.radius * 0.1,
          currentX,
          b.y,
          b.radius
        );
        radial.addColorStop(0, `rgba(255, 255, 255, ${currentOpacity * 0.9})`);
        radial.addColorStop(0.3, `rgba(103, 232, 249, ${currentOpacity * 0.6})`);
        radial.addColorStop(0.8, `rgba(6, 182, 212, ${currentOpacity * 0.2})`);
        radial.addColorStop(1, `rgba(8, 51, 88, 0)`);

        ctx.fillStyle = radial;
        ctx.fill();

        // Bubble border
        ctx.strokeStyle = `rgba(165, 243, 252, ${currentOpacity * 0.7})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Little light specular reflection on top-left of bubble
        ctx.beginPath();
        ctx.arc(
          currentX - b.radius * 0.35,
          b.y - b.radius * 0.35,
          b.radius * 0.25,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * 0.85})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Background Deep Ocean Gradient Layers */}
      <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
        {/* Base Abyss gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020d1f] via-[#020813] to-[#01040a]" />

        {/* Bioluminescent deep water ambient glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-10 w-[550px] h-[550px] bg-teal-500/8 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-sky-600/8 rounded-full blur-[180px] pointer-events-none" />

        {/* Ambient Oceanic Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(34, 211, 238, 0.4) 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      {/* Interactive Bubbles & Light Caustics Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-40 pointer-events-none"
      />

      {/* Floating Deep Sea Ambiance Audio Toggle Button */}
      <button
        onClick={toggleAudio}
        aria-label="Toggle underwater ambiance audio"
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-3.5 py-2.5 rounded-full text-xs font-medium backdrop-blur-xl border transition-all duration-300 shadow-lg ${
          isAudioPlaying
            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50 shadow-cyan-500/20 glow-cyan-sm'
            : 'bg-[#06192d]/80 text-slate-400 border-cyan-900/40 hover:text-cyan-300 hover:border-cyan-500/40'
        }`}
      >
        {isAudioPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-cyan-400 animate-bounce" />
            <span className="hidden sm:inline">Suara Kedalaman Laut</span>
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-slate-400" />
            <span className="hidden sm:inline">Aktifkan Suara Laut</span>
          </>
        )}
      </button>
    </>
  );
};
