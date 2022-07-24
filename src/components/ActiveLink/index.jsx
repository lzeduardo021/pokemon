import {useLocation} from 'react-router-dom';
import styles from './styles.module.scss';

const ActiveLink = ({children}) => {
  const location = useLocation();
  const linkActive = location.pathname === children.props.to;

  return (
    <div className={`${linkActive ? styles.active : ''}`}>
      {children}
    </div>
  )
}

export default ActiveLink