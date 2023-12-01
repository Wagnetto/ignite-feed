import { Post } from "./Post"
import { Header } from "./components/Header/Header";
import './global.css';

export function App() {

  return (
    <>
    <Header />
      <Post 
        author="Mano Deivin" 
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit pariatur esse necessitatibus accusantium! Aliquam atque eum repudiandae numquam neque sed eveniet corrupti, porro ea dolores. Nulla repellat neque eius sapiente." 
      />
      <Post author="Fulano" content="Só queria postar" />       
    </>
  )
}

