import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updatePassword,
  signOut,
} from "firebase/auth";

import { createUserData, getUserData } from "./userApiServes"

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// регистрация нового пользователя
export const createUser = async (email, password) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user;
    await createUserData(user.uid, email);
    console.log("user done");
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  };
};

// выполнить вход
export const logIn = async (email, password) => {
  try {
    let userCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user;
    console.log(user);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  }
};

export const logOut = () => {
  return signOut(auth)
};

// статус авторизации
export const userStatus = async () => {
  let user = await new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("log-", uid);
        resolve(user);
      } else {
        resolve(null);
        console.log("log-out");
      }
    });
  })
  if (user) {
    let userData = await getUserData(user.uid)
    return userData;
  }
};

// сбросить пароль
export const resetPassword = (newPassword) => {
  let user = auth.currentUser;
  updatePassword(user, newPassword)
    .then(() => {
      console.log(" Update successful.");
    })
    .catch((error) => {
      console.log("erroe", error);
    });
};
