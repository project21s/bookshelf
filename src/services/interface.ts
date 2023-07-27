interface Book {
  id: string;
  number: number;
  author: string;
  title: string;
  img: string;
  status: "free" | "onHands" | "archive";
  RFID: string;
  comment: {
    nickname: string;
    date: string;
    text: string;
  }[];
  readNow: {
    nickname: string;
    dateStart: string;
    dateFinish: string;
  };
  readBefore: {
    nickname: string;
    dateStart: string;
    dateFinish: string;
  }[];
}

interface User {
  id: string;
  nickname: string;
  books: {
    favorite: {
      id: string;
    }[];
    read: {
      id: string;
      dateStart: string;
      dateFinish: string;
    }[];
  };
}
