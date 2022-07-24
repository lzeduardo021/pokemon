import React from 'react'
import Layout from '../../components/Layout'
import styles from './styles.module.scss'
import { BiSearchAlt2 } from 'react-icons/all'
import Card from '../../components/Card'

const pokemons = [
  { id: 1, title: 'Pikachu' },
  { id: 2, title: 'Raichu' },
  { id: 3, title: 'PItico cachorro' },
  { id: 4, title: 'Pikachu' },
  { id: 5, title: 'Raichu' },
  { id: 6, title: 'PItico cachorro' },
  { id: 3, title: 'PItico cachorro' },
  { id: 4, title: 'Pikachu' },
  { id: 1, title: 'Pikachu' },
  { id: 2, title: 'Raichu' },

  { id: 5, title: 'Raichu' }
]

const Search = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.containerSearch}>
          <div className={styles.search}>
            <input type="text" placeholder="Procure por Pokémon" />
            <BiSearchAlt2 className={styles.icons} fontSize={'1.5rem'} />
          </div>

          <div className={styles.content}>
            <Card data={pokemons} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Search
