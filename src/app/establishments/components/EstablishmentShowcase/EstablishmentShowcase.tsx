'use client';

import Image from 'next/image';
import styles from './EstablishmentShowcase.module.css';
import { useTranslation } from 'react-i18next';

export default function EstablishmentShowcase() {
  const deals = [
    {
      id: 1,
      name: 'Deal name',
      establishment: 'Establishment name',
      price: '25.00€',
      duration: '20-30min',
      category: 'Food & Drinks',
    },
    {
      id: 2,
      name: 'Deal name',
      establishment: 'Establishment name',
      price: '25.00€',
      duration: '20-30min',
      category: 'Food & Drinks',
    },
    {
      id: 3,
      name: 'Deal name',
      establishment: 'Establishment name',
      price: '25.00€',
      duration: '20-30min',
      category: 'Food & Drinks',
    },
  ];

  const appDeals = [
    {
      id: 1,
      name: 'Deal name',
      establishment: 'Establishment name',
      price: '25.00€',
      duration: '20-30min',
      category: 'Food & Drinks',
    },
    {
      id: 2,
      name: 'Deal name',
      establishment: 'Establishment name',
      price: '25.00€',
      duration: '20-30min',
      category: 'Food & Drinks',
    },
  ];

  const categories = ['Food', 'Travel', 'Entertainment', 'Shopping', 'Fitness'];

  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <h2 className={styles.title}>{t('establishment_showcase.left_column.title')}</h2>
        <p className={styles.description}>{t('establishment_showcase.left_column.description')}</p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            flex: 1,
            overflow: 'hidden',
            alignItems: 'center',
          }}
        >
          <Image src="/deal_carrousel.png" alt="placeholder" width={520} height={466} />
        </div>
      </div>
      <div className={styles.rightSection}>
        <h2 className={styles.title}>{t('establishment_showcase.right_column.title')}</h2>
        <p className={styles.description}>{t('establishment_showcase.right_column.description')}</p>
        <Image src="/HomepageScreen.png" alt="placeholder" width={288} height={620} />
      </div>
    </div>
  );
}
