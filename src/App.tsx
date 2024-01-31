import { useState } from 'react'

import { Header } from './components/Header'
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar'

import {
  CheckCircle,
  XCircle,
  Warning,
  Info,
  BellRinging
} from 'phosphor-react'

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
  const [toastNotifyTypeSuccessShow, setToastNotifyTypeSuccessShow] =
    useState(false)

  const [toastNotifyTypeDangerShow, setToastNotifyTypeDangerShow] =
    useState(false)

  const [toastNotifyTypeWarningShow, setToastNotifyTypeWaringShow] =
    useState(false)

  const [toastNotifyTypeInformationShow, setToastNotifyTypeInformationShow] =
    useState(false)

  const [toastNotifyTypeDefaultShow, setToastNotifyTypeDefaultShow] =
    useState(false)

  const [toastNotifyText, setToastNotifyText] = useState('')

  function toastNotifyShow(toastType: string, toastText: string) {
    switch (toastType) {
      case 'success':
        setToastNotifyTypeSuccessShow(true)
        break
      case 'danger':
        setToastNotifyTypeDangerShow(true)
        break
      case 'warning':
        setToastNotifyTypeWaringShow(true)
        break
      case 'info':
        setToastNotifyTypeInformationShow(true)
        break
      default:
        setToastNotifyTypeDefaultShow(true)
    }

    setToastNotifyText(toastText)

    setTimeout(() => {
      setToastNotifyTypeSuccessShow(false)
      setToastNotifyTypeDangerShow(false)
      setToastNotifyTypeWaringShow(false)
      setToastNotifyTypeInformationShow(false)
      setToastNotifyTypeDefaultShow(false)
      setToastNotifyText('')
    }, 3000)
  }
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
                userLoged={userLoged}
                onToastNotify={toastNotifyShow}
              />
            )
          })}
        </main>
      </div>

      <div
        className={`${styles.toast} ${
          toastNotifyTypeDefaultShow ? styles.show : styles.close
        }`}
        id="toast"
      >
        <div>
          <strong>Notificação!</strong>
          <p>{toastNotifyText}</p>
        </div>
        <BellRinging size={30} />
      </div>

      <div
        className={`${styles.success} ${styles.toast} ${
          toastNotifyTypeSuccessShow ? styles.show : styles.close
        }`}
        id="toast"
      >
        <div>
          <strong>Sucesso!</strong>
          <p>{toastNotifyText}</p>
        </div>
        <CheckCircle size={30} />
      </div>

      <div
        className={`${styles.danger} ${styles.toast} ${
          toastNotifyTypeDangerShow ? styles.show : styles.close
        }`}
        id="toast"
      >
        <div>
          <strong>Erro!</strong>
          <p>{toastNotifyText}</p>
        </div>
        <XCircle size={30} />
      </div>

      <div
        className={`${styles.warning} ${styles.toast} ${
          toastNotifyTypeWarningShow ? styles.show : styles.close
        }`}
        id="toast"
      >
        <div>
          <strong>Atenção!</strong>
          <p>{toastNotifyText}</p>
        </div>
        <Warning size={30} />
      </div>

      <div
        className={`${styles.info} ${styles.toast} ${
          toastNotifyTypeInformationShow ? styles.show : styles.close
        } `}
        id="toast"
      >
        <div>
          <strong>Informação!</strong>
          <p>{toastNotifyText}</p>
        </div>
        <Info size={30} />
      </div>
    </div>
  )
}
