import Card from "./Card"
import styles from "./section-cards.module.css"


const SectionCard = ({ title, videos=[], size }) => {
console.log();
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((vid, idx) => (
          <Card key={idx} id={idx} imgUrl={vid.imgUrl} size={size}/>
        ))}
      </div>
    </section>
  )
}

export default SectionCard
