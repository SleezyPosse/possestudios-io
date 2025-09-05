'use client';

import { createContext, useContext, useState, useRef } from 'react';

type AudioContextType = {
  isMuted: boolean;
  toggleMusic: () => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
  posseLandingFinished: boolean;
  setPosseLandingFinished: (finished: boolean) => void;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function useAudioContext() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudioContext must be used within AudioProvider');
  }
  return context;
}

type AudioProviderProps = {
  children: React.ReactNode;
};

export function AudioProvider({ children }: AudioProviderProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [posseLandingFinished, setPosseLandingFinished] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const fadeOutAudio = (audio: HTMLAudioElement, duration: number = 500) => {
    const startVolume = audio.volume;
    const startTime = Date.now();
    
    const fadeOut = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      audio.volume = startVolume * (1 - progress);
      
      if (progress < 1) {
        requestAnimationFrame(fadeOut);
      } else {
        audio.pause();
        audio.src = '';
        audio.volume = startVolume; // Reset volume for next time
      }
    };
    
    fadeOut();
  };

  const toggleMusic = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    
    if (!posseLandingFinished) {
      // Before PosseLanding finishes, we only control video audio
      // The video's muted state is controlled by isMuted in VideoBackground
      return;
    }
    
    // After PosseLanding finishes, control external music
    if (audioRef.current) {
      if (newMuted) {
        // Muting - fade out external music
        if (audioRef.current.src && audioRef.current.src.includes('MusicLoop')) {
          fadeOutAudio(audioRef.current);
        }
      } else {
        // Unmuting - start external music
        audioRef.current.src = '/MusicLoop.mp3';
        audioRef.current.loop = true;
        audioRef.current.volume = 1;
        audioRef.current.play().catch(console.error);
      }
    }
  };

  const value: AudioContextType = {
    isMuted,
    toggleMusic,
    audioRef,
    posseLandingFinished,
    setPosseLandingFinished
  };

  return (
    <AudioContext.Provider value={value}>
      <audio ref={audioRef} />
      {children}
    </AudioContext.Provider>
  );
}
