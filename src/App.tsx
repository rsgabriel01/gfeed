import { Header } from './components/Header'
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

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
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no primeiro modulo do Ignite, curso da Rocketseat. O nome do projeto é G-feed 🚀',
        title: ''
      },
      {
        type: 'link',
        content: 'https://github.com/rsgabriel01/gfeed',
        title: 'github.com/rsgabriel01/gfeed'
      }
    ],
    publishedAt: new Date('2023-11-24 20:00:00')
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
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
        title: ''
      },
      {
        type: 'link',
        content: 'https://otaldohub.com/doctorcare',
        title: 'otaldohub.com/doctorcare'
      }
    ],
    publishedAt: new Date('2023-03-10 20:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return <Post key={post.id} post={post} />
          })}
        </main>
      </div>
    </div>
  )
}
