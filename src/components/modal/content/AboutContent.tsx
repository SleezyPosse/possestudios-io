import styles from './ModalContent.module.css';

export function AboutContent() {
  return (
    <div className={styles.modalContentWrapper}>
      <h1 className={styles.modalTitle}>About Us</h1>
      <p className={styles.modalText}>
        We are a cutting-edge creative studio pushing the boundaries of digital innovation. 
        Our team combines artistic vision with technological expertise to create experiences 
        that inspire and amaze.
      </p>
      <p className={styles.modalText}>
        From AI-powered 3D generation to immersive gaming experiences, we&apos;re building 
        the future of digital entertainment and creative tools.
      </p>
    </div>
  );
}
