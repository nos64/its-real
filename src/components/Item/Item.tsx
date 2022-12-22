import React, { useEffect, useState } from 'react';
import declOfNum from '../../utils/declOfNum';
import styles from './Item.module.css';

interface IItemProps {
  id: number;
  time: number;
  filteredList: (id: number) => void;
}
const Item: React.FC<IItemProps> = (props) => {
  const [timer, setTimer] = useState(0);
  const [seconds, setSeconds] = useState('');
  

  useEffect(() => {
    setTimer(props.time);
    setSeconds(declOfNum(props.time, ['секунда', 'секунды', 'секунд']))
  }, []);

  const tick = () => {
    timer > 1 ? setTimer(timer - 1) : props.filteredList(props.id);
    setSeconds(declOfNum(timer-1, ['секунда', 'секунды', 'секунд']))
  };

  useEffect(() => {
    if (timer > 0) {
      const timerID = setInterval(() => tick(), 1000);
      return () => clearInterval(timerID);
    }
  });

  return <><span>Исчезнет через</span> <span className={styles.timer}>{seconds}</span></>;
};

export default Item;