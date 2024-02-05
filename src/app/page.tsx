import Image from 'next/image';
import styles from './page.module.css';
import '@fontsource/raleway';
import '@fontsource/raleway/400.css'; // Specify weight
import '@fontsource/raleway/600.css'; // Specify weight
import '@fontsource/raleway/700.css'; // Specify weight
import '@fontsource/raleway/400-italic.css';
import { Home } from './home/Home';

export default function page() {
  return <Home />;
}
