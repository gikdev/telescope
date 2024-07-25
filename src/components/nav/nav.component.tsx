import Link from "next/link"
import styles from "./nav.module.scss"

function Nav() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.navLogo} href="/">
        تلسکوپـــــ
      </Link>
      <Link className={styles.navProfile} href="/">
        <img src="https://randomuser.me/api/portraits/men/29.jpg" alt="پروفایل کاربر" />
      </Link>
    </nav>
  )
}

export default Nav
