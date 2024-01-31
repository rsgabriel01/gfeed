import { useState } from 'react'

import styles from './ToastNotify.module.css'

import {
  CheckCircle,
  XCircle,
  Warning,
  Info,
  BellRinging
} from 'phosphor-react'

interface ToastNotifyProps {
  showToastNotifyType: string
  toastNotifyText: string
  showToastNotify: boolean
}

export function ToastNotify({
  toastNotifyType,
  toastNotifyText,
  showToastNotify
}: ToastNotifyProps) {
  }
  const [toastNotifyShow, setToastNotifyShow] useState(false)
  return (
    <div
      className={`${styles.success} ${styles.toast} ${
        showToastNotify
          ? styles.show
          : toastNotifyType
          ? styles.show
          : toastNotifyType
          ? styles.show
          : toastNotifyType
          ? styles.show
          : toastNotifyType
          ? styles.show
          : styles.close
      }`}
      id="toast"
    >
      <div>
        <strong>{toastNotifyTitle}</strong>
        <p>{toastNotifyText}</p>
      </div>
      <CheckCircle size={30} />
    </div>
  )
}
