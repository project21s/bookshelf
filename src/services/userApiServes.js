import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import {
  getFirestore,
  setDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import { addSuspectUser } from "./mainApiServes";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// создать профиль пользователя в бд
export const createUserData = async (id, email) => {
  let [nickname, domen] = email.split("@");
  let verified = true;
  if (domen !== "student.21-school.ru") {
    verified = false;
    await addSuspectUser(id);
  }
  try {
    await setDoc(doc(db, "users", id), {
      id: id,
      nickname: nickname,
      email: email,
      role: "reader",
      isVerified: verified,
      isEmailVerified: false,
      books: {
        favorite: [],
        read: [],
      },
    });
  } catch (e) {
    console.log(e);
  }
};

// получить профиль пользователя из бд
export const getUserData = async (id) => {
  const docSnap = await getDoc(doc(db, "users", id));
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
};

export const updEmailVarifiedStatus = async (user) => {
  const docRefUser = doc(db, "users", user.uid);
  await updateDoc(docRefUser, {
    isEmailVerified: true,
  });
};

export const addToFavorite = async (user, book) => {
  console.log("atFavorite");
  console.log(user);
  console.log(book);
  const docRefUser = doc(db, "users", user.id);
  if (user.books.favorite.filter((b) => b.id === book.id).length === 0) {
    user.books.favorite.push({
      id: book.id,
    });
  }
  await updateDoc(docRefUser, {
    books: user.books,
  });
};

export const delFromFavorite = async (user, book) => {
  console.log("delFavorite");
  console.log(user);
  console.log(book);
  const docRefUser = doc(db, "users", user.id);
  user.books.favorite = user.books.favorite.filter((b) => b.id !== book.id);
  await updateDoc(docRefUser, {
    books: user.books,
  });
};
