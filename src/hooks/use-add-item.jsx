import { ref, push } from 'firebase/database';
import { db } from '../firebase';

export const useAddItem = () => {
  return () => {
    const todoTitle = prompt('What would you like to add to your to-do list ?');

    if (todoTitle) {
      const todoListDbRef = ref(db, 'todos');

      push(todoListDbRef, {title: todoTitle})
        .then((addedItem) => {
            console.log('addedItem', addedItem);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
};
