import { Navigate, Outlet } from 'react-router-dom'
import styles from "./style.module.css"

export function Template(isUserLogged) {

    return isUserLogged ? (
        <>
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <img src="/logo.png" alt="Ativa 365" />

                    <div className={styles.contentRight}>
                       <div className={styles.containerAvatar}>
                            {/*<Link to="/home/profile">
                                <Avatar src="logo.png" variant="rounded" />
                            </Link>*/}
                            <span>Usuario</span>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    ) : <Navigate to="/" />
}