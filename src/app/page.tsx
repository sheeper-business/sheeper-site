import styles from './page.module.css';
import '@fontsource/raleway';
import '@fontsource/raleway/400.css'; // Specify weight
import '@fontsource/raleway/600.css'; // Specify weight
import '@fontsource/raleway/700.css'; // Specify weight
import '@fontsource/raleway/900.css'; // Specify weight
import '@fontsource/raleway/800.css'; // Specify weight
import '@fontsource/raleway/400-italic.css';
import { Home } from './home/Home';
import { ThemeProvider } from './ThemeProvider';

export default function page() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
