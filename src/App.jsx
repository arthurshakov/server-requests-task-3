// 3. Также дополнительно — сделать приложение из второго пункта, но с использованием Firebase (без использования JSON Server):

// DONE!!! зарегистрироваться на платформе Firebase;
// DONE!!! создать базу данных и использовать её в приложении;
// DONE!!! выполнить deploy и проверить работу приложения.

// Обратите внимание!

// Firebase не очень удобен для реализации поиска и сортировки, поэтому данный функционал можно реализовать не на серверной стороне, а на клиентской.

// Однако при желании вы все же можете реализовать сортировку с помощью Firebase, для этого обратитесь к этой странице в документации (orderByChild()). Обратите внимание:

// DONE!!! для работы необходимо в Realtime Database Security Rules добавить настройку .indexOn с ключами, по которым будет происходить сортировка (документация);
// для получения элементов можно воспользоваться функцией get(), в нее передаем query() с необходимой сортировкой;
// получение объекта с элементами с помощью snapshot.val() не гарантирует порядок сортировки, поэтому для перебора элементов в порядке сортировки используйте метод snapshot.forEach();
// сортировка регистрозависима.
import { useState } from 'react';
import styles from './app.module.css';
import {
  useGetItems,
  useAddItem,
  useChangeItem,
  useDeleteItem,
  useDebounce,
  useSortItems,
} from './hooks/index';

const AppLayout = ({
  todoList,
  isLoading,
  addItem,
  deleteItem,
  changeItem,
  // toggleSort,
  // sort,
  // query,
  // setQuery,
}) => {
  return (
    <div className={styles.app}>
      <h1>To-do list</h1>

      {/* <input
        type="text"
        placeholder="Type to search..."
        value={query}
        className={styles.input}
        onChange={({target}) => setQuery(target.value)}
      /> */}

      {isLoading ?
        <div className={styles.spinner}></div>
        :
        <ul className={styles['todo-list']}>
          {
            Object.entries(todoList).map(([id, { title }]) => (
              <li className={styles['todo-list__item']} key={id}>
                <span>{title}</span>
                <div className={styles.button__container}>
                  <button
                    type="button"
                    className={`${styles.button} ${styles['button--change']}`}
                    onClick={() => changeItem(id)}
                    disabled={isLoading}
                  >Изменить</button>

                  <button
                    type="button"
                    className={`${styles.button} ${styles['button--delete']}`}
                    onClick={() => deleteItem(id)}
                    disabled={isLoading}
                  >Удалить</button>
                </div>
              </li>
            ))
          }
        </ul>
      }

      <div className={styles.button__container}>
        <button
          type="button"
          className={styles.button}
          onClick={addItem}
          disabled={isLoading}
        >Add a to-do item</button>

        {/* <button
          type="button"
          className={styles.button}
          onClick={toggleSort}
          disabled={isLoading}
        >
          {sort === '' ? 'Sort items' : 'Turn sorting off'}
        </button> */}
      </div>
    </div>
  )
};

export const AppContainer = () => {
  const [todoList, setTodoList] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // const [refreshFlag, setRefreshFlag] = useState(false);
  // const [sort, setSort] = useState(false);
  // const [query, setQuery] = useState('');

  // const debouncedQuery = useDebounce(query, 300, () => setRefreshFlag(!refreshFlag)); // 300ms delay

  // const getItems = useGetItems(setTodoList, setIsLoading, sort);
  const getItems = useGetItems(setTodoList, setIsLoading);

  const addItem = useAddItem();

  const changeItem = useChangeItem();

  const deleteItem = useDeleteItem();

  // const toggleSort = () => {
  //   const newSort = !sort;
  //   setSort(newSort);
  //   getItems();
  //   // setRefreshFlag(!refreshFlag);
  // }

  return <AppLayout
    todoList={todoList}
    isLoading={isLoading}
    addItem={addItem}
    changeItem={changeItem}
    deleteItem={deleteItem}
    // query={query}
    // setQuery={setQuery}
    // sort={sort}
    // toggleSort={toggleSort}
  />;
};
