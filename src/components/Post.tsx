import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './Post.module.css'
import { UserType } from '../App'

interface Author {
  name: string
  role: string
  avatarUrl: string
}

interface Content {
  type: 'paragraph' | 'link'
  content: string
  title?: string
}

export interface PostType {
  id: number
  author: Author
  publishedAt: Date
  content: Content[]
}

interface PostProps {
  post: PostType
  userLoged: UserType
}

export interface CommentType {
  idPost: number
  author: UserType
  text: string
  publishedAt: Date
}

const commentsJson: CommentType[] = [
  {
    idPost: 1,
    author: {
      id: 2,
      name: 'Diego Fernandes',
      avatarUrl: 'https://github.com/diego3g.png',
      role: 'CTO @Rocketseat'
    },
    text: 'Post muito bacana!',
    publishedAt: new Date('2024-01-29 20:00:00')
  }
]

export function Post({ post, userLoged }: PostProps) {
  const [comments, setComments] = useState(commentsJson)

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(
    post.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR
    }
  )

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    const dateNow: Date = new Date()

    const dayToday: number = dateNow.getDate()
    const monthToday: number = dateNow.getMonth() + 1
    const yearToday: number = dateNow.getFullYear()
    const hoursToday: number = dateNow.getHours()
    const minutesToday: number = dateNow.getMinutes()
    const secondsToday: number = dateNow.getSeconds()

    const commentPublishedAtString: string = `${yearToday}-${monthToday}-${dayToday} ${hoursToday}:${minutesToday}:${secondsToday}`

    const commentPublishedAt = new Date(commentPublishedAtString)

    const newCommentObject: CommentType = {
      idPost: post.id,
      author: userLoged,
      text: newCommentText,
      publishedAt: commentPublishedAt
    }

    console.log(newCommentObject)

    setComments([...comments, newCommentObject])

    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')

    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment(commentToDelete: CommentType) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map(contentIterator => {
          if (contentIterator.type === 'paragraph') {
            return (
              <p key={contentIterator.content}>{contentIterator.content}</p>
            )
          } else if (contentIterator.type === 'link') {
            return (
              <p key={contentIterator.content}>
                <a href={contentIterator.content} target="_blank">
                  {contentIterator.title}
                </a>
              </p>
            )
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          if (comment.idPost === post.id) {
            return (
              <Comment
                key={comment.text}
                comment={comment}
                onDeleteComment={deleteComment}
              />
            )
          }
        })}
      </div>
    </article>
  )
}
