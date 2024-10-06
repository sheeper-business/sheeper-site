import Image from 'next/image';
import styles from './DealShowcase.module.css';

export default function DealShowcase() {
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

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <h2 className={styles.title}>Every deal you need.</h2>
        <p className={styles.description}>
          Discover the trendiest deals at restaurants and bars. Everything you need for a great
          time, all in one place with Sheeper{' '}
        </p>
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
        <h2 className={styles.title}>Watch real deals.</h2>
        <p className={styles.description}>
          See what deals are trending right now from your favorite creators
        </p>
        <Image src="/HomepageScreen.png" alt="placeholder" width={288} height={620} />
      </div>
    </div>
  );
}
