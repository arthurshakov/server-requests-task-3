import { ref, set } from 'firebase/database';
import { db } from '../firebase';

export const useChangeItem = () => {
  return (id) => {
    const todoTitle = prompt('How would you like it to be named ?');

    if (todoTitle) {
      const itemDbRef = ref(db, `todos/${id}`);

      set(itemDbRef, { id, title: todoTitle })
        .then((changedItem) => {
            console.log('changedItem', changedItem);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
};
