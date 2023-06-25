import { useState } from 'react';
import "../Home.css";
import { AiOutlineSearch } from 'react-icons/ai';



function BookRow({ book }) {
  const NoFree = book.isFree ? "" :
    <span style={{ color: 'grey' }}>
      На руках
    </span>;

const NOFreeImage = book.isFree ? <img class="bookImg" alt={book.title} src={book.img} />:
<img class="bookImg grayscale" alt={book.title} src={book.img} />;

  return (
    
    <div class="param">
          <div class="isFree">{NoFree}</div>
          <div class="bookId">{book.id}</div>
           {NOFreeImage}
          <div class="author">{book.author}</div>
          <div class="title">{book.title}</div>
    </div>

  );
}

function BookTable({ books, filterText, inStockOnly }) {
  const rows = [];

  books.forEach((book) => {
    if (
      book.title.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      if (
        book.author.toLowerCase().indexOf(
          filterText.toLowerCase()
        ) === -1
      ) {
        return;
      }
    }
    
    if (inStockOnly && !book.isFree) {
      return;
    }
    rows.push(
      <BookRow
        book={book}
        key={book.id} />
    );
  });


  return (
    <table>
      <thead>
        <tr>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <form>
      
      <input class="SearchInput"
        type="text" 
        value={filterText} placeholder="ПОИСК" 
        onChange={(e) => onFilterTextChange(e.target.value)} />
        <div class="iconSearch"><AiOutlineSearch /></div>
        <div class="FreeBooksCheck">
          <input 
          type="checkbox" 
          checked={inStockOnly} 
          onChange={(e) => onInStockOnlyChange(e.target.checked)} />
          {' '} 
          Свободные книги
        </div>
    </form>
  );
}


function Search({ books }) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
  
    return (
      <div>
        <SearchBar 
          filterText={filterText} 
          inStockOnly={inStockOnly} 
          onFilterTextChange={setFilterText} 
          onInStockOnlyChange={setInStockOnly} />
        <BookTable 
          books={books} 
          filterText={filterText}
          inStockOnly={inStockOnly} />
      </div>
    );
  }

export default Search;