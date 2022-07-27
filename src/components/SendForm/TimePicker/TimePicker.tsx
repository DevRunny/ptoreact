import React, {useState} from 'react';
import style from "./TimePicker.module.css"
import Button from "../../Button/Button";
import TimeCard from './TimeCard/TimeCard';

interface ITimePicker {
  onChange: (time: string) => void
  isOpen: boolean
  selectedTime: string
}

const mockTimeDate = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"]

const TimePicker: React.FC<ITimePicker> = ({onChange, isOpen, selectedTime}) => {

  const [currentSelectedTime, setCurrentSelectedTime] = useState<string>(selectedTime)

  if (!isOpen) return <></>

  return (
      <div className={style.timePicker}>
        <h2>Выберите доступное время</h2>
        <div className={style.wrapTimeCards}>
          <div className={style.timeCards}>
            {mockTimeDate.map(time => {
              return <TimeCard onClickCard={setCurrentSelectedTime} time={time} isActive={time === currentSelectedTime}/>
            })}
          </div>
        </div>
        <div className={style.timePickerButtons}>
          <Button text={"Отмена"} mainStyle={style.timePickerButton} type={"button"} func={() => {
            onChange(selectedTime)
          }} />
          <Button text={"Ок"} mainStyle={style.timePickerButton} type={"button"} func={() => {
            onChange(currentSelectedTime)
          }} />
        </div>
      </div>
  );
};

export default TimePicker;
