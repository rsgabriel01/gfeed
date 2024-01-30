import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

import { Avatar } from './Avatar'
import { CommentType } from './Post'

interface CommentProps {
  comment: CommentType
  onDeleteComment: (comment: CommentType) => void
}

export function Comment({ comment, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  const publishedDateFormatted = format(
    comment.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR
    }
  )

  const publishedDateRelativeToNow = formatDistanceToNow(comment.publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleDeleteComment() {
    onDeleteComment(comment)
  }
  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={comment.author.avatarUrl} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{comment.author.name}</strong>
              <time
                title={publishedDateFormatted}
                dateTime={comment.publishedAt.toISOString()}
              >
                {publishedDateRelativeToNow}
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{comment.text}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
