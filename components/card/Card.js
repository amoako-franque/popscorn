import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import cls from "classnames"
import styles from "./card.module.css"

const Card = ({
  imgUrl = "https://images.unsplash.com/photo-1594908900066-3f47337549d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3456&q=80",
  size = "medium", id
}) => {
  const [imgSrc, setImgSrc] = useState(imgUrl)

  const classSize = {
    small: styles.smItem,
    medium: styles.mdItem,
    large: styles.lgItem,
  }

  const handleError = () => {
    console.log("hi error")
    setImgSrc(
      "https://images.unsplash.com/photo-1594908900066-3f47337549d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3456&q=80"
    )
  }

   const scale = id === 0 ? { scaleY: 1.1 } : { scale: 1.2 }

  //  const shouldHover = shouldScale && {
  //    whileHover: { ...scale },
  //  }

  return (
    <div className={styles.container}>
      <motion.div
        whileHover={{ ...scale}}
        className={cls(styles.imgMotionWrapper, classSize[size])}
      >
        <Image
          className={styles.cardImg}
          src={imgSrc}
          alt="big image"
          layout="fill"
        />
      </motion.div>
    </div>
  )
}

export default Card
