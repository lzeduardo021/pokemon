import React from 'react'
import styles from './styles.module.scss'
import img from '../../assets/img/pikachu.png'
import { MdFavoriteBorder } from 'react-icons/all'

export const Card = ({ data }) => {
  return (
    <div className={styles.cardContainer}>
      {data.map(item => {
        return (
          <div className={styles.card} key={item.id}>
            {item.title}
            <div className={styles.icons}>
              <MdFavoriteBorder />
            </div>
            <img src={img} />
            <p>ID: 101</p>
            <div></div>
          </div>
        )
      })}
    </div>
  )
}
export default Card
