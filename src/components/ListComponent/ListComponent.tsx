import React, { useEffect, useState } from 'react';
import Item from '../Item';
import getRandomTime from '../../utils/getRandomTime';
import styles from './ListComponent.module.css';

interface IlistItem {
  id: number;
  time: number;
}

const ListComponent = () => {
  const [idNumber, setIdNumber] = useState(0);
  const [listItem, setListItem] = useState<IlistItem[]>([]);

  const handleButtonClick = () => {
    setListItem([...listItem, { id: idNumber, time: getRandomTime(10, 30) }]);
    setIdNumber(idNumber + 1);
  };
  const filteredList = (id: number) => {
    const filteredArray = listItem.filter((elem) => elem.id !== id);
    setListItem(filteredArray);
  };

  useEffect(() => {
    setListItem(listItem);
  }, [listItem]);

  return (
    <>
      <button type="button" onClick={handleButtonClick}>
        Добавить
      </button>
      <ul className={styles.timer__list}>
        {listItem &&
          listItem.map((item, index) => (
            <li className={styles.timer__item} key={item.id}>
              <div className={styles.timer__itemNumber}>{index + 1}.</div>{' '}
              <Item id={item.id} time={item.time} filteredList={filteredList} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default ListComponent;
