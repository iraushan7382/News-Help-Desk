import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Play, Pause, Square, Gauge } from 'lucide-react';

export default function AudioPlayer({ title, content, authorName }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [rate, setRate] = useState(1.0);
  const [supported, setSupported] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [availableVoices, setAvailableVoices] = useState([]);

  // Convert HTML content into clean speech text
  const cleanNarrationText = () => {
    try {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = content || '';
      const rawText = tempDiv.textContent || tempDiv.innerText || '';
      return `${title}. Written by ${authorName}. ${rawText}`;
    } catch {
      return `${title}. Written by ${authorName}.`;
    }
  };

  // Load voices and listen for async voiceschanged event
  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      setSupported(false);
      return;
    }

    const updateVoices = () => {
      try {
        const voices = window.speechSynthesis.getVoices() || [];
        setAvailableVoices(voices);
      } catch (err) {
        console.warn('Voice loading warning:', err);
      }
    };

    updateVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }

    return () => {
      // Cancel speech when unmounting
      try {
        if (window.speechSynthesis) {
          window.speechSynthesis.cancel();
        }
      } catch {}
    };
  }, []);

  // Stop audio immediately whenever article changes
  useEffect(() => {
    handleStop();
    setHasError(false);
  }, [title, content]);

  const handlePlay = () => {
    if (!window.speechSynthesis) return;

    try {
      if (isPaused) {
        window.speechSynthesis.resume();
        setIsPaused(false);
        setIsPlaying(true);
        return;
      }

      window.speechSynthesis.cancel();

      const fullText = cleanNarrationText();
      const utterance = new SpeechSynthesisUtterance(fullText);
      utterance.rate = rate;
      utterance.pitch = 1.0;

      // Select natural English voice if available
      const voices = availableVoices.length > 0 ? availableVoices : (window.speechSynthesis.getVoices() || []);
      const naturalVoice = voices.find(
        (v) =>
          v.lang.startsWith('en') &&
          (v.name.includes('Natural') ||
            v.name.includes('Google') ||
            v.name.includes('Samantha') ||
            v.name.includes('Daniel'))
      ) || voices.find((v) => v.lang.startsWith('en'));

      if (naturalVoice) {
        utterance.voice = naturalVoice;
      }

      utterance.onend = () => {
        setIsPlaying(false);
        setIsPaused(false);
      };

      utterance.onerror = (e) => {
        // Ignore canceled/interrupted events
        if (e.error !== 'canceled' && e.error !== 'interrupted') {
          console.warn('Speech synthesis error:', e);
          setHasError(true);
        }
        setIsPlaying(false);
        setIsPaused(false);
      };

      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
      setIsPaused(false);
      setHasError(false);
    } catch (err) {
      console.error('TTS execution failure:', err);
      setHasError(true);
      setIsPlaying(false);
      setIsPaused(false);
    }
  };

  const handlePause = () => {
    try {
      if (window.speechSynthesis && isPlaying) {
        window.speechSynthesis.pause();
        setIsPaused(true);
        setIsPlaying(false);
      }
    } catch {}
  };

  const handleStop = () => {
    try {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
        setIsPaused(false);
      }
    } catch {}
  };

  const cycleRate = () => {
    const rates = [1.0, 1.25, 1.5];
    const nextIdx = (rates.indexOf(rate) + 1) % rates.length;
    const newRate = rates[nextIdx];
    setRate(newRate);

    if (isPlaying || isPaused) {
      handleStop();
      setTimeout(() => {
        handlePlay();
      }, 100);
    }
  };

  if (!supported) return null;

  return (
    <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950 text-white p-4 rounded-xl border border-slate-800 shadow-md my-6 flex flex-wrap items-center justify-between gap-4">
      {/* Player info & animated sound waves */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-red-700/90 border border-red-500/40 flex items-center justify-center text-white shrink-0 shadow-sm">
          <Volume2 className="w-5 h-5" />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Audio Dispatch
            </span>
            {isPlaying && (
              <div className="flex items-center gap-0.5 h-4 px-1" aria-label="Audio playing">
                <span className="w-1 bg-red-500 rounded-full soundwave-bar" />
                <span className="w-1 bg-red-400 rounded-full soundwave-bar" />
                <span className="w-1 bg-red-500 rounded-full soundwave-bar" />
                <span className="w-1 bg-red-400 rounded-full soundwave-bar" />
                <span className="w-1 bg-red-500 rounded-full soundwave-bar" />
              </div>
            )}
          </div>
          <p className="text-[11px] text-slate-400 font-sans">
            {hasError
              ? 'Audio playback unavailable on this device.'
              : isPlaying
              ? 'Narrating article aloud...'
              : isPaused
              ? 'Audio narration paused'
              : 'Listen to full article narration (TTS)'}
          </p>
        </div>
      </div>

      {/* Audio Controls */}
      <div className="flex items-center gap-2">
        {/* Speed toggle */}
        <button
          onClick={cycleRate}
          className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold border border-slate-700 transition flex items-center gap-1"
          title="Change playback rate"
        >
          <Gauge className="w-3.5 h-3.5 text-amber-400" />
          <span>{rate}x</span>
        </button>

        {/* Play/Pause Button */}
        {isPlaying ? (
          <button
            onClick={handlePause}
            className="px-4 py-1.5 rounded-lg bg-red-700 hover:bg-red-600 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-md"
          >
            <Pause className="w-3.5 h-3.5 fill-white" />
            <span>Pause</span>
          </button>
        ) : (
          <button
            onClick={handlePlay}
            className="px-4 py-1.5 rounded-lg bg-red-700 hover:bg-red-600 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-md"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>{isPaused ? 'Resume' : 'Listen Now'}</span>
          </button>
        )}

        {/* Stop Button */}
        {(isPlaying || isPaused) && (
          <button
            onClick={handleStop}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
            title="Stop narration"
          >
            <Square className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
