'use client';

import { createContext, useContext, useState } from 'react';

type MenuContextType = {
  menuState: 'closed' | 'opening' | 'open' | 'closing';
  isMenuVisible: boolean;
  showMenuContent: boolean;
  toggleMenu: () => void;
  activeWindow: string | null;
  setActiveWindow: (window: string | null) => void;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function useMenuContext() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenuContext must be used within MenuProvider');
  }
  return context;
}

type MenuProviderProps = {
  children: React.ReactNode;
};

export function MenuProvider({ children }: MenuProviderProps) {
  const [menuState, setMenuState] = useState<'closed' | 'opening' | 'open' | 'closing'>('closed');
  const [activeWindow, setActiveWindow] = useState<string | null>(null);

  const toggleMenu = () => {
    if (menuState === 'closed') {
      setMenuState('opening');
      setTimeout(() => setMenuState('open'), 700);
    } else if (menuState === 'open') {
      setMenuState('closing');
      setTimeout(() => setMenuState('closed'), 700);
    }
  };

  const isMenuVisible = menuState !== 'closed';
  const showMenuContent = menuState === 'open' || menuState === 'opening';

  const value: MenuContextType = {
    menuState,
    isMenuVisible,
    showMenuContent,
    toggleMenu,
    activeWindow,
    setActiveWindow
  };

  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  );
}
