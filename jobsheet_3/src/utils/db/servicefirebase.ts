import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  addDoc,
  where,
} from "firebase/firestore";
import { db } from "./firebase";
import bcrypt from "bcrypt";

export async function retrieveProducts(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function fetchDataByID(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(db, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function signUp(
  userData: {
    email: string;
    fullname: string;
    password: string;
  },
  callback: Function
) {
  // Cek apakah user sudah ada
  const q = query(
    collection(db, "users"),
    where("email", "==", userData.email)
  );
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length === 0) {
    // user belum ada → boleh daftar
    try {
      // Hash password
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      
      // Simpan user ke database
      const userWithRole = {
        email: userData.email,
        fullname: userData.fullname,
        password: hashedPassword,
        role: "user",
        createdAt: new Date().toISOString(),
      };
      
      await addDoc(collection(db, "users"), userWithRole);
      
      callback({
        status: "success",
        message: "User registered successfully",
      });
    } catch (error: any) {
      callback({
        status: "error",
        message: error.message,
      });
    }
  } else {
    // user sudah ada → tidak boleh daftar
    callback({
      status: "error",
      message: "User already exists",
    });
  }
}