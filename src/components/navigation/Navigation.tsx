'use client';

import { useMenuContext } from '@/components/providers/MenuProvider';
import { NavigationMenu } from './NavigationMenu';
import styles from './Navigation.module.css';

{/* doesnt render html itself, 
  it just toggles the modal*/}
export function Navigation() {
  const { menuState, isMenuVisible, showMenuContent } = useMenuContext();

  if (!isMenuVisible) return null;

  return (
    <div className={styles.menuOverlay}>
      <div
        className={`${styles.menuBackground1} ${
          menuState === 'opening' ? styles.opening : 
          menuState === 'closing' ? styles.closing : ''
        }`}
      />
      <div
        className={`${styles.menuBackground2} ${
          menuState === 'opening' ? styles.opening : 
          menuState === 'closing' ? styles.closing : ''
        }`}
      />

      {showMenuContent && <NavigationMenu />}
    </div>
  );
}
