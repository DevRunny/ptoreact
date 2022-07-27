import classNames from "classnames"
import React from "react"
import style from "./TimeCard.module.css"

interface ITimeCard {
  time: string
  isActive: boolean
  onClickCard: (time: string) => void
}

const TimeCard: React.FC<ITimeCard> = ({time, isActive, onClickCard}) => {
 return (
  <div 
    className={isActive ? classNames(style.timeCard, style.timeCardActive) : style.timeCard} 
    onClick={() => {
      onClickCard(time)
  }}>
    <h3>{time}</h3>
    <div className={style.cardSide} />
  </div>
 )
}

export default TimeCard