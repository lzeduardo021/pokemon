import React from 'react'
import Layout from '../../components/Layout'
import styles from './styles.module.scss'
import image from '../../assets/img/astro.png'

const Home = () => {
  return (
    <Layout>
       <div className={styles.container}>
         <img src={image}></img>
         <div className={styles.conteudo}>
         <p className={styles.title}>Está meio vazio por aqui!</p>
         <p className={styles.subtitle}>
          Procure por pokémon para adicioná-los ao seus Favoritos
         </p>
         </div>
         <button>Procurar Pokémons</button>
       </div>
    </Layout>
  )
}

export default Home
