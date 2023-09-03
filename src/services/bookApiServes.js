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
import { uploadBookImg } from "./fileApiServes";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let books = [];

// создать книгу в бд
export const createBookData = async (book, user, file) => {
  try {
    // добавляем в базу объект книги
    const docRef = await addDoc(collection(db, "books"), {
      id: "",
      number: Number(book.number),
      author: book.author,
      title: book.title,
      description: book.description,
      donatedFromUser: {
        userId: user.id,
        userEmail: user.email,
        date: "",
      },
      img: "",
      status: "free",
      RFID: "",
      comments: [],
      readNow: {
        userId: "",
        nickname: "",
        dateStart: "",
        dateFinish: "",
      },
      readBefore: [],
    });

    // загружаем обложку
    let url = await uploadBookImg(file, docRef.id);

    // добавляем в базу книги id и ссылку на картинку книги
    await updateDoc(docRef, {
      id: docRef.id,
      img: url,
    });
  } catch (e) {
    console.log(e);
  }
};

// получить список всех книг
export const getAllBook = async () => {
  // if (books.length) {
  //   return books;
  // }
  const querySnapshot = await getDocs(collection(db, "books"));
  books = [];
  querySnapshot.forEach((doc) => {
    books.push(doc.data());
  });
  return books;
};

// получить книгу по id
export const getBookById = async (id) => {
  // if (books.length) {
  //   let book = books.filter((book) => book.id === id);
  //   return book[0];
  // }
  const docSnap = await getDoc(doc(db, "books", id));
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
};

// взять книгу
export const onHandBook = async (user, book) => {
  const docRefBook = doc(db, "books", book.id);
  const docSnap = await getDoc(docRefBook);
  if (docSnap.data().status !== "free") {
    console.log("книгу только что заняли");
    return;
  }
  let date = new Date();
  let dateStart = date;
  let dateFinish = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + 7
  );
  await updateDoc(docRefBook, {
    status: "onHands",
    readNow: {
      userId: user.id,
      nickname: user.nickname,
      dateStart: dateStart,
      dateFinish: dateFinish,
    },
  });
  const docRefUser = doc(db, "users", user.id);
  user.books.read.push({
    id: book.id,
    dateStart: dateStart,
    dateFinish: dateFinish,
  });

  await updateDoc(docRefUser, {
    books: user.books,
  });
};

// сдать книгу
export const onFreeBook = async (user, book) => {
  const docRefBook = doc(db, "books", book.id);
  let dateFinish = new Date();

  book.readBefore.push({
    userId: book.readNow.userId,
    nickname: book.readNow.nickname,
    dateStart: book.readNow.dateStart,
    dateFinish: dateFinish,
  });
  await updateDoc(docRefBook, {
    status: "free",
    readBefore: book.readBefore,
    readNow: {
      userId: "",
      nickname: "",
      dateStart: "",
      dateFinish: "",
    },
  });

  const docRefUser = doc(db, "users", user.id);
  user.books.read = user.books.read.filter((b) => b.id !== book.id);
  await updateDoc(docRefUser, {
    books: user.books,
  });
};
