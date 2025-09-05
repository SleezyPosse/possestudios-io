'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { useAudioContext } from '@/components/providers/AudioProvider';
import styles from './VideoBackground.module.css';

export function VideoBackground() {
  const [currentVideo, setCurrentVideo] = useState('/PosseLanding.mp4');
  const [videoStage, setVideoStage] = useState<'landing' | 'loop'>('landing');
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isMuted, audioRef, setPosseLandingFinished } = useAudioContext();

  const handleVideoEnd = useCallback(() => {
    if (videoStage === 'landing') {
      setVideoStage('loop');
      setCurrentVideo('/PosseLoop1.mp4');
      // Mark that PosseLanding has finished
      setPosseLandingFinished(true);
      // When transitioning to loop stage, start MusicLoop.mp3 if not muted
      if (!isMuted && audioRef.current) {
        setTimeout(() => {
          if (audioRef.current) {
            audioRef.current.src = '/MusicLoop.mp3';
            audioRef.current.loop = true;
            audioRef.current.volume = 1;
            audioRef.current.play().catch(console.error);
          }
        }, 100); // Small delay to ensure video has loaded
      }
    }
  }, [videoStage, isMuted, audioRef, setPosseLandingFinished]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.loop = videoStage === 'loop';
      // Video audio is controlled by music button for all stages
      video.muted = isMuted;
      video.addEventListener('ended', handleVideoEnd);
      return () => {
        video.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, [videoStage, isMuted, handleVideoEnd]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((error) => {
        console.error('Video playback failed:', error);
      });
    }
  }, [currentVideo]);

  // Separate useEffect for mute state to avoid restarting video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <video
      ref={videoRef}
      autoPlay
      playsInline
      className={styles.video}
      onEnded={handleVideoEnd}
    >
      <source src={currentVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
