'use client';

import { useMenuContext } from '@/components/providers/MenuProvider';
import { ModalContent } from './ModalContent';
import styles from './Modal.module.css';

export function Modal() {
  const { activeWindow, setActiveWindow } = useMenuContext();

  if (!activeWindow) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button
          onClick={() => setActiveWindow(null)}
          className={styles.closeButton}
          aria-label="Close modal"
        >
          ✕
        </button>
        <ModalContent activeWindow={activeWindow} />
      </div>
    </div>
  );
}
