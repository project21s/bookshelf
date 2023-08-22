import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import {
  getFirestore,
  setDoc,
  doc,
  getDoc,
  collection,
  addDoc,
  updateDoc,
  getDocs,
} from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addFeedback = async (text) => {
  let feedback = {};
  try {
    let date = new Date();
    const docRef = await addDoc(collection(db, "feedback"), {
      date: date,
      text: text,
      status: "open",
    });

    feedback.status = "ok";
  } catch (e) {
    feedback.status = "error";
    feedback.error = e;
    console.log(e);
  } finally {
    return feedback;
  }
};
