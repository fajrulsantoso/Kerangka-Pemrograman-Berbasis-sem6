import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function getData() {
  const snapshot = await getDocs(collection(db, "products"));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}