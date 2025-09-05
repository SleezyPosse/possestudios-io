import { HamburgerMenuButton } from './MenuButton';
import { MusicButton } from './MusicButton';


{/* Music toggle + hamburger menu button */}
export function Header() {
  return (
    <header>
      <MusicButton />
      <HamburgerMenuButton />
    </header>
  );
}
