import styles from './Post.module.css';


export function Post(){
    return <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <img className={styles.avatar} src='https://github.com/Wagnetto.png' />
                <div className={styles.authorInfo}>
                    <strong>Wagner Souto</strong>
                    <span>Web Developer</span>
                </div>
            </div>
            <time title='8 de dezembro às 10:30' dateTime='2023-12-8 10:30'>Publicado há 1h</time>
        </header>

        <div className={styles.content}>
            <p>Fala, galera!</p>
            <p>Acabei de subir mais um commit no meu projjeto</p>
            <p>👉<a href='#'> Click the bait</a></p>
            <p>
                <a href='#'>#novo </a>
                <a href='#'>#projeto </a>
                <a href='#'>#rocketseat </a>
            </p>
        </div>
    </article>
}