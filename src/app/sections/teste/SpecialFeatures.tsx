import Image from 'next/image';
import styles from './SpecialFeatures.module.css';
import { colors } from '@/app/colors';
import { Icon } from '@mui/material';
import { FaBell, FaGift, FaUsers } from 'react-icons/fa';

export default function SpecialFeatures() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>What make us special?</h2>

      <div className={styles.grid}>
        <div className={styles.featureWide}>
          <Image
            src="/likes_screen.png"
            alt="Mobile app screenshot"
            width={400}
            height={200}
            className={styles.image}
          />
          <div className={styles.textContainer}>
            <div className={styles.featureHeader}>
              {/* <User className={styles.icon} /> */}
              <FaUsers color={colors.primary} size={40} />
              <h3 className={styles.featureTitle}>Available to Everyone</h3>
            </div>
            <p className={styles.featureDescription}>
              Dive into a world of endless possibilities across different industries, offering a
              variety of services and products.
            </p>
          </div>
        </div>

        <div className={styles.mainImage}>
          <Image
            src="/special_features3.png"
            alt="People working in a cafe"
            width={600}
            height={400}
            className={styles.image}
          />
          <div className={styles.textContainer}>
            <div className={styles.featureHeader}>
              {/* <Bell className={styles.icon} /> */}
              <FaBell color={colors.primary} size={40} />
              <h3 className={styles.featureTitle}>Location based notifications</h3>
            </div>
            <p className={styles.featureDescription}>
              Receive notifications in real-time based on your current location, ensuring you never
              miss out on nearby deals. Our system intelligently targets deals near your common
              locations such as home, workplace, and frequent hangout spots, enhancing convenience
              and maximizing savings on-the-go.
            </p>
          </div>
        </div>

        <div className={styles.feature}>
          <Image
            src="/special_features4.png"
            alt="Mobile app screenshot"
            width={400}
            height={200}
            className={styles.image}
          />
          <div className={styles.textContainer}>
            <div className={styles.featureHeader}>
              {/* <Gift className={styles.icon} /> */}
              <FaGift color={colors.primary} size={40} />
              <h3 className={styles.featureTitle}>Tailored Deals</h3>
            </div>
            <p className={styles.featureDescription}>
              Our algorithm customizes deals to match your unique preferences and purchasing
              behavior, ensuring every offer resonates with your interests and maximizes your
              savings potential.
            </p>
          </div>
        </div>

        <div className={styles.featureWide}>
          <Image
            src="/special_features2.png"
            alt="People enjoying drinks"
            width={400}
            height={200}
            className={styles.image}
          />
        </div>

        <div className={styles.feature}>
          <Image
            src="/special_features5.png"
            alt="Mobile app notifications"
            width={400}
            height={200}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
