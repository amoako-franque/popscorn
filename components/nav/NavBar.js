import Link from "next/link"
import styles from "./navbar.module.css"
import { useRouter } from "next/router"
import { useState } from "react"
import Image from "next/image"

const NavBar = ({ username }) => {
  const [showDropDown, setShowDropDown] = useState(false)

  const router = useRouter()

  const handleClickHome = (e) => {
    e.preventDefault()
    router.push("/")
  }

  const handleClickWatched = (e) => {
    e.preventDefault()
    router.push("/movies-watched")
  }

  const handleDropDown = (e) => {
    e.preventDefault()
    if (showDropDown) {
      setShowDropDown(false)
    } else {
      setShowDropDown(true)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link passHref href="/">
          <a className={styles.logoLink}>
            <div className={styles.logoWrapper}>
              <Image
                src={"/static/logo.png"}
                alt="logo"
                width="36px"
                height="36px"
              />
            </div>
          </a>
        </Link>

        <ul className={styles.navItems}>
          <li onClick={handleClickHome} className={styles.navItem}>
            Home
          </li>
          <li onClick={handleClickWatched} className={styles.navItem2}>
            Watched
          </li>
        </ul>

        <nav className={styles.navContainer}>
          <div>
            <button onClick={handleDropDown} className={styles.usernameBtn}>
              <p className={styles.username}>{username}</p>
              {/* icon here */}
              <Image
                src="/static/dropw.svg"
                alt="drop-down icon"
                width="18px"
                height="18px"
              />
            </button>
            {showDropDown && (
              <div className={styles.navDropdown}>
                <div>
                  <Link href="/login">
                    <a className={styles.linkName}>Logout</a>
                  </Link>

                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
