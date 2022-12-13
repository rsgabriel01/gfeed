import { Post } from './Post'

export function App() {
  return (
    <div>
      <Post
        author="Gabriel Rodrigues"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quis veniam provident exercitationem dolorum molestias fuga? Id consectetur culpa, doloremque minima sed voluptatem totam. Deserunt dicta accusamus quam repellendus eligendi?"
      />
      <Post author="José da Silva" content="Um novo post?" />
    </div>
  )
}
