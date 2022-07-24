import styles from './styles.module.scss'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'
import ActiveLink from '../ActiveLink'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo}></img>
      </div>
      <nav>
      <ActiveLink>
        <Link to="/">Favoritos</Link>
      </ActiveLink>
      <ActiveLink>
        <Link to="/search">Procurar</Link>
      </ActiveLink>
      <ActiveLink>
        <Link to="/todos">Ver todos</Link>
      </ActiveLink>
      </nav>
    </div>
  )
}

export default Header
