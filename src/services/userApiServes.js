import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// создать профиль пользователя в бд
export const createUserData = async (id, email) => {
  let [nickname] = email.split("@")
  try {
    await setDoc(doc(db, "users", id), {
      id: id,
      nickname: nickname,
      email: email,
      role: "reader",
      books: {
        favorite: [],
        read: [],
      }
    });
  } catch (e) {
    console.log(e)
  }
}

// получить профиль пользователя из бд
export const getUserData = async (id) => {
  const docSnap = await getDoc(doc(db, "users", id));
  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    console.log("No such document!");
  }
}
