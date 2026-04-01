import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

// ambil semua produk
export async function retrieveProducts(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));

  return snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  }));
}

// ambil produk berdasarkan ID
export async function retrieveDataByID(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(db, collectionName, id));

  if (!snapshot.exists()) return null;

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
}