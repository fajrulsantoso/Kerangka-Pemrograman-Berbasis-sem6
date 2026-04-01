import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "./firebase"; // ✅ pakai db

export async function retrieveProducts(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function retrieveDataByID(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(db, collectionName, id));
  return snapshot.data();
}