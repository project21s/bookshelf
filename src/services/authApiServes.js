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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// регистрация нового пользователя
export const createUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};

// выполнить вход
export const logIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};

export const logOut = () => {
  signOut(auth)
    .then(() => {
      console.log(" successful.");
    })
    .catch((error) => {
      // An error happened.
    });
};

// статус авторизации
export const userStatus = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log("log-", uid);
      return user;
    } else {
      console.log("log-out");
    }
  });
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
