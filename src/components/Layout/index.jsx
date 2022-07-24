import Header from "../Header";
import styles from "./styles.module.scss"

const Layout = ({children}) => {
  return (
    <>
     <Header/>
     <div className={styles.content}>
     {children} 
     </div>
    </>
  )
}

export default Layout;