'use client';

import { useMenuContext } from '@/components/providers/MenuProvider';
import styles from './MenuButton.module.css';

export function HamburgerMenuButton() {
  const { menuState, toggleMenu } = useMenuContext();
  const isMenuVisible = menuState !== 'closed';

  return (
    <button
      onClick={toggleMenu}
      className={styles.menuButton}
      aria-label="Toggle menu"
      aria-expanded={isMenuVisible}
    >
      <div className={styles.menuIcon}>
        {/* 3 spans represent the 3 lines of a hamburger menu */}
        <span 
          className={`${styles.menuIconLine} ${styles.menuIconLineLeft} ${isMenuVisible ? styles.open : ''}`}
        />
        <span 
          className={`${styles.menuIconLine} ${styles.menuIconLineCenter} ${isMenuVisible ? styles.open : ''}`}
        />
        <span 
          className={`${styles.menuIconLine} ${styles.menuIconLineRight} ${isMenuVisible ? styles.open : ''}`}
        />
      </div>
    </button>
  );
}
