import { db } from './firebase.js';
import { collection, getDocs } from 'firebase/firestore';

export const fetchData = async (Tb) => {
    const querySnapshot = await getDocs(collection(db, Tb));
    const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return items;
};
