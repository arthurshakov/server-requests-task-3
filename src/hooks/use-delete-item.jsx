import { ref, remove } from 'firebase/database';
import { db } from '../firebase';

export const useDeleteItem = () => {
  return (id) => {
    const itemDbRef = ref(db, `todos/${id}`);

    remove(itemDbRef)
      .then((response) => {
        console.log('response on delete', response);
      })
      .catch(error => {
        console.log(error);
      })
  }
};
