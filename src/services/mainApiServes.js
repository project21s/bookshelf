import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/**
 * Получить конфиг с техническим статусом приложения
 * @returns
 */
export const getAppConf = async () => {
  const docSnap = await getDoc(doc(db, "tools", "conf"));
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
};

/**
 * Добавить в список подозрительных пользователей
 * @param uid id пользователя
 */
export const addSuspectUser = async (uid) => {
  const docSnap = await getDoc(doc(db, "tools", "conf"));

  let tempArr = docSnap.data().suspectUser;
  tempArr.push({ id: uid, date: Date() });
  await updateDoc(doc(db, "tools", "conf"), {
    suspectUser: tempArr,
  });
};
