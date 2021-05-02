import styles from '../../styles/Home.module.css'
import styleProject from '../../styles/Projects.module.css'
import Head from '../../components/Head';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export default function Projects() {
  return (
    <>
    <Head title="gabriel anatrone" />
    <Nav />
    <div className={styles.container}>
      <main className={styles.main}>
            <div className={styleProject.loader}>in development...</div>
      </main>
      <Footer />
    </div>
  </>
  )
}
