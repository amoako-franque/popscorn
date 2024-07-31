import Head from "next/head"
import Image from "next/image"
import Banner from "../components/banner/Banner"
import NavBar from "../components/nav/NavBar"
import styles from "../styles/Home.module.css"
import SectionCard from "../components/card/SectionCard"
import { getVideos, getYuTube } from "../lib/videos"

export async function getServerSideProps() {
  const tvShows = await getVideos()
  return { props: { tvShows } }
}

//const vidx = getYuTube()

export default function Home({ tvShows }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>PopsCorn</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar username="@Franque armoako" />

      <Banner
        title="Last of Us"
        subTitle="A very good game with great story"
        imgUrl="/static/last1.jpg"
      />

      <div className={styles.sectionWrapper}>
        <SectionCard title="Sony Pictures" size="large" videos={tvShows} />
        <SectionCard title="In Theaters" size="large" videos={tvShows} />
        <SectionCard title="Up coming" size="medium" videos={tvShows} />
        <SectionCard title="Recommendations" size="small" videos={tvShows} />
      </div>
    </div>
  )
}
