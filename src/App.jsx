import './global.css';

import styles from './App.module.css';
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego 3g',
      role: 'noooob @ Github',
    },
    content: [
      { type: 'paragraph', content: 'Fala aeh' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no portfolio. Passem lá pra dar uma moral',
      },
      { type: 'link', content: 'chuchu.beleza/nonsense_projects' },
    ],
    publishedAt: new Date('2023-12-26 20:40:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @ RocketSeat',
    },
    content: [
      { type: 'paragraph', content: 'Fala, galera' },
      {
        type: 'paragraph',
        content:
          'Ansioso para ver os projetos do curso saindo. Comentem seus links aí',
      },
      { type: 'link', content: 'repo.curso/nonsense_projects' },
    ],
    publishedAt: new Date('2023-12-26 20:00:00'),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
