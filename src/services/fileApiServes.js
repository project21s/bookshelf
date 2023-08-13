import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


// сохранить обложку книги в бд
export const uploadBookImg = async (file, id) => {
  const storageRef = ref(storage, `images/${id}.png`);

  let snapshot = await uploadBytes(storageRef, file);
  console.log('Uploaded a blob or file!', snapshot);
  let url = await getDownloadURL(storageRef);
  return url;
}
