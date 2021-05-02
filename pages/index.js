import styles from '../styles/Home.module.css'
import Head from '../components/Head';
import Nav from '../components/Nav';
import Typewriter from 'typewriter-effect';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
    <Head title="gabriel anatrone" />
    <Nav />
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Typewriter
              options={{
                  strings: [
                    'Gabriel Anatrone',
                    'Anatrone',
                    'Ana',
                    'Gabs',
                    'ガブリエル'
                  ],
                  autoStart: true,
                  loop: true,
              }}
          />
        </h1>

        <div className={styles.description}>
           <p>web developer full-stack php/js</p>
           
           <SocialMedia />
        </div>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>&larr; Playground</h3>
            <p>Code laboratory. Where I put anything random.</p>
          </a>

          <a href="#" className={styles.card}>
            <h3 className="text-end">Projects &rarr;</h3>
            <p className="text-end">Place where I have my projects or what I have already coded.</p>
          </a>

        </div>
      </main>

      <Footer />
    </div>
  </>
  )
}
