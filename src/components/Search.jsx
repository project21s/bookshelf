import { useState } from 'react';
import "../pages/Home.css";
import BookTable from './BookTable';
import SearchBar from './SearchBar';


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