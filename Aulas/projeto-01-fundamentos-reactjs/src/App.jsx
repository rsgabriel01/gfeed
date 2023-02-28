import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Gabriel Rodrigues"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quis veniam provident exercitationem dolorum molestias fuga? Id consectetur culpa, doloremque minima sed voluptatem totam. Deserunt dicta accusamus quam repellendus eligendi?"
          />
          <Post author="José da Silva" content="Um novo post?" />
        </main>
      </div>
    </div>
  )
}
