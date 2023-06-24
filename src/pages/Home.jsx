import { books } from '../services/bookMockAPI';
import "./Home.css";
import spaceman from "../assets/Spaceman.JPG";
import Search from './components/Search';

function Home() {
  return (
    <div class="home" >
      <button class="addBook">Добавить книгу</button>
      <div class="header">
        <img class="spaceman" alt="spaceman" src={spaceman} />
        <p class="hello">Рады видеть тебя в нашей школьной библиотеке</p>
     </div>
       <p class="desc">Найди интересную тебе книгу, если она сейчас свободна - выбери ее в списке и укажи свой ник<br/><br/>
- Брать книгу на одну неделю, не больше<br/>
- Книги просим возвращать в свою ячейку согласно её номеру</p>
<Search books={books} />
</div>
  )
}

export default Home;