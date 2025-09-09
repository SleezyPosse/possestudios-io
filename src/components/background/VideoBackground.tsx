'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import styles from './VideoBackground.module.css';

export function VideoBackground() {
  const [currentVideo, setCurrentVideo] = useState('/PosseLanding.mp4');
  const [videoStage, setVideoStage] = useState<'landing' | 'loop'>('landing');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const loopVideoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = useCallback(() => {
    if (videoStage === 'landing') {
      setIsTransitioning(true);
      
      // Start the loop video in the background
      const loopVideo = loopVideoRef.current;
      if (loopVideo) {
        loopVideo.currentTime = 0;
        loopVideo.play().catch(console.error);
        
        // Wait for the loop video to be ready before switching
        const handleCanPlay = () => {
          console.log('Loop video is ready, switching...');
          setVideoStage('loop');
          setCurrentVideo('/PosseLoop1.mp4');
          setIsTransitioning(false);
          loopVideo.removeEventListener('canplay', handleCanPlay);
        };
        
        // If already ready, switch immediately, otherwise wait
        if (loopVideo.readyState >= 3) { // HAVE_FUTURE_DATA or higher
          handleCanPlay();
        } else {
          loopVideo.addEventListener('canplay', handleCanPlay);
          // Fallback timeout in case canplay doesn't fire
          setTimeout(() => {
            console.log('Fallback: switching after timeout');
            setVideoStage('loop');
            setCurrentVideo('/PosseLoop1.mp4');
            setIsTransitioning(false);
            loopVideo.removeEventListener('canplay', handleCanPlay);
          }, 200);
        }
      }
    }
  }, [videoStage]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.loop = videoStage === 'loop';
      // Keep video muted since we removed audio functionality
      video.muted = true;
      video.addEventListener('ended', handleVideoEnd);
      return () => {
        video.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, [videoStage, handleVideoEnd]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((error) => {
        console.error('Video playback failed:', error);
      });
    }
  }, [currentVideo]);

  // Preload the loop video for smooth transition
  useEffect(() => {
    const loopVideo = loopVideoRef.current;
    if (loopVideo) {
      loopVideo.preload = 'auto';
      loopVideo.muted = true;
      loopVideo.loop = true;
    }
  }, []);

  return (
    <>
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
      
      {/* Hidden loop video for smooth transition */}
      <video
        ref={loopVideoRef}
        playsInline
        className={`${styles.video} ${styles.hiddenVideo}`}
        style={{ opacity: isTransitioning ? 1 : 0 }}
      >
        <source src="/PosseLoop1.mp4" type="video/mp4" />
      </video>
    </>
  );
}
