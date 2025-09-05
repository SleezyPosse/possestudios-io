'use client';

import { useState } from 'react';
import { products } from '@/data/products';
import styles from './ModalContent.module.css';

export function ProductsContent() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  if (!selectedProduct) {
    return (
      <div className={styles.modalContentWrapper}>
        <h1 className={styles.modalTitle}>Our Products</h1>
        <div className={styles.productGrid}>
          {Object.entries(products).map(([key, product]) => (
            <button
              key={key}
              onClick={() => setSelectedProduct(key)}
              className={styles.productCard}
            >
              <h2 className={styles.productName}>{product.name}</h2>
              <h3 className={styles.productSubtitle}>{product.subtitle}</h3>
              <p className={styles.productDescription}>{product.description}</p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const product = products[selectedProduct as keyof typeof products];

  return (
    <div className={styles.modalContentWrapper}>
      <button
        onClick={() => setSelectedProduct(null)}
        className={styles.backButton}
      >
        ← Back to Products
      </button>
      <h1 className={styles.modalTitle}>{product.name}</h1>
      <h3 className={styles.modalSubtitle}>{product.subtitle}</h3>
      <p className={styles.modalText}>{product.description}</p>
      <h4 className={styles.modalSubtitle}>Key Features:</h4>
      <ul className={styles.featuresList}>
        {product.features.map((feature, index) => (
          <li key={index} className={styles.featureItem}>
            <span className={styles.featureBullet}>•</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
