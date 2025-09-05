import styles from './ModalContent.module.css';

export function PartnersContent() {
  return (
    <div className={styles.modalContentWrapper}>
      <h1 className={styles.modalTitle}>Our Partners</h1>
      <p className={styles.modalText}>
        We collaborate with industry leaders and innovative companies to bring our vision to life. 
        Our partnerships enable us to leverage cutting-edge technology and reach new audiences.
      </p>
      
      <div className={styles.partnersGrid}>
        {/* AWS Partner */}
        <div className={styles.partnerCard}>
          <img 
            src="/aws.svg" 
            alt="Amazon Web Services" 
            className={`${styles.partnerLogo} ${styles.aws}`}
          />
          <h3 className={styles.partnerName}>
            Amazon Web Services
          </h3>
          <p className={styles.partnerDescription}>
            Providing scalable, reliable, and secure cloud infrastructure to power our global platform and immersive experiences.
          </p>
        </div>

        {/* Thirdweb Partner */}
        <div className={styles.partnerCard}>
          <img 
            src="/thirdweb.png" 
            alt="Thirdweb" 
            className={styles.partnerLogo}
          />
          <h3 className={styles.partnerName}>
            Thirdweb
          </h3>
          <p className={styles.partnerDescription}>
            Empowering our digital marketplace with cutting-edge web3 development tools and smart contract infrastructure.
          </p>
        </div>
      </div>

      <div className={styles.partnershipCTA}>
        <h3 className={styles.ctaTitle}>Interested in Partnering?</h3>
        <p className={styles.ctaText}>
          We&apos;re always looking for innovative companies to join our ecosystem. If you believe your technology can contribute to the future of digital creation, we&apos;d love to hear from you.
        </p>
        <button className={styles.ctaButton}>
          Become a Partner
        </button>
      </div>
    </div>
  );
}
