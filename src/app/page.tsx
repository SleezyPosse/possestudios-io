import { Header } from '@/components/layout/Header';
import { VideoBackground } from '@/components/background/VideoBackground';
import { Navigation } from '@/components/navigation/Navigation';
import { Modal } from '@/components/modal/Modal';
import { AudioProvider } from '@/components/providers/AudioProvider';
import { MenuProvider } from '@/components/providers/MenuProvider';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <link
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Bungee&display=swap"
        rel="stylesheet"
      />
      
      <AudioProvider>
        <VideoBackground />
        <MenuProvider>
          <Header />
          <Navigation />
          <Modal />
        </MenuProvider>
      </AudioProvider>

      {/* @ts-expect-error - Custom element not recognized by TypeScript */}
      <elevenlabs-convai agent-id="agent_1701k456epcxfs0r2sp4nkkmd44p"></elevenlabs-convai>
      <script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async type="text/javascript"></script>
    </div>
  );
}
