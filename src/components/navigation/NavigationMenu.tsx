'use client';

import { useMenuContext } from '@/components/providers/MenuProvider';
import styles from './NavigationMenu.module.css';

export function NavigationMenu() {
  const { setActiveWindow } = useMenuContext();

  const menuItems = [
    { key: 'about', label: 'About Us' },
    { key: 'products', label: 'Products' },
    { key: 'partners', label: 'Partners' },
    { key: 'socials', label: 'Socials' }
  ] as const;

  return (
    <div className={styles.navInside}>
      {menuItems.map(({ key, label }) => (
        <button 
          key={key}
          onClick={() => setActiveWindow(key)}
          className={styles.navButton}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
