import { useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';

export const useGetItems = (setTodoList, setIsLoading, sort = false) => {
  useEffect(() => {

    setIsLoading && setIsLoading(true);

    const todoListDbRef = ref(db, 'todos');

    // const q = query(todoListDbRef, orderByChild("title"));

    // return onValue(q, (snapshot) => {
    //   let newList = {}

    //   snapshot.forEach((childSnapshot) => {
    //     console.log(childSnapshot.key, childSnapshot.val());
    //     newList[childSnapshot.key] = childSnapshot.val();
    //   });
    //   console.log(newList);
    //   setTodoList(newList || {});

    //   setIsLoading && setIsLoading(false)
    // });

    return onValue(todoListDbRef, (snapshot) => {
      console.log(snapshot.val() || {});
      let finalList = snapshot.val();

      if (sort) {
        finalList = Object.fromEntries(
          Object.entries(finalList).sort((a, b) => a[1].title.localeCompare(b[1].title))
        );
      }

      setTodoList(finalList || {});

      console.log('finalList', finalList);

      setIsLoading && setIsLoading(false)
    });
  }, []);
}
