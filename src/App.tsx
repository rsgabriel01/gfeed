import { Header } from './components/Header'
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar'
import { CheckCircle } from 'phosphor-react'

import styles from './App.module.css'

import './global.css'

export interface UserType {
  id: number
  name: string
  avatarUrl: string
  role: string
}

const userLoged: UserType = {
  id: 1,
  name: 'Gabriel Rodrigues',
  avatarUrl: 'https://github.com/rsgabriel01.png',
  role: 'Analista Desenvolvedor @Aliare'
}

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/rsgabriel01.png',
      name: 'Gabriel Rodrigues',
      role: 'Analista Desenvolvedor @Aliare'
    },
    content: [
      { type: 'paragraph', content: 'Muito bom dia meu povo 👋', title: '' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no primeiro modulo do Ignite, curso da Rocketseat. O nome do projeto é G-feed 🚀',
        title: ''
      },
      {
        type: 'link',
        content: 'https://github.com/rsgabriel01/gfeed',
        title: 'github.com/rsgabriel01/gfeed'
      }
    ],
    publishedAt: new Date('2024-01-29 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋', title: '' },
      {
        type: 'paragraph',
        content:
          'Mais um projeto concluído, esse eu fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
        title: ''
      },
      {
        type: 'link',
        content: 'https://otaldohub.com/doctorcare',
        title: 'otaldohub.com/doctorcare'
      }
    ],
    publishedAt: new Date('2024-01-22 20:00:00')
  }
]

export function App() {
  // setTimeout(() => {
  //   document.getElementById('toast')!.animate([
  //     { transform: 'translateY(0px)' },
  //     { transform: 'translateY(-300px)' },
  //     {
  //       duration: 3000,
  //       iterarion: 1
  //     }
  //   ])
  // }, 3000)

  setTimeout(() => {
    document.getElementById('toast')!.style.display = 'none'
  }, 2000)
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return <Post key={post.id} post={post} userLoged={userLoged} />
          })}
        </main>
      </div>

      <div className={`${styles.toast} ${styles.show}`} id="toast">
        <div>
          <strong>Successo!</strong>
          <p>Comentario deletado.</p>
        </div>
        <CheckCircle size={30} />
      </div>
    </div>
  )
}
