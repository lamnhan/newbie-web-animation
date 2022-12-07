import styles from './Home.module.scss'

import Emojis from '../components/Emojis/index'
import NeonLight from '../components/NeonLight/index'
import Logos from '../components/Logos/index'

export default function Home() {
  return (
    <div className={styles.page}>

      <div className={styles.container}>

        <section id="emojis">
          <h3>Example 1: Emojis</h3>
          <p>Transform oriented (position, size, rotation, ...).</p>
          <Emojis/>
        </section>
    
        <section id="neon-light">
          <h3>Example 2: Neon Light</h3>
          <p>Presentation oriented (color, shadow, opacity, ...).</p>
          <NeonLight/>
        </section>
    
        <section id="logos">
          <h3>Example 3: Logos</h3>
          <p>More advance and interactive.</p>
          <Logos/>
        </section>

      </div>

    </div>
  )
}
