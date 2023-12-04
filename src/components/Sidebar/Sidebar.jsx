import styles from './Sidebar.module.css';

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1701111098056-9de8cb79bf7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NHx8fGVufDB8fHx8fA%3D%3D" 
            />
            <div className={styles.profile}>
                <strong>Wagnetto</strong>
                <span>Front-end developer</span>
            </div>
            <footer>
                <a href="#">Editar seu perfil</a>
            </footer>
        </aside>
    );
}