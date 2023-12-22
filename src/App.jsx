import './global.css';

import styles from './App.module.css';
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Mano Deivin"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit pariatur esse necessitatibus accusantium! Aliquam atque eum repudiandae numquam neque sed eveniet corrupti, porro ea dolores. Nulla repellat neque eius sapiente."
          />
          <Post author="Fulano" content="Só queria postar" />
        </main>
      </div>
    </>
  );
}
