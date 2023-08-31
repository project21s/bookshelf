import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Resizer from "react-image-file-resizer";

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

/**
 * Изменение размера изображения
 * @param {*} file исходное изображение
 * @returns промис с новым изображением
 */
const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      300,
      300,
      "PNG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "file"
    );
  });

// сохранить обложку книги в бд
export const uploadBookImg = async (file, id) => {
  const storageRef = ref(storage, `images/${id}.png`);
  const image = await resizeFile(file);
  let snapshot = await uploadBytes(storageRef, image);
  console.log("Uploaded a blob or file!", snapshot);
  let url = await getDownloadURL(storageRef);
  return url;
};
