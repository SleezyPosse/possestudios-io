'use client';

import { useAudioContext } from '@/components/providers/AudioProvider';
import styles from './MusicButton.module.css';

export function MusicButton() {
  const { isMuted, toggleMusic } = useAudioContext();

  return (
    <button
      onClick={toggleMusic}
      className={styles.musicButton}
      aria-label={isMuted ? 'Unmute music' : 'Mute music'}
    >
      {isMuted ? '🔇' : '🔊'}
    </button>
  );
}
