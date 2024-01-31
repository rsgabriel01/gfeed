import { HTMLAttributes } from 'react'

import styles from './ToastNotify.module.css'

import {
  CheckCircle,
  XCircle,
  Warning,
  Info,
  BellRinging
} from 'phosphor-react'

interface ToastNotifyProps extends HTMLAttributes<HTMLDivElement> {
  toastNotifyType: string
  toastNotifyText: string
  showToastNotify: boolean
}

export function ToastNotify({
  toastNotifyType = 'default',
  toastNotifyText = '',
  showToastNotify = false,
  ...props
}: ToastNotifyProps) {
  return (
    <div
      className={`
        ${
          toastNotifyType === 'success'
            ? styles.success
            : toastNotifyType === 'danger'
            ? styles.danger
            : toastNotifyType === 'warning'
            ? styles.warning
            : toastNotifyType === 'info'
            ? styles.info
            : styles.default
        } ${styles.toast} ${showToastNotify ? styles.show : styles.close}
      `}
      {...props}
    >
      <div className="symbol">
        {toastNotifyType === 'success' ? (
          <CheckCircle size={30} />
        ) : toastNotifyType === 'danger' ? (
          <XCircle size={30} />
        ) : toastNotifyType === 'warning' ? (
          <Warning size={30} />
        ) : toastNotifyType === 'info' ? (
          <Info size={30} />
        ) : (
          <BellRinging size={30} />
        )}
      </div>

      <div>
        <strong>
          {toastNotifyType === 'success'
            ? 'Sucesso!'
            : toastNotifyType === 'danger'
            ? 'Erro!'
            : toastNotifyType === 'warning'
            ? 'Atenção!'
            : toastNotifyType === 'info'
            ? 'Informação!'
            : 'Notificação!'}
        </strong>
        <p>{toastNotifyText}</p>
      </div>
    </div>
  )
}
