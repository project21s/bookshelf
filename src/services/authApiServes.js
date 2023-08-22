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

import { createUserData, getUserData } from "./userApiServes";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export let userData;

// регистрация нового пользователя
export const createUser = async (email, password) => {
  const answer = {};
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await createUserData(user.uid, email);
    userData = await getUserData(user.uid);
    answer.user = userData;
    console.log("user done");
  } catch (error) {
    answer.error = error;
  } finally {
    return answer;
  }
};

// выполнить вход
export const logIn = async (email, password) => {
  const answer = {};
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    userData = await getUserData(user.uid);
    answer.user = userData;
  } catch (error) {
    answer.error = error;
  } finally {
    return answer;
  }
};

export const logOut = () => {
  return signOut(auth);
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
  });
  if (user) {
    userData = await getUserData(user.uid);
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
