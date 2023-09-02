import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { getFirestore, doc, getDoc } from "firebase/firestore";

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
