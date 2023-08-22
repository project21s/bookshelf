interface Book {
  id: string;
  number: number;
  author: string;
  title: string;
  description: string;
  donatedFromUser: {
    userId: string;
    userEmail: string;
    date: string;
  },
  img: string;
  status: "free" | "onHands" | "archive";
  RFID: string;
  comments: {
    userId: string;
    nickname: string;
    date: string;
    text: string;
  }[];
  readNow: {
    userId: string;
    nickname: string;
    dateStart: string;
    dateFinish: string;
  };
  readBefore: {
    userId: string;
    nickname: string;
    dateStart: string;
    dateFinish: string;
  }[];
}

interface User {
  id: string;
  nickname: string;
  role: "reader" | "admin";
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
