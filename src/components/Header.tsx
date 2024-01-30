import styles from './Header.module.css'

import igniteLogo from '/g-feed_logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" /> <span>G-Feed</span>
    </header>
  )
}
