import styles from './ModalContent.module.css';

const socialLinks = [
  { href: 'https://twitter.com/possestudio', label: 'Twitter/X' },
  { href: 'https://discord.gg/possestudios', label: 'Discord' },
  { href: 'https://t.me/possestudios', label: 'Telegram' },
  { href: 'https://www.tiktok.com/@posse.studios', label: 'TikTok' },
  { href: 'https://www.youtube.com/@PosseStudioHQ', label: 'YouTube' },
  { href: 'https://medium.com/@PosseStudios', label: 'Medium' }
] as const;

export function SocialsContent() {
  return (
    <div className={styles.modalContentWrapper}>
      <h1 className={styles.modalTitle}>Follow Us</h1>
      <p className={styles.modalText}>
        Stay connected with us across all our social media platforms for the latest updates, 
        behind-the-scenes content, and exclusive announcements.
      </p>
      <div className={styles.socialLinks}>
        {socialLinks.map(({ href, label }) => (
          <a 
            key={href}
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}
