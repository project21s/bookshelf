import book1 from "../assets/book_img/1.jpeg";
import book2 from "../assets/book_img/2.png";
import book3 from "../assets/book_img/3.jpeg";
import book4 from "../assets/book_img/4.jpeg";
import book5 from "../assets/book_img/5.png";
import book6 from "../assets/book_img/6.png";
import book7 from "../assets/book_img/7.jpeg";
import book8 from "../assets/book_img/8.jpeg";
import book9 from "../assets/book_img/9.jpeg";
import book10 from "../assets/book_img/10.jpeg";

export const books = [
  {
    id: 1,
    author: "Ст. КОВИ",
    title: "7 навыков высокоэффективных людей",
    img: book1,
    isFree: true,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    prev_nick: ['stironni',
                'lowellda'],
    prev_start: ['20.01.2023', 
                 '28.02.2023'],
    prev_end: ['27.01.2023', 
               '19.03.2023'],
    review_nick: ['stironni', 
                  'lowellda'],
    review_date: ['27.01.2023', 
                  '19.03.2023'],
    review: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
             'Пушка'],
  },
  {
    id: 2,
    author: "Дж. КОЛЛИНЗ",
    title: "От хорошего к великому",
    img: book2,
    isFree: true,
    desc: "",
    prev_nick: ['stironni',
                'lowellda'],
    prev_start: ['20.01.2023', 
                 '28.02.2023'],
    prev_end: ['27.01.2023', 
               '19.03.2023'],
    review_nick: ['stironni', 
                  'lowellda'],
    review_date: ['27.01.2023', 
                  '19.03.2023'],
    review: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
             'Пушка'],
  },
  {
    id: 3,
    author: "Дж. БАРЛОУ, К. МЁЛЛЕР",
    title: "Жалоба - это подарок",
    img: book3,
    isFree: false,
    desc: "",
    prev_nick: [],
    prev_start: [],
    prev_end: [],
    review_nick: [],
    review_date: [],
    review: [],
  },
  {
    id: 4,
    author: "Дж. ЛАЙКЕР",
    title: "Дао Toyota",
    img: book4,
    isFree: true,
  },
  {
    id: 5,
    author: "И. КАЛДЕРОН",
    title: "Развитие лидеров",
    img: book5,
    isFree: false,
  },
  {
    id: 6,
    author: "Э. Голдратт",
    title: "Критическая цепь",
    img: book6,
    isFree: false,
  },
  {
    id: 7,
    author: "С. Прата",
    title: "Язык программирования C++",
    img: book7,
    isFree: true,
  },
  {
    id: 8,
    author: "Дэн Вальдшмидт",
    title: "БУДЬ лучшей версией себя",
    img: book8,
    isFree: true,
  },
  {
    id: 9,
    author: " Максим Дорофеев",
    title: "Джедайские техники",
    img: book9,
    isFree: false,
  },
  {
    id: 10,
    author: "Дэвид Аллен",
    title: "Getting Things Done",
    img: book10,
    isFree: true,
  },
];


export const user = [
  {
  id: 2,
  nickname: 'stironni',
  books: {
    favorite: {
      id: ['1', '6'],
    },
    read: {
      id: [],
      dateStart: [],
      dateFinish: [],
    },
  },
},
];