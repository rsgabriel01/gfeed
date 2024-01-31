import { Avatar } from './Avatar'

import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

interface SidebarProps {
  onShowToastNotification: (toastType: string, toastText: string) => void
}

export function Sidebar({ onShowToastNotification }: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1532292060982-8bfb986808e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/rsgabriel01.png" />
        <strong>Gabriel Rodrigues</strong>
        <span>Analista Desenvolvedor @Aliare</span>
      </div>

      <footer>
        <a
          href="#"
          onClick={() =>
            onShowToastNotification(
              'info',
              'Desculpe essa rotina ainda não foi implementada. Em breve estará disponivel!'
            )
          }
        >
          <PencilLine size={20} /> Editar perfil
        </a>
      </footer>
    </aside>
  )
}
