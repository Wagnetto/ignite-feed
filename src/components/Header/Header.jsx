import igniteLogo from '../../assets/ignite-logo.png';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo ignite" />
    </header>
  );
}
