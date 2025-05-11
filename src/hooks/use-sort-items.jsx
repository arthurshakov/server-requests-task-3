import { ref, get } from 'firebase/database';
import { db } from '../firebase';

export const useSortItems = (setTodoList, setIsLoading, sort = false) => {
  return () => {
    if (todoTitle) {
      const todoListDbRef = ref(db, 'todos');

      get(todoListDbRef)
        .then((addedItem) => {
            console.log('addedItem', addedItem);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
};
