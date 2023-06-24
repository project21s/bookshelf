import { useState } from 'react';
import "../Home.css";

function BookRow({ book }) {
  const Free = book.isFree ? "" :
    <span style={{ color: 'red' }}>
      На руках
    </span>;

  return (
    
    <div class="param">
          <div class="isFree">{Free}</div>
          <div class="bookId">{book.id}</div>
          <img class="bookImg" alt={book.title} src={book.img}  />
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
      <input 
        type="text" 
        value={filterText} placeholder="Search..." 
        onChange={(e) => onFilterTextChange(e.target.value)} />
      <label>
        <input 
          type="checkbox" 
          checked={inStockOnly} 
          onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        {' '}
        Свободные книги
      </label>
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