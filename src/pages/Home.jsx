import { books } from '../services/bookMockAPI';
import "./Home.css";
import Search from '../components/Search';
import { Player } from '@lottiefiles/react-lottie-player';
import spaceman from "../assets/spaceman.json"

function Home() {
  return (
    <div class="home" >
      <button class="addBook">Добавить книгу</button>
      <div class="header">
        <Player autoplay loop src={spaceman} class="spaceman"></Player>
        <p class="hello">Рады видеть тебя в нашей школьной библиотеке</p>
     </div>
       <p class="desc">
        Найди интересную тебе книгу, если она сейчас свободна - выбери ее в списке и укажи свой ник
        <br/><br/>
        - Брать книгу на одну неделю, не больше
        <br/>
        - Книги просим возвращать в свою ячейку согласно её номеру
      </p>
<Search books={books} />
</div>
  )
}

export default Home;