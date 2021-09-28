import { FirebaseApp } from '@firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

export const useFirestore = async (firebaseApp: FirebaseApp, path: string) => {
  const db = getFirestore(firebaseApp);
  const colData = collection(db, path);
  const dataDocs = await getDocs(colData);
  const docsDataList = dataDocs.docs.map((doc) => doc.data());
  return [docsDataList];
};
